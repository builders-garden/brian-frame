import { kv } from "@vercel/kv";
import {
  TransactionCalldataRequestStatus,
  TransactionCalldataResponse,
} from "./brian-api";
import { ENSO_ROUTER_ABI, LIFI_DIAMOND_PROXY_ABI } from "./constants/lifi-diamond-proxy-abi";

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
  const fromChainId = transactionCalldata?.result?.data.steps[0]?.chainId;
  // get the transaction calldata of the chosen transaction object
  const transactionCalldataForUser =
    transactionCalldata?.result?.data.steps[0]?.data;
  // get the transaction value of the chosen transaction object
  const transactionValue = transactionCalldata?.result?.data.steps[0]?.value;
  // get the transaction to address of the chosen transaction object
  const transactionToAddress = transactionCalldata?.result?.data.steps[0]?.to;
  // set abi for the transaction object
  const abi = transactionToAddress === "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE" ? LIFI_DIAMOND_PROXY_ABI : ENSO_ROUTER_ABI;
  

  return {
    chainId: "eip155:".concat(fromChainId!.toString()),
    method: "eth_sendTransaction",
    params: {
      abi: abi, 
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
