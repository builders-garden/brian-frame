// brian api interaction https://docs.brianknows.org/brian-api-beta/apis/agent-apis

import axios, { AxiosError, AxiosResponse } from "axios";

interface Protocol {
  key: string;
  name: string;
  logoURI: string;
}

interface TransactionStep {
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

interface Token {
  address: string;
  chainId: number;
  symbol: string;
  decimals: number;
  name: string;
  coinKey: string;
  logoURI: string;
  priceUSD: string;
}

interface Transaction {
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

interface TransactionCalldataResponse {
  result: Transaction[];
}

const apiKey = process.env.BRIAN_API_KEY;

export async function generateTransactionCalldata(
  prompt: string,
  address: string
): Promise<TransactionCalldataResponse | null> {
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
    return response.data;
  } catch (error: any) {
    console.error("Error:", error.response?.status, error.response?.data);
    return null;
  }
}
