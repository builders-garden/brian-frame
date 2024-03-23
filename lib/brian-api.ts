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

export interface TransactionData {
  description: string;
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
  steps: TransactionStep[];
}

export interface Transaction {
  action: string;
  data: TransactionData[];
}

export enum TransactionCalldataRequestStatus {
  ERROR = "error",
  SUCCESS = "success",
  LOADING = "loading",
}

export interface TransactionCalldataResponse {
  result?: Transaction;
  status: TransactionCalldataRequestStatus;
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

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "x-brian-api-key": apiKey!,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseData = await response.json();
  if (!response.ok || response.status !== 200) {
    console.error("Error in getting transaction calldata", responseData);
    return { status: TransactionCalldataRequestStatus.ERROR };
  }

  if (responseData === null || responseData === undefined) {
    return { status: TransactionCalldataRequestStatus.ERROR };
  }
  // check if the response is empty
  if (responseData.result.length === 0) {
    return { status: TransactionCalldataRequestStatus.ERROR };
  }
  // check if no routes are available
  if (!responseData.result[0]!.data) {
    return { status: TransactionCalldataRequestStatus.ERROR };
  }

  return {
    result: responseData.result[0],
    status: TransactionCalldataRequestStatus.SUCCESS,
  };
}
