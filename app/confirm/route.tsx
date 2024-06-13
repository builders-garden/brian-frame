import { Button } from "frames.js/next";
import { getBrianTransactionOptions } from "../../lib/kv";
import { getFrameMessage } from "frames.js/getFrameMessage";
import { checkAllowance } from "../../lib/utils";
import { frames } from "../../lib/frames";
import { vercelURL } from "../utils";
import { NATIVE } from "../../lib/constants/utils";
import { parseUnits } from "viem";
import { formatUnits } from "ethers/lib/utils";
import { getConnectedAddressesForFID } from "../../lib/airstack";

const handleRequest = frames(async (ctx) => {
  const body = await ctx.request.json();
  const url = new URL(ctx.request.url);
  const { searchParams } = url;
  const requestId = searchParams.get("id");
  const message = await getFrameMessage(body);
  const txData = await getBrianTransactionOptions(requestId!);
  const choiceIndex = message.buttonIndex - 1;
  //const connectedAddress = message.connectedAddress;
  const connectedAddress = await getConnectedAddressesForFID(message.requesterFid.toString())
  const from = txData.result?.data.steps[0]?.from;
  const isETH = txData.result?.data?.fromToken.address! === NATIVE;
  const fromAmountNormalized = formatUnits(txData?.result?.data.fromAmount!, txData?.result?.data.fromToken!.decimals)
  const shortAddress = connectedAddress?.slice(0, 6) + "..." + connectedAddress?.slice(-4);
  const routerSolver = txData.result?.solver === "Enso" ? "Enso" : "Lifi";
  const allowance = !isETH
    ? await checkAllowance(
        txData.result?.data.fromToken.address!,
        txData.result?.data.steps[0]!.from!,
        txData.result?.data.steps[0]!.to!,
        txData.result?.data.steps[0]!.chainId!
      )
    : BigInt(0);
  if (
    txData.result?.data.fromToken.address! !== NATIVE &&
    allowance < BigInt(txData.result?.data.fromAmount!)
  ) {
    return {
      postUrl: "/results",
      //image: `${vercelURL()}/images/approve.png`,
      image: (
        <div tw="relative flex items-center justify-center">
          <img
            src={`${vercelURL()}/images/approve.png`}
            tw="absolute"
            width="400px"
            height="400px"
          />
          <div tw="text-white flex flex-col mt-16">
            <div
              key={txData!.result?.action}
              tw="flex flex-row items-center justify-start rounded-lg bg-[#030620] px-4 h-[110px] w-[350px] mb-4"
            >
              <div tw="flex flex-col text-[14px]">
              <div tw="flex">
                <span tw="text-gray-500 mr-1">You (</span>
                <span tw="text-gray-500 mr-1">{shortAddress}</span>
                <span tw="text-gray-500">) are going to approve </span>
              </div>
              <div tw="flex">
                <span tw="text-gray-500">{routerSolver} router to spend {fromAmountNormalized} {txData.result?.data?.fromToken.symbol!}</span>
              </div>
              <div tw="flex">
                <span tw="text-gray-500"> for the {txData.result?.action!} transaction </span>
              </div>
            </div>
            </div>
          </div>
        </div>
      ),
      imageOptions: {
        aspectRatio: "1:1",
        width: 400,
        height: 400,
      },
      buttons: [
        <Button
          action="tx"
          key="1"
          target={`/api/approve-calldata?id=${requestId}&choice=${choiceIndex}`}
          post_url={`/confirm?id=${requestId}`}
        >
          ✅ Approve
        </Button>,
        <Button action="post" key="1" target={`/confirm?id=${requestId}`}>
          🔁 Refresh
        </Button>,
        <Button action="post" key="2" target={`/loading?id=${requestId}`}>
          ↩️ Go back
        </Button>,
      ],
    };
  }

  return {
    postUrl: "/results",
    image: (
      <div tw="relative flex items-center justify-center">
        <img
          src={`${vercelURL()}/images/selected.png`}
          tw="absolute"
          width="400px"
          height="400px"
        />
        <div tw="relative z-10 flex flex-col pt-8 px-8">
          <div tw="flex text-white text-[16px]">
            {txData.result?.data.description}
          </div>
          {connectedAddress?.toLowerCase() !== from?.toLowerCase() && (
            <div tw="text-[16px] text-amber-500 mt-2">
              Make sure to use your Farcaster connected wallet.
            </div>
          )}
        </div>
      </div>
    ),
    imageOptions: {
      aspectRatio: "1:1",
      width: 400,
      height: 400,
    },
    buttons: [
      <Button
        action="tx"
        key="1"
        target={`/api/calldata?id=${requestId}&choice=${choiceIndex}`}
        post_url={`/results?id=${requestId}&chainId=${txData.result?.data.steps[0]!.chainId!}`}
      >
        ✅ Confirm
      </Button>,
      <Button action="post" key="2" target={`/loading?id=${requestId}`}>
        ❌ Reject
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
