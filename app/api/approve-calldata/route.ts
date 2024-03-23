import { getBrianTransactionCalldata } from "../../../lib/kv";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const url = new URL(req.url);
  const { searchParams } = url;
  const requestId = searchParams.get("id");
  const choice = searchParams.get("choice");
  const txCalldata = await getBrianTransactionCalldata(
    requestId!,
    parseInt(choice!)
  );
  console.log("Transaction calldata", txCalldata);
  return NextResponse.json(txCalldata);
};
