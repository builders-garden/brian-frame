import { NextRequest, NextResponse } from "next/server";
import { verifySignatureAppRouter } from "@upstash/qstash/dist/nextjs";
import { generateTransactionCalldata } from "../../../lib/brian-api";
import { storeBrianTransactionObject } from "../../../lib/kv";

async function handler(req: NextRequest) {
  const body = await req.json();
  // extract data params from the request
  const { prompt, id, address } = body;

  console.log("Processing task...", {
    id,
    prompt,
    address,
  });

  const transactionCalldataResponse = await generateTransactionCalldata(
    prompt,
    address
  );

  // store the result and id in Vercel Kv
  const storeBrianResultInKv = await storeBrianTransactionObject(
    transactionCalldataResponse!,
    id
  );

  console.log("Transaction calldata stored", storeBrianResultInKv);

  return NextResponse.json({ name: "Brian transaction stored" });
}

export const POST = verifySignatureAppRouter(handler);
