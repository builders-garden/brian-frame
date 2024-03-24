import { createFrames, Button } from "frames.js/next";
import { generateCaptchaChallenge } from "../../lib/captcha";
import {
  getBrianTransactionCalldata,
  getBrianTransactionOptions,
} from "../../lib/kv";
import { getFrameMessage } from "frames.js/getFrameMessage";
import { checkAllowance } from "../../lib/utils";
import { frames } from "../../lib/frames";
import { vercelURL } from "../utils";

const handleRequest = frames(async (ctx) => {
  const url = new URL(ctx.request.url);
  const { searchParams } = url;
  const requestId = searchParams.get("id");
  const body = await ctx.request.json();
  const message = await getFrameMessage(body);
  const txData = await getBrianTransactionOptions(requestId!);
  const choiceIndex = message.buttonIndex - 1;
  const allowance = await checkAllowance(
    txData.result?.data[choiceIndex]?.fromToken.address!,
    txData.result?.data[choiceIndex]?.steps[0]!.from!,
    txData.result?.data[choiceIndex]?.steps[0]!.to!,
    txData.result?.data[choiceIndex]?.steps[0]!.chainId!
  );
  if (allowance < BigInt(txData.result?.data[choiceIndex]?.fromAmount!)) {
    return {
      postUrl: "/results",
      image: `${vercelURL()}/images/approve.png`,
      imageOptions: {
        aspectRatio: "1:1",
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
      // TODO: render the selected tx option properly (images/selected.png)
      <div tw="relative flex items-center justify-center text-blue-500">
        <img
          src={`${vercelURL()}/images/selected.png`}
          tw="absolute"
          width="400px"
          height="400px"
        />
        <div tw="relative z-10 flex">
          {txData.result?.data[choiceIndex]?.description}
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
        post_url="/results?chainId="
      >
        ❌ Reject
      </Button>,
      <Button
        action="post"
        key="2"
        target={`/loading?id=${requestId}&chainId=${txData.result?.data[
          choiceIndex
        ]?.steps[0]!.chainId!}`}
      >
        ✅ Confirm
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
