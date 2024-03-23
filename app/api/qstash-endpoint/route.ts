import { NextRequest, NextResponse } from "next/server";
import { verifySignatureAppRouter } from "@upstash/qstash/dist/nextjs";
import { generateTransactionCalldata } from "../../../lib/brian-api";
import { storeBrianTransactionObject } from "../../../lib/kv";

async function handler(req: NextRequest) {
  let prompt: string;
  let address: string;
  let id: number;

  const data = await req.json();
  // extract data params from the request
  prompt = data.prompt;
  address = data.address;
  id = data.id;

  const transactionCalldataResponse = await generateTransactionCalldata(prompt, address);

  // store the result and id in Vercel Kv
  const storeBrianResultInKv = await storeBrianTransactionObject(transactionCalldataResponse!, id);

  return NextResponse.json({ name: "Brian transaction stored" });
}

export const POST = verifySignatureAppRouter(handler);