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
  // get from chain id
  const fromChainId = transactionCalldata?.result?.data[userChoice]?.fromChainId;
  // get the transaction calldata of the chosen transaction object
  const transactionCalldataForUser =
    transactionCalldata?.result?.data[userChoice]!.steps[0]?.data;
  // get the transaction value of the chosen transaction object
  const transactionValue = transactionCalldata?.result?.data[userChoice]!.steps[0]?.value;
  // return the transaction object for the frame interaction

  return {
    chainId: "eip155:10",
    method: "eth_sendTransaction",
    params: {
      abi: [...], // JSON ABI of the function selector and any errors
      to: "0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D",
      data: transactionCalldataForUser,
      value: transactionValue,
    },
  };
};

/*
{
    chainId: "eip155:10",
    method: "eth_sendTransaction",
    params: {
      abi: [...], // JSON ABI of the function selector and any errors
      to: "0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D",
      data: "0x783a112b0000000000000000000000000000000000000000000000000000000000000e250000000000000000000000000000000000000000000000000000000000000001",
      value: "984316556204476",
    },
  };
*/
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
