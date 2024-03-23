import { getFrameMessage } from "frames.js/getFrameMessage";
import { createFrames, Button } from "frames.js/next";
import { validateCaptchaChallenge } from "../../../lib/captcha";

const frames = createFrames();
const handleRequest = frames(async (ctx) => {
  const url = new URL(ctx.request.url);
  const { searchParams } = url;
  const captchaId = searchParams.get("id");
  const body = await ctx.request.json();
  const message = await getFrameMessage(body);
  const inputText = message?.inputText;
  if (!inputText) {
    return {
      postUrl: "/captcha",
      image: (
        <div className="text-blue-500" style={{ display: "flex" }}>
          Provide an input text please
        </div>
      ),
      buttons: [
        <Button action="post" key="1" target={"/captcha"}>
          Retry
        </Button>,
      ],
    };
  }

  console.log(inputText, captchaId);
  const isValid = await validateCaptchaChallenge(
    captchaId!,
    parseInt(inputText)
  );

  if (!isValid) {
    console.error("Invalid captcha", { captchaId, inputText });
    return {
      postUrl: "/captcha",
      image: (
        <div className="text-blue-500" style={{ display: "flex" }}>
          Invalid input text
        </div>
      ),
      buttons: [
        <Button action="post" key="1" target={"/captcha"}>
          Retry
        </Button>,
      ],
    };
  }
  return {
    postUrl: "/captcha",
    image: (
      <div className="text-blue-500" style={{ display: "flex" }}>
        Success!
      </div>
    ),
    buttons: [
      <Button action="post" key="1" target={"/captcha"}>
        LFG
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
