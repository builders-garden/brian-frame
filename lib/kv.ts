import { kv } from "@vercel/kv";
import { TransactionCalldataResponse } from "./brian-api";

// store the result and id in Vercel Kv

export const storeBrianTransactionObject = async (
  transaction: TransactionCalldataResponse,
  stashId: number
) => {
  await kv.set(`request/${stashId}`, transaction);

  return stashId;
};
// read: stashid -> 3 options
// read: stashid -> calldata (frame transaction)
