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
          <Button action="post" key="1" target={`/build?id=${requestId}`}>
            🔄 Try again
          </Button>,
        ],
      };
    }
  }

  const { result: txOptions, status: requestStatus } =
    await getBrianTransactionOptions(requestId!);
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
        <div tw="absolute text-white flex flex-col">
          {txOptions?.data.map((txData, index) => {
            return (
              <div
                key={txOptions.action}
                tw="flex flex-row items-center rounded-lg bg-[#030620] px-4"
              >
                <h1 tw="text-[12px]">{index}</h1>
                <div tw="flex flex-col text-[10px] ml-4">
                  <div tw="flex">
                    <span tw="text-gray-500 mr-2">Protocol:</span>{" "}
                    {txData.steps[0]!.protocol.name}
                  </div>
                  <div tw="flex">
                    <span tw="text-gray-500 mr-2">Receive min:</span>{" "}
                    {formatUnits(
                      BigInt(txData.toAmountMin),
                      txData.toToken.decimals
                    ).toString()}
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
      <Button action="post" key="1" target={`/confirm?id=${requestId}`}>
        1
      </Button>,
      <Button action="post" key="2" target={`/confirm?id=${requestId}`}>
        2
      </Button>,
      <Button action="post" key="3" target={`/confirm?id=${requestId}`}>
        3
      </Button>,
      <Button
        action="post"
        key="4"
        target={`/build?id=${requestId}&restart=true`}
      >
        ↩️ Start over
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
