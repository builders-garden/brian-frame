import { createFrames, Button } from "frames.js/next";
import { generateCaptchaChallenge } from "../../lib/captcha";
import { deleteBrianTransactionObject } from "../../lib/kv";

const frames = createFrames();
const handleRequest = frames(async (ctx) => {
  const url = new URL(ctx.request.url);
  const { searchParams } = url;
  const id = searchParams.get("id");
  const restart = searchParams.get("restart") === "true";
  if (restart) {
    await deleteBrianTransactionObject(parseInt(id!));
  }
  return {
    postUrl: "/loading?id=" + id,
    image: (
      <div tw="text-blue-500 flex p-8">
        Hi, I&apos;m Brian, a Web3 AI assistant here to help you executing your
        transactions.
      </div>
    ),
    textInput: "I want to swap 10 USDC for ETH",
    buttons: [
      <Button
        action="post"
        key="1"
        target={`/loading?id=${id}&requestTimestamp=${Date.now()}&status=start`}
      >
        Build transaction
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
