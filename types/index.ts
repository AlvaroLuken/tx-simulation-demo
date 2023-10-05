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
export type AlchemyApiResponse = AssetChangesResponse;
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

export type Execution = {
  apiParams: TransactionParam,
  response: {
    data: AlchemyApiResponse
  },
  // @todo refer etherscan
  txType: "Transfer" | "Contract Call"
}
