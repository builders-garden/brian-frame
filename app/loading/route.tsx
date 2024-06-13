import { Button } from "frames.js/next";
import { getBrianTransactionOptions } from "../../lib/kv";
import { getFrameMessage } from "frames.js/getFrameMessage";
import { formatUnits } from "viem";
import { vercelURL } from "../utils";
import { TransactionCalldataRequestStatus } from "../../lib/brian-api";
import { frames } from "../../lib/frames";

const handleRequest = frames(async (ctx) => {
  const url = new URL(ctx.request.url);
  const { searchParams } = url;
  const requestId = searchParams.get("id");
  const status = searchParams.get("status");
  if (status === "start") {
    const body = await ctx.request.json();
    const message = await getFrameMessage(body);
    const res = await fetch(`${vercelURL()}/api/brian-task`, {
      method: "POST",
      headers: {
        "x-secret": process.env.SECRET!,
      },
      body: JSON.stringify({
        prompt: message.inputText,
        address: message.requesterVerifiedAddresses[0],
        id: requestId,
      }),
    });
    if (!res.ok) {
      return {
        postUrl: "/build",
        image: `${vercelURL()}/images/error.png`,
        imageOptions: {
          aspectRatio: "1:1",
        },
        buttons: [
          <Button
            action="post"
            key="1"
            target={`/build?id=${requestId}&restart=true`}
          >
            🔄 Try again
          </Button>,
        ],
      };
    }
  }

  const { result: txOptions, status: requestStatus } =
    await getBrianTransactionOptions(requestId!);
    console.log(txOptions?.data, "txOptions?.data")


  if (requestStatus === TransactionCalldataRequestStatus.ERROR) {
    return {
      postUrl: "/results?id=${requestId}",
      image: `${vercelURL()}/images/error.png`,
      imageOptions: {
        aspectRatio: "1:1",
      },
      buttons: [
        <Button
          action="post"
          key="1"
          target={`/build?id=${requestId}&restart=true`}
        >
          🔄 Try again
        </Button>,
      ],
    };
  }

  if (requestStatus === TransactionCalldataRequestStatus.LOADING) {
    const requestTimestamp = searchParams.get("requestTimestamp");
    const timeDiff = Date.now() - parseInt(requestTimestamp!);

    // check if more than 30 seconds passed
    if (timeDiff > 1000 * 30) {
      return {
        postUrl: `/loading?id=${requestId}&requestTimestamp=${requestTimestamp}&status=loading`,
        image: `${vercelURL()}/images/loading-timeout.png`,
        imageOptions: {
          aspectRatio: "1:1",
        },
        buttons: [
          <Button
            action="post"
            key="1"
            target={`/loading?id=${requestId}&requestTimestamp=${requestTimestamp}&status=loading`}
          >
            💬 Show response
          </Button>,
          <Button
            action="post"
            key="1"
            target={`/build?id=${requestId}&restart=true`}
          >
            🔄 Try again
          </Button>,
        ],
      };
    }
    return {
      postUrl: `/results?id=${requestId}`,
      image: `${vercelURL()}/images/loading.gif`,
      imageOptions: {
        aspectRatio: "1:1",
      },
      buttons: [
        <Button
          action="post"
          key="1"
          target={`/loading?id=${requestId}&requestTimestamp=${requestTimestamp}&status=loading`}
        >
          💬 Show response
        </Button>,
      ],
    };
  }

  /*return {
    postUrl: `/results?id=${requestId}`,
    image: (
      <div tw="relative flex items-center justify-center">
        <img
          src={`${vercelURL()}/images/options-1.png`}
          tw="absolute"
          width="400px"
          height="400px"
        />
        <div tw="text-white flex flex-col mt-16">
          {txOptions?.data.map((txData, index) => {
            return (
              <div
                key={txOptions.action}
                tw="flex flex-row items-center justify-end rounded-lg bg-[#030620] px-4 h-[50px] w-[350px] mb-4"
              >
                <h1 tw="text-[26px]">{index + 1}</h1>
                <div tw="flex flex-col text-[10px] ml-4">
                  <div tw="flex">
                    <span tw="text-gray-500 mr-1">Protocol:</span>{" "}
                    {txData.steps[0]!.protocol.name}
                  </div>
                  <div tw="flex">
                    <span tw="text-gray-500 mr-1">Receive min:</span>{" "}
                    {formatUnits(
                      BigInt(txData.toAmountMin),
                      txData.toToken.decimals
                    ).toString()}{" "}
                    {txData.toToken.symbol}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    ),
    imageOptions: {
      aspectRatio: "1:1",
      width: 400,
      height: 400,
    },
    buttons: [
      ...txOptions!.data.map((_, index) => (
        <Button
          action="post"
          key={index + 1}
          target={`/confirm?id=${requestId}`}
        >
          {`Route ${index + 1}`}
        </Button>
      )),
      // <Button action="post" key="2" target={`/confirm?id=${requestId}`}>
      //   2
      // </Button>,
      // <Button action="post" key="3" target={`/confirm?id=${requestId}`}>
      //   3
      // </Button>,
      <Button
        action="post"
        key={txOptions!.data.length + 1}
        target={`/build?id=${requestId}&restart=true`}
      >
        ↩️ Start over
      </Button>,
    ] as any,
  };*/
  // return image depending on the txOptions action
  console.log(txOptions!.action, "txOptions!.action")
  if(txOptions!.action === "transfer") {
    return {
      postUrl: `/results?id=${requestId}`,
      image: (
        <div tw="relative flex items-center justify-center">
          <img
            src={`${vercelURL()}/images/options-1.png`}
            tw="absolute"
            width="400px"
            height="400px"
          />
          <div tw="text-white flex flex-col mt-16">
            <div
              key={txOptions!.action}
              tw="flex flex-row items-center justify-start rounded-lg bg-[#030620] px-4 h-[110px] w-[350px] mb-4"
            >
              <div tw="flex flex-col items-center mr-4">
                <img
                  src={txOptions!.data.fromToken.logoURI}
                  alt={`${txOptions!.data.fromToken.symbol} logo`}
                  tw="w-6 h-6 mb-2"
                />
                <img
                  src={txOptions!.data.toToken.logoURI}
                  alt={`${txOptions!.data.toToken.symbol} logo`}
                  tw="w-6 h-6"
                />
              </div>
              <div tw="flex flex-col text-[10px]">
                <div tw="flex">
                  <span tw="text-gray-500 mr-1">From:</span>{" "}
                  {txOptions!.data.fromToken.symbol}
                </div>
                <div tw="flex">
                  <span tw="text-gray-500 mr-1">To:</span>{" "}
                  {txOptions!.data.toToken.symbol}
                </div>
                <div tw="flex">
                <span tw="text-gray-500 mr-1">From Chain ID:</span>{" "}
                {txOptions!.data.fromChainId}
                </div>
                <div tw="flex">
                  <span tw="text-gray-500 mr-1">To Chain ID:</span>{" "}
                  {txOptions!.data.toChainId}
                </div>
              <div tw="flex">
                <span tw="text-gray-500 mr-1">Receiver:</span>{" "}
                {txOptions!.data.receiver}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
      imageOptions: {
        aspectRatio: "1:1",
        width: 400,
        height: 400,
      },
      buttons: [
        <Button
          action="post"
          key="1"
          target={`/confirm?id=${requestId}`}
        >
          Execute Route
        </Button>,
        <Button
          action="post"
          key="2"
          target={`/build?id=${requestId}&restart=true`}
        >
          ↩️ Start over
        </Button>,
      ] as any,
    };
  } else if(txOptions!.action === "swap" || txOptions!.action === "bridge") {
    return {
      postUrl: `/results?id=${requestId}`,
      image: (
        <div tw="relative flex items-center justify-center">
          <img
            src={`${vercelURL()}/images/options-1.png`}
            tw="absolute"
            width="400px"
            height="400px"
          />
          <div tw="text-white flex flex-col mt-16">
            <div
              key={txOptions!.action}
              tw="flex flex-row items-center justify-start rounded-lg bg-[#030620] px-4 h-[110px] w-[350px] mb-4"
            >
              <div tw="flex flex-col items-center mr-4">
                <img
                  src={txOptions!.data.fromToken.logoURI}
                  alt={`${txOptions!.data.fromToken.symbol} logo`}
                  tw="w-6 h-6 mb-2"
                />
                <img
                  src={txOptions!.data.toToken.logoURI}
                  alt={`${txOptions!.data.toToken.symbol} logo`}
                  tw="w-6 h-6"
                />
              </div>
              <div tw="flex flex-col text-[10px]">
                <div tw="flex">
                  <span tw="text-gray-500 mr-1">From:</span>{" "}
                  {txOptions!.data.fromToken.symbol}
                </div>
                <div tw="flex">
                  <span tw="text-gray-500 mr-1">To:</span>{" "}
                  {txOptions!.data.toToken.symbol}
                </div>
                <div tw="flex">
                <span tw="text-gray-500 mr-1">From Chain ID:</span>{" "}
                {txOptions!.data.fromChainId}
                </div>
                <div tw="flex">
                  <span tw="text-gray-500 mr-1">To Chain ID:</span>{" "}
                  {txOptions!.data.toChainId}
                </div>
                <div tw="flex">
                  <span tw="text-gray-500 mr-1">Solver:</span>{" "}
                  {txOptions!.data.steps[0]!.protocol.name}
                </div>
                <div tw="flex">
                  <span tw="text-gray-500 mr-1">Receive min:</span>{" "}
                  {formatUnits(BigInt(txOptions!.data.toAmountMin), txOptions!.data.toToken.decimals).toString()}{" "}
                  {txOptions!.data.toToken.symbol}{" "}
                  <span tw="text-gray-500">({txOptions!.data.toAmountUSD} USD)</span>
                  </div>
              <div tw="flex">
                <span tw="text-gray-500 mr-1">Receiver:</span>{" "}
                {txOptions!.data.receiver}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
      imageOptions: {
        aspectRatio: "1:1",
        width: 400,
        height: 400,
      },
      buttons: [
        <Button
          action="post"
          key="1"
          target={`/confirm?id=${requestId}`}
        >
          Execute Route
        </Button>,
        <Button
          action="post"
          key="2"
          target={`/build?id=${requestId}&restart=true`}
        >
          ↩️ Start over
        </Button>,
      ] as any,
    };
  } else {
    return {
      postUrl: "/results?id=${requestId}",
      image: `${vercelURL()}/images/error.png`,
      imageOptions: {
        aspectRatio: "1:1",
      },
      buttons: [
        <Button
          action="post"
          key="1"
          target={`/build?id=${requestId}&restart=true`}
        >
          🔄 Try again
        </Button>,
      ],
    };
  } 
});

export const GET = handleRequest;
export const POST = handleRequest;
