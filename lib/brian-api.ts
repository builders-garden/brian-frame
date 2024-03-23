// brian api interaction https://docs.brianknows.org/brian-api-beta/apis/agent-apis

import axios, { AxiosResponse } from "axios";

export interface Protocol {
  key: string;
  name: string;
  logoURI: string;
}

export interface TransactionStep {
  chainId: number;
  blockNumber: number;
  from: string;
  to: string;
  gasLimit: string;
  gasPrice: string;
  data: string;
  value: string;
  protocol: Protocol;
}

export interface Token {
  address: string;
  chainId: number;
  symbol: string;
  decimals: number;
  name: string;
  coinKey: string;
  logoURI: string;
  priceUSD: string;
}

export interface Transaction {
  description: string;
  action: string;
  data: TransactionStep[];
  gasCostUSD: string;
  fromChainId: number;
  fromAmountUSD: string;
  fromAmount: string;
  fromToken: Token;
  fromAddress: string;
  toChainId: number;
  toAmountUSD: string;
  toAmount: string;
  toAmountMin: string;
  toToken: Token;
  toAddress: string;
}

export interface TransactionCalldataResponse {
  result: Transaction[];
}

const apiKey = process.env.BRIAN_API_KEY;

export async function generateTransactionCalldata(
  prompt: string,
  address: string
): Promise<TransactionCalldataResponse> {
  const url = "https://api.brianknows.org/api/v0/agent/transaction";
  const headers = {
    "x-brian-api-key": apiKey,
    "Content-Type": "application/json",
  };
  const data = {
    prompt,
    address,
  };

  try {
    const response: AxiosResponse<TransactionCalldataResponse> =
      await axios.post(url, data, { headers });
      // check if the response is null or undefined
      if (response.data === null || response.data === undefined) {
        return { result: [] };
      }
      // check if the response is empty
      if (response.data.result.length === 0) {
        return { result: [] };
      }
      // check if no routes are available
      if (!response.data.result[0]!.data ) {
        return { result: [] };
      }
    return response.data;
  } catch (error: any) {
    console.error("Error:", error.response?.status, error.response?.data);
    return { result: [] };
  }
}