import {
  FrameButton,
  FrameContainer,
  FrameImage,
  NextServerPageProps,
  getPreviousFrame,
} from "frames.js/next/server";

export default function Page({ searchParams }: NextServerPageProps) {
  const previousFrame = getPreviousFrame(searchParams);

  return (
    <div className="p-4">
      My existing page
      <FrameContainer
        postUrl="/captcha"
        pathname="/"
        state={{}}
        previousFrame={previousFrame}
      >
        <FrameImage
          aspectRatio="1:1"
          src="https://brian-frame.builders.garden/images/intro.gif"
        />
        <FrameButton>Start</FrameButton>
      </FrameContainer>
    </div>
  );
}
