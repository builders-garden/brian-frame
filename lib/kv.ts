import { kv } from "@vercel/kv";
import {
  TransactionCalldataRequestStatus,
  TransactionCalldataResponse,
} from "./brian-api";

export const storeBrianTransactionObject = async (
  transaction: TransactionCalldataResponse,
  id: number
) => {
  await kv.set(`request/${id}`, transaction);

  return id;
};

export const deleteBrianTransactionObject = async (id: string) => {
  await kv.del(`request/${id}`);
};

export const getBrianTransactionCalldata = async (
  id: string,
  userChoice: number
) => {
  const transactionCalldata = await kv.get<TransactionCalldataResponse>(
    `request/${id}`
  );
  // get the transaction calldata of the chosen transaction object
  const transactionCalldataForUser =
    transactionCalldata?.result?.data[userChoice]!.steps[0]?.data;
  return transactionCalldataForUser;
};

export const getBrianTransactionOptions = async (
  id: string
): Promise<TransactionCalldataResponse> => {
  const transactionCalldata = await kv.get<TransactionCalldataResponse>(
    `request/${id}`
  );
  if (!transactionCalldata) {
    return { status: TransactionCalldataRequestStatus.LOADING };
  }
  return transactionCalldata;
};
