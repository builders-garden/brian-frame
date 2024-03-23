import { createFrames, Button } from "frames.js/next";
import { generateCaptchaChallenge } from "../../lib/captcha";

const frames = createFrames();
const handleRequest = frames(async () => {
  const { id, numA, numB } = await generateCaptchaChallenge();
  return {
    postUrl: "/captcha/validate?id=" + id,
    image: (
      <div tw="text-blue-500 flex p-8">
        Hi, I&apos;m Brian, a Web3 AI assistant here to help you executing your
        transactions.
      </div>
    ),
    textInput: "I want to swap 10 USDC for ETH",
    buttons: [
      <Button action="post" key="1" target={`/captcha/validate?id=${id}`}>
        Build transaction
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
