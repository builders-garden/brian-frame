import { createFrames, Button } from "frames.js/next";
import { generateCaptchaChallenge } from "../../lib/captcha";
import {
  getBrianTransactionCalldata,
  getBrianTransactionOptions,
} from "../../lib/kv";
import { getFrameMessage } from "frames.js/getFrameMessage";

const frames = createFrames();
const handleRequest = frames(async (ctx) => {
  const url = new URL(ctx.request.url);
  const { searchParams } = url;
  const requestId = searchParams.get("id");
  const body = await ctx.request.json();
  const message = await getFrameMessage(body);
  const txData = await getBrianTransactionOptions(requestId!);
  return {
    postUrl: "/results",
    image: (
      <div tw="text-blue-500 flex">
        {txData.result?.data[message.buttonIndex - 1]?.description}
      </div>
    ),
    imageOptions: {
      aspectRatio: "1:1",
    },
    buttons: [
      <Button
        action="tx"
        key="1"
        target={`/api/calldata?id=${requestId}&choice=${
          message.buttonIndex - 1
        }`}
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
