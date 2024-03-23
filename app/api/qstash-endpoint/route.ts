import { NextRequest, NextResponse } from "next/server";
import { verifySignatureAppRouter } from "@upstash/qstash/dist/nextjs";
import { generateTransactionCalldata } from "../../../lib/brian-api";

async function handler(req: NextRequest) {
  await new Promise((r) => setTimeout(r, 1000));
  let prompt: string;
  let address: string;
  let id: number;

  const data = await req.json();
  // extract data params from the request
  prompt = data.prompt;
  address = data.address;
  id = data.id;

  // call brian api
  const transactionCalldataResponse = await generateTransactionCalldata(prompt, address);

  await new Promise(resolve => setTimeout(resolve, 500));
  
  return NextResponse.json({ name: "John Doe Serverless" });
}

export const POST = verifySignatureAppRouter(handler);