import { createFrames, Button } from "frames.js/next";
import { generateCaptchaChallenge } from "../../lib/captcha";
import { join } from "path";
import * as fs from "fs";
import { vercelURL } from "../utils";

const frames = createFrames();
const handleRequest = frames(async () => {
  //const fontPath = join(process.cwd(), "Changa-VariableFont.ttf");
  //let fontData = fs.readFileSync(fontPath);
  const { id, numA, numB } = await generateCaptchaChallenge();
  return {
    ratio: "1:1",
    postUrl: "/captcha/validate?id=" + id,
    image: (
      <div tw="relative flex items-center justify-center text-blue-500">
        <img
          src={`${vercelURL()}/images/captcha-compressed.png`}
          tw="absolute"
          width="500px"
          height="500px"
        />
        <div tw="relative z-10 flex">
          {numA} + {numB} = ?
        </div>
      </div>
    ),
    imageOptions: {
      aspectRatio: "1:1",
    },
    /*imageOptions: {
      fonts: [
        {
          data: fontData,
          name: "Changa",
        },
      ],
    },*/
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
