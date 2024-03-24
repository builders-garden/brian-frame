import {
  FrameButton,
  FrameContainer,
  FrameImage,
  NextServerPageProps,
  getPreviousFrame,
} from "frames.js/next/server";
import { vercelURL } from "./utils";

export default function Page({ searchParams }: NextServerPageProps) {
  const previousFrame = getPreviousFrame(searchParams);

  return (
    <div className="p-4">
      <h1>Ciao</h1>
      <FrameContainer
        postUrl="/captcha"
        pathname="/"
        state={{}}
        previousFrame={previousFrame}
      >
        <FrameImage aspectRatio="1:1" src={`${vercelURL()}/images/intro.gif`} />
        <FrameButton action="link" target="https://brianknows.org">
          📚 Brian API
        </FrameButton>
        <FrameButton action="post" target="/instructions">
          ℹ️ Instructions
        </FrameButton>
        <FrameButton>🤖 Start </FrameButton>
      </FrameContainer>
    </div>
  );
}
