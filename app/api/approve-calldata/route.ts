import { encodeFunctionData } from "viem";
import { getBrianTransactionOptions } from "../../../lib/kv";
import { ERC20_ABI } from "../../../lib/constants/erc20";

export const POST = async (req: Request) => {
  const url = new URL(req.url);
  const { searchParams } = url;

  const id = searchParams.get("id");
  const userChoice = Number(searchParams.get("userChoice"));
  // get data from request id
  const transactionData = await getBrianTransactionOptions(id!);
  // get the transaction calldata of the chosen transaction object
  const transactionCalldataForUser =
    transactionData?.result?.data[userChoice]!;
  // get the transaction values of the chosen transaction object
  const tokenAddress = transactionCalldataForUser.fromToken.address;
  const spender = transactionCalldataForUser.toAddress;
  const amount = transactionCalldataForUser.fromAmount;
  const chainId = transactionCalldataForUser.fromChainId;

  const approveData = encodeFunctionData({
    abi: ERC20_ABI,
    functionName: "approve",
    args: [spender, amount],
  });

  console.log("Transaction calldata", approveData);

  return {
    chainId: "eip155:" + chainId?.toString(),
    method: "eth_sendTransaction",
    params: {
      abi: ERC20_ABI, 
      to: tokenAddress,
      data: approveData,
      value: 0,
    },
  };
};
