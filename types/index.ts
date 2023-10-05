export type ExecutionType = "SIMULATE_EXECUTION" | "SIMULATE_ASSET_CHANGES";
export type ApiMethod = "alchemy_simulateAssetChanges" | "alchemy_simulateExecution" | "alchemy_simulateAssetChangesBundle" | "alchemy_simulateExecutionBundle"
type Transaction = {
  from: string,
  to: string,
  value: string,
  data: string,
}

type TransactionParam = {
  id: number,
  jsonrpc: string,
  method: ApiMethod,
  params: Array <Transaction>
}
// @todo add more
export type AlchemyApiResponse = AssetChangesResponse | SimulateExecutionResponse | BundledExecutionResponse;
type AssetChangesResponse = {
  jsonrpc: string,
  id: number,
  result: {
    changes: Array<
      {
        assetType: "ERC20" | "ERC721" | "ERC1155",
        changeType: "TRANSFER",
        from: string,
        to: string,
        rawAmount: string,
        contractAddress: string,
        tokenId: string | null,
        decimals: number,
        symbol: string,
        name: string,
        logo: string,
        amount: string
      }
    >,
    gasUsed: string,
    error: null | Object
  }
}

type DecodedCall = {
  decoded: {
    authority: "ETHERSCAN",
    methodName: string,
    inputs: [
      {
        name: string,
        value: string,
        type: string
      },
    ],
    outputs: []
  },
  type: "CALL",
  from: string,
  to: string,
  value: string,
  gas: string,
  gasUsed: string,
  input: string,
  output: string
}

type SimulateExecutionResponse = {
  jsonrpc: string,
  id: number,
  result: {
    calls: Array<DecodedCall>,
    logs: [
      {
        decoded: DecodedCall,
        address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
        data: "0x0000000000000000000000000000000000000000000000000000000077359400",
        topics: Array<string>
      }
    ]
  }
}

type BundledExecutionResponse = {
  jsonrpc: string,
  id: number,
  result: Array<SimulateExecutionResponse | AssetChangesResponse>
}

export type Execution = {
  apiParams: TransactionParam,
  response: {
    data: AlchemyApiResponse
  },
  // @todo refer etherscan
  txType: "Transfer" | "Contract Call"
}
