import { createPublicClient, http, parseEther, parseUnits } from "viem";
import {base, optimism} from "viem/chains"
import { ERC20_ABI } from "./constants/erc20";

// function to check token allowance
export async function checkAllowance(
  tokenAddress: string, //fromToken address returned from brian 
  owner: string, // user wallet connected
  spender: string, // "to" address returned from brian
  chainId: number, // fromChainId returned from brian
) {
  const chain = chainId === 10 ? optimism : base;
  const publicClient = createPublicClient({
        chain: chain,
        transport: http(),
  });
  const allowance = await publicClient.readContract({
    address: tokenAddress as `0x${string}`,
    abi: ERC20_ABI,
    functionName: 'allowance',
    args: [owner, spender],
  })

  return allowance;
}