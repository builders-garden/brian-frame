import { createFrames, Button } from "frames.js/next";
import {
  deleteBrianTransactionObject,
  getBrianTransactionOptions,
} from "../../lib/kv";
import { getFrameMessage } from "frames.js/getFrameMessage";
import { parseUnits } from "viem";
import { vercelURL } from "../utils";

const frames = createFrames();
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
        image: (
          <div tw="text-blue-500 flex p-8">
            Ops, I was not able to build your transaction, please try again with
            another prompt.
          </div>
        ),
        buttons: [
          <Button action="post" key="1" target={`/build?id=${requestId}`}>
            Start over
          </Button>,
        ],
      };
    }
  }

  const txOptions = await getBrianTransactionOptions(parseInt(requestId!));
  if (txOptions?.length === 0) {
    return {
      postUrl: "/results?id=${requestId}",
      image: (
        <div tw="text-blue-500 flex p-8">
          Ops, I was not able to build your transaction, please try again with
          another prompt.
        </div>
      ),
      buttons: [
        <Button action="post" key="1" target={`/build?id=${requestId}`}>
          Try again
        </Button>,
      ],
    };
  }

  if (!txOptions) {
    const requestTimestamp = searchParams.get("requestTimestamp");
    const timeDiff = Date.now() - parseInt(requestTimestamp!);

    // check if more than 30 seconds passed
    if (timeDiff > 1000 * 30) {
      return {
        postUrl: `/loading?id=${requestId}&requestTimestamp=${requestTimestamp}&status=loading`,
        image: (
          <div tw="text-blue-500 flex p-8">
            Taking a little longer than expected, click back in next 2-3 seconds
          </div>
        ),
        buttons: [
          <Button
            action="post"
            key="1"
            target={`/loading?id=${requestId}&requestTimestamp=${requestTimestamp}&status=loading`}
          >
            Show response 🔁
          </Button>,
          <Button action="post" key="1" target={`/build?id=${requestId}`}>
            Start over
          </Button>,
        ],
      };
    }
    return {
      postUrl: `/results?id=${requestId}`,
      image: <div tw="text-blue-500 flex p-8">Loading...</div>,
      buttons: [
        <Button
          action="post"
          key="1"
          target={`/loading?id=${requestId}&requestTimestamp=${requestTimestamp}&status=loading`}
        >
          Show response 🔁
        </Button>,
      ],
    };
  }

  return {
    postUrl: `/results?id=${requestId}`,
    image: (
      <div tw="text-blue-500 flex p-8">
        {txOptions.map((txOp, index) => {
          return (
            <div key={txOp.action}>
              <img
                alt={`logo-${index}`}
                src={txOp.data[0]?.protocol.logoURI}
              ></img>
              {txOp.data[0]?.protocol.name} -{" "}
              {parseUnits(txOp.toAmountMin, txOp.toToken.decimals).toString()}
            </div>
          );
        })}
      </div>
    ),
    buttons: [
      <Button action="post" key="1" target={`/results?id=${requestId}`}>
        Option 1️⃣
      </Button>,
      <Button action="post" key="2" target={`/results?id=${requestId}`}>
        Option 2️⃣
      </Button>,
      <Button action="post" key="3" target={`/results?id=${requestId}`}>
        Option 3️⃣
      </Button>,
      <Button
        action="post"
        key="4"
        target={`/build?id=${requestId}&restart=true`}
      >
        Start over
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
