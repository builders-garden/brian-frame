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
        <FrameImage aspectRatio="1:1">
          <div tw="w-full h-full bg-slate-700 text-white justify-center items-center flex flex-col">
            Hi, I&apos;m Brian, a Web3 AI assistant here to help you executing
            your transactions.
          </div>
        </FrameImage>
        <FrameButton>Start</FrameButton>
      </FrameContainer>
    </div>
  );
}
