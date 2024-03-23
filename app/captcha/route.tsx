import { createFrames, Button } from "frames.js/next";
import { generateCaptchaChallenge } from "../../lib/captcha";
import { join } from "path";
import * as fs from "fs";

const frames = createFrames();
const handleRequest = frames(async () => {
  const fontPath = join(process.cwd(), "Changa-VariableFont.ttf");
  let fontData = fs.readFileSync(fontPath);

  const { id, numA, numB } = await generateCaptchaChallenge();
  console.log("Generated captcha challenge", { id, numA, numB });
  return {
    postUrl: "/captcha/validate?id=" + id,
    image: (
      <div tw="text-blue-500 flex">
        {numA} + {numB} = ?
      </div>
    ),
    imageOptions: {
      fonts: [
        {
          data: fontData,
          name: "Changa",
        },
      ],
    },
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
