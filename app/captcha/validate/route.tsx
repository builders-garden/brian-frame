import { getFrameMessage } from "frames.js/getFrameMessage";
import { Button } from "frames.js/next";
import { validateCaptchaChallenge } from "../../../lib/captcha";
import { vercelURL } from "../../utils";
import { frames } from "../../../lib/frames";

const handleRequest = frames(async (ctx) => {
  const { id: captchaId } = ctx.searchParams;
  const body = await ctx.request.json();
  const message = await getFrameMessage(body);
  const inputText = message?.inputText;
  if (!inputText) {
    return {
      postUrl: "/captcha",
      image: `${vercelURL()}/images/captcha-error.png`,
      buttons: [
        <Button action="post" key="1" target={"/captcha"}>
          🔄 Try again
        </Button>,
      ],
    };
  }

  const isValid = await validateCaptchaChallenge(
    captchaId!,
    parseInt(inputText)
  );

  if (!isValid) {
    console.error("Invalid captcha", { captchaId, inputText });
    return {
      postUrl: "/captcha",
      image: `${vercelURL()}/images/captcha-error.png`,
      buttons: [
        <Button action="post" key="1" target={"/captcha"}>
           🔄 Try again
        </Button>,
      ],
    };
  }
  return {
    postUrl: "/loading?id=" + captchaId,
    image: `${vercelURL()}/images/instructions.gif`,
    textInput: "I want to swap 10 USDC for ETH",
    imageOptions: {
      aspectRatio: "1:1",
    },
    buttons: [
      <Button
        action="post"
        key="1"
        target={`/loading?id=${captchaId}&requestTimestamp=${Date.now()}&status=start`}
      >
         🔢 Submit prompt
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
