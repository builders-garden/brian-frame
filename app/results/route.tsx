import { createFrames, Button } from "frames.js/next";
import { getFrameMessage } from "frames.js/getFrameMessage";

const frames = createFrames();
const handleRequest = frames(async (ctx) => {
  const url = new URL(ctx.request.url);
  const { searchParams } = url;
  const requestId = searchParams.get("id");
  const chain = searchParams.get("chain");
  const body = await ctx.request.json();
  const message = await getFrameMessage(body);
  const txBaseUrl =
    chain === "base"
      ? `https://basescan.org/tx/`
      : `https://optimistic.etherscan.io/tx/`;
  return {
    postUrl: "/captcha/validate?id=",
    image: <div tw="text-blue-500 flex">{message.transactionId}</div>,
    imageOptions: {
      aspectRatio: "1:1",
    },
    buttons: [
      <Button
        action="tx"
        key="1"
        target={`/build?id=${requestId}&restart=true`}
      >
        Start over ↩️
      </Button>,
      <Button
        action="link"
        key="2"
        target={`${txBaseUrl}${message.transactionId}`}
      >
        Check transaction 🔗
      </Button>,
      <Button action="link" key="3" target={`https://builders.garden`}>
        About builders garden 🌳
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
