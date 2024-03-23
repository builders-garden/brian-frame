import { createFrames, Button } from "frames.js/next";

const frames = createFrames();
const handleRequest = frames(async (ctx) => {
  const url = new URL(ctx.request.url);
  const { searchParams } = url;
  const requestId = searchParams.get("id");
  return {
    postUrl: "/results",
    image: <div tw="text-blue-500 flex p-8">Loading...</div>,
    buttons: [
      <Button action="post" key="1" target={`/restuls?id=${requestId}`}>
        Refresh 🔁
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
