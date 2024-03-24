import { createFrames, Button } from "frames.js/next";
import { generateCaptchaChallenge } from "../../lib/captcha";
import { join } from "path";
import * as fs from "fs";
import { vercelURL } from "../utils";
import { frames } from "../../lib/frames";

const handleRequest = frames(async () => {
  const { id, numA, numB } = await generateCaptchaChallenge();
  console.log({ id, numA, numB });
  return {
    postUrl: "/captcha/validate?id=" + id,
    image: (
      // TODO: render captcha image properly and find a way to include the font
      <div tw="relative flex items-center justify-center text-blue-500">
        <img
          src={`${vercelURL()}/images/captcha-compressed.png`}
          tw="absolute"
          width="400px"
          height="400px"
        />
        <div tw="relative z-10 flex">
          {numA} + {numB} = ?
        </div>
      </div>
    ),
    imageOptions: {
      aspectRatio: "1:1",
      width: 400,
      height: 400,
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
