import { Button } from "frames.js/next";
import { deleteBrianTransactionObject } from "../../lib/kv";
import { vercelURL } from "../utils";
import { frames } from "../../lib/frames";

const handleRequest = frames(async (ctx) => {
  const url = new URL(ctx.request.url);
  const { searchParams } = url;
  const id = searchParams.get("id");
  const restart = searchParams.get("restart") === "true";
  console.log("Restart", restart);
  if (restart) {
    await deleteBrianTransactionObject(id!);
  }
  return {
    postUrl: "/loading?id=" + id,
    image: `${vercelURL()}/images/instructions.gif`,
    textInput: "Swap 1 usdc to eth on arbitrum",
    imageOptions: {
      aspectRatio: "1:1",
    },
    buttons: [
      <Button
        action="post"
        key="1"
        target={`/loading?id=${id}&requestTimestamp=${Date.now()}&status=start`}
      >
        🔢 Submit prompt
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
