import { Button } from "frames.js/next";
import { getFrameMessage } from "frames.js/getFrameMessage";
import { vercelURL } from "../utils";
import { frames } from "../../lib/frames";

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
    image: `${vercelURL()}/images/end.png`,
    imageOptions: {
      aspectRatio: "1:1",
    },
    buttons: [
      <Button
        action="post"
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
        Transaction 🔗
      </Button>,
      <Button action="link" key="3" target={`https://brianknows.org`}>
        Brian 🧠
      </Button>,
      <Button action="link" key="4" target={`https://builders.garden`}>
        builders garden 🌳
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
