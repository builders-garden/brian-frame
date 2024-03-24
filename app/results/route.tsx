import { Button } from "frames.js/next";
import { getFrameMessage } from "frames.js/getFrameMessage";
import { vercelURL } from "../utils";
import { frames } from "../../lib/frames";
import { base } from "viem/chains";
import { validateFrameMessage } from "../../lib/pinata";

const handleRequest = frames(async (ctx) => {
  const body = await ctx.request.json();
  const url = new URL(ctx.request.url);
  const { searchParams } = url;
  const requestId = searchParams.get("id");
  const chainId = searchParams.get("chainId");
  const message = await getFrameMessage(body);
  const txBaseUrl =
    parseInt(chainId!) === base.id
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
        action="link"
        key="1"
        target={`${txBaseUrl}${message.transactionId}`}
      >
        🔗 Transaction
      </Button>,
      <Button action="link" key="2" target={`https://brianknows.org`}>
        📚 Brian API
      </Button>,
      <Button action="link" key="3" target={`https://builders.garden`}>
        🌳 builders garden
      </Button>,
      <Button
        action="post"
        key="4"
        target={`/build?id=${requestId}&restart=true`}
      >
        ↩️ Start again
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
