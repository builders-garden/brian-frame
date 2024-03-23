import { createFrames, Button } from "frames.js/next";
import { generateCaptchaChallenge } from "../../lib/captcha";
import {
  getBrianTransactionCalldata,
  getBrianTransactionOptions,
} from "../../lib/kv";
import { getFrameMessage } from "frames.js/getFrameMessage";
import { checkAllowance } from "../../lib/utils";

const frames = createFrames();
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
    message.requesterVerifiedAddresses[0]!,
    txData.result?.data[choiceIndex]?.toAddress!,
    txData.result?.data[choiceIndex]?.fromChainId!
  );
  if (allowance < BigInt(txData.result?.data[choiceIndex]?.fromAmount!)) {
    return {
      postUrl: "/results",
      image: (
        <div tw="text-blue-500 flex">
          You need to allow the contract to swap your tokens first
        </div>
      ),
      imageOptions: {
        aspectRatio: "1:1",
      },
      buttons: [
        <Button
          action="tx"
          key="1"
          target={`/approve-calldata?id=${requestId}&choice=${choiceIndex}`}
          post_url={`/confirm?id=${requestId}`}
        >
          Approve
        </Button>,
        <Button action="post" key="2" target={`/loading?id=${requestId}`}>
          Go back
        </Button>,
      ],
    };
  }

  return {
    postUrl: "/results",
    image: (
      <div tw="text-blue-500 flex">
        {txData.result?.data[choiceIndex]?.description}
      </div>
    ),
    imageOptions: {
      aspectRatio: "1:1",
    },
    buttons: [
      <Button
        action="tx"
        key="1"
        target={`/api/calldata?id=${requestId}&choice=${choiceIndex}`}
        post_url="/results?chainId="
      >
        Confirm
      </Button>,
      <Button action="post" key="2" target={`/loading?id=${requestId}`}>
        Go back
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
