import { createPublicClient, http, parseEther, parseUnits } from "viem";
import { base, optimism } from "viem/chains";
import { ERC20_ABI } from "./constants/erc20";

// function to check token allowance
export async function checkAllowance(
  tokenAddress: string, //fromToken address returned from brian
  owner: string, // user wallet connected
  spender: string, // "toAddress" address returned from brian
  chainId: number // fromChainId returned from brian
): Promise<bigint> {
  const chain = chainId === 10 ? optimism : base;
  console.log("Chain", chain);
  const publicClient = createPublicClient({
    chain: chain,
    transport: http(),
  });
  console.log("Public client", publicClient);
  const allowance = await publicClient.readContract({
    address: tokenAddress as `0x${string}`,
    abi: ERC20_ABI,
    functionName: "allowance",
    args: [owner, spender],
  });

  return allowance as bigint;
}
