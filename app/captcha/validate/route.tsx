import { getFrameMessage } from "frames.js/getFrameMessage";
import { createFrames, Button } from "frames.js/next";
import { validateCaptchaChallenge } from "../../../lib/captcha";
import { vercelURL } from "../../utils";

const frames = createFrames();
const handleRequest = frames(async (ctx) => {
  const url = new URL(ctx.request.url);
  const { searchParams } = url;
  const captchaId = searchParams.get("id");
  console.log("Validating captcha", { captchaId });
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
          Retry
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
        Build transaction
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
