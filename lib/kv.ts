import { kv } from "@vercel/kv";
import { TransactionCalldataResponse } from "./brian-api";

export const storeBrianTransactionObject = async (
  transaction: TransactionCalldataResponse,
  id: number
) => {
  await kv.set(`request/${id}`, transaction);

  return id;
};

export const deleteBrianTransactionObject = async (id: number) => {
  await kv.del(`request/${id}`);
};

export const getBrianTransactionCalldata = async (
  id: number,
  userChoice: number
) => {
  const transactionCalldata = await kv.get<TransactionCalldataResponse>(
    `request/${id}`
  );
  // get the transaction calldata of the chosen transaction object
  const transactionCalldataForUser =
    transactionCalldata?.result[userChoice]?.data;
  return transactionCalldataForUser;
};

export const getBrianTransactionOptions = async (id: number) => {
  const transactionCalldata = await kv.get<TransactionCalldataResponse>(
    `request/${id}`
  );
  // get the transaction options
  const transactionOptions = transactionCalldata?.result;
  return transactionOptions;
};
