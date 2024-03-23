import { createFrames, Button } from "frames.js/next";
import { generateCaptchaChallenge } from "../../lib/captcha";

const changaFont = fetch(
  new URL(
    "https://brian-frame.builders.garden/Changa-VariableFont.ttf",
    import.meta.url
  )
).then((res) => res.arrayBuffer());

const frames = createFrames();
const handleRequest = frames(async () => {
  const changaFontData = await changaFont;
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
    imageOptions: {
      fonts: [
        {
          name: "Change-VariableFont",
          data: changaFontData,
          weight: 400,
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
