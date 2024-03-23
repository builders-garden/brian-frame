import { createFrames, Button } from "frames.js/next";
import { generateCaptchaChallenge } from "../../lib/captcha";

const frames = createFrames();
const handleRequest = frames(async () => {
  const { id, numA, numB } = await generateCaptchaChallenge();
  console.log("Generated captcha challenge", { id, numA, numB });
  return {
    postUrl: "/captcha/validate?id=" + id,
    image: (
      <div
        tw="text-blue-500 flex"
        style={{
          fontFamily: "Changa-VariableFont",
        }}
      >
        {numA} + {numB} = ?
      </div>
    ),
    textInput: "Enter the result",
    buttons: [
      <Button action="post" key="1" target={`/captcha/validate?id=${id}`}>
        Confirm
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
