import { kv } from "@vercel/kv";
import { TransactionCalldataResponse } from "./brian-api";

export const storeBrianTransactionObject = async (
  transaction: TransactionCalldataResponse,
  stashId: number
) => {
  await kv.set(`request/${stashId}`, transaction);

  return stashId;
};

export const getBrianTransactionCalldata = async (stashId: number, userChoice: number) => {
    const transactionCalldata = await kv.get<TransactionCalldataResponse>(`request/${stashId}`);
    // get the transaction calldata of the chosen transaction object
    const transactionCalldataForUser = transactionCalldata?.result[userChoice]?.data;
    return transactionCalldataForUser;
}

export const getBrianTransactionOptions = async (stashId: number) => {
    const transactionCalldata = await kv.get<TransactionCalldataResponse>(`request/${stashId}`);
    // get the transaction options
    const transactionOptions = transactionCalldata?.result;
    return transactionOptions;
}