import { kv } from "@vercel/kv";
import {
  TransactionCalldataRequestStatus,
  TransactionCalldataResponse,
} from "./brian-api";
import { LIFI_DIAMOND_PROXY_ABI } from "./constants/lifi-diamond-proxy-abi";

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
  const fromChainId = transactionCalldata?.result?.data[userChoice]!.steps[0]?.chainId;
  // get the transaction calldata of the chosen transaction object
  const transactionCalldataForUser =
    transactionCalldata?.result?.data[userChoice]!.steps[0]?.data;
  // get the transaction value of the chosen transaction object
  const transactionValue = transactionCalldata?.result?.data[userChoice]!.steps[0]?.value;
  // get the transaction to address of the chosen transaction object
  const transactionToAddress = transactionCalldata?.result?.data[userChoice]!.steps[0]?.to;

  return {
    chainId: "eip155:".concat(fromChainId!.toString()),
    method: "eth_sendTransaction",
    params: {
      abi: LIFI_DIAMOND_PROXY_ABI, 
      to: transactionToAddress,
      data: transactionCalldataForUser,
      value: transactionValue,
    },
  };
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
