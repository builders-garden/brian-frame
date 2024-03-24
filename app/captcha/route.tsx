import { Button } from "frames.js/next";
import { generateCaptchaChallenge } from "../../lib/captcha";
import { vercelURL } from "../utils";
import { frames } from "../../lib/frames";

// without this line, this type of importing fonts doesn't work?
/*export const runtime = "edge";

const regularFont = fetch(
  new URL("/public/Changa-VariableFont.ttf", import.meta.url)
).then((res) => res.arrayBuffer());*/

const handleRequest = frames(async () => {
  //const regularFontData = await regularFont;

  const { id, numA, numB } = await generateCaptchaChallenge();
  return {
    postUrl: "/captcha/validate?id=" + id,
    image: (
      <div tw="relative flex items-center justify-center text-blue-500">
        <img
          src={`${vercelURL()}/images/captcha.png`}
          tw="absolute"
          width="410px"
          height="410px"
        />
        <div tw="relative z-10 flex items-center justify-center pt-10 text-white font-bold">
          {numA} + {numB} = ?
        </div>
      </div>
    ),
    imageOptions: {
      aspectRatio: "1:1",
      width: 400,
      height: 400,
      /*fonts: [
        {
          data: regularFontData,
          name: "Changa",
        },
      ],*/
    },
    textInput: "Enter the result",
    buttons: [
      <Button action="post" key="1" target={`/captcha/validate?id=${id}`}>
        🔢 Submit captcha
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
