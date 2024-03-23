import { createFrames, Button } from "frames.js/next";
import { generateCaptchaChallenge } from "../../lib/captcha";

const frames = createFrames();
const handleRequest = frames(async () => {
  const { id, numA, numB } = await generateCaptchaChallenge();
  return {
    postUrl: "/frames",
    image: (
      <div>
        <div>{numA}</div>
        <div>+</div>
        <div>{numB}</div>
      </div>
    ),
    buttons: [
      <Button action="post" key="1">
        Click me
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
