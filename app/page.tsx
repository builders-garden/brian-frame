import {
  FrameButton,
  FrameContainer,
  FrameImage,
  FrameInput,
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
        <FrameImage aspectRatio="1:1">
          <div tw="w-full h-full bg-slate-700 text-white justify-center items-center flex flex-col">
            test
          </div>
        </FrameImage>
        <FrameButton>Start</FrameButton>
      </FrameContainer>
    </div>
  );
}
