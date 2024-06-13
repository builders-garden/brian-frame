import { createPublicClient, http, parseEther, parseUnits } from "viem";
import { arbitrum, base, optimism } from "viem/chains";
import { ERC20_ABI } from "./constants/erc20";

// function to check token allowance
export async function checkAllowance(
  tokenAddress: string, //fromToken address returned from brian
  owner: string, // user wallet connected
  spender: string, // "toAddress" address returned from brian
  chainId: number // fromChainId returned from brian
): Promise<bigint> {
  let chain;
  if (chainId === 10) {
    chain = optimism;
  } else if (chainId === 8453){
    chain = base;
  } else if(chainId === 42161){
    chain = arbitrum;
  }
  const publicClient = createPublicClient({
    chain: chain,
    transport: http(),
  });
  console.log("Checking allowance", tokenAddress, owner, spender);
  const allowance = await publicClient.readContract({
    address: tokenAddress as `0x${string}`,
    abi: ERC20_ABI,
    functionName: "allowance",
    args: [owner, spender],
  });
  console.log("Allowance", allowance);

  return allowance as bigint;
}
