export type TransactionParams  = Array<{
  id: number,
  jsonrpc: string,
  method: string,
  params: Array <{
    from: string,
    to: string,
    value: string,
    data: string
  }>
 }>

export type AssetChangesResponse = {
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

export type SimulateExecutionResponse = {
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

const mockSimulateAssetChanges: TransactionParams = [
  {
    id: 1,
    jsonrpc: "2.0",
    method: "alchemy_simulateAssetChanges",
    params: [
      {
        from: "0x8B20249B3B2ee65669b622E56cc9be5c3cd80917",
        to: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        value: "0x0",
        data: "0xa9059cbb00000000000000000000000042719590da938bcb6787627a48ccc77c61d7f7710000000000000000000000000000000000000000000000000000000077359400"
      },
    ],
  },
  {
    id: 1,
    jsonrpc: "2.0",
    method: "alchemy_simulateAssetChanges",
    params: [
      {
        from: "0x8B20249B3B2ee65669b622E56cc9be5c3cd80917",
        to: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        value: "0x0",
        data: "0xa9059cbb00000000000000000000000042719590da938bcb6787627a48ccc77c61d7f7710000000000000000000000000000000000000000000000000000000077359400"
      },
    ],
  },
  {
    id: 1,
    jsonrpc: "2.0",
    method: "alchemy_simulateAssetChanges",
    params: [
      {
        from: "0x8B20249B3B2ee65669b622E56cc9be5c3cd80917",
        to: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        value: "0x0",
        data: "0xa9059cbb00000000000000000000000042719590da938bcb6787627a48ccc77c61d7f7710000000000000000000000000000000000000000000000000000000077359400"
      },
    ],
  },
  {
    id: 1,
    jsonrpc: "2.0",
    method: "alchemy_simulateAssetChanges",
    params: [
      {
        from: "0x8B20249B3B2ee65669b622E56cc9be5c3cd80917",
        to: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        value: "0x0",
        data: "0xa9059cbb00000000000000000000000042719590da938bcb6787627a48ccc77c61d7f7710000000000000000000000000000000000000000000000000000000077359400"
      },
    ],
  },
  {
    id: 1,
    jsonrpc: "2.0",
    method: "alchemy_simulateAssetChanges",
    params: [
      {
        from: "0x8B20249B3B2ee65669b622E56cc9be5c3cd80917",
        to: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        value: "0x0",
        data: "0xa9059cbb00000000000000000000000042719590da938bcb6787627a48ccc77c61d7f7710000000000000000000000000000000000000000000000000000000077359400"
      },
    ],
  }
]

const mockSimulateExecution: TransactionParams = [
  {
    id: 1,
    jsonrpc: "2.0",
    method: "alchemy_simulateExecution",
    params: [
      {
        from: "0x82E1d4DDd636857Ebcf6a0e74B9b0929C158D7FB",
        to: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        value: "0x0",
        data: "0xa9059cbb00000000000000000000000042719590da938bcb6787627a48ccc77c61d7f7710000000000000000000000000000000000000000000000000000000077359400"
      },
    ],
  },
  {
    id: 1,
    jsonrpc: "2.0",
    method: "alchemy_simulateExecution",
    params: [
      {
        from: "0x82E1d4DDd636857Ebcf6a0e74B9b0929C158D7FB",
        to: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        value: "0x0",
        data: "0xa9059cbb00000000000000000000000042719590da938bcb6787627a48ccc77c61d7f7710000000000000000000000000000000000000000000000000000000077359400"
      },
    ],
  }
]

const mockSimulateAssetChangesResponse: AssetChangesResponse = {
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "changes": [
      {
        "assetType": "ERC20",
        "changeType": "TRANSFER",
        "from": "0x8b20249b3b2ee65669b622e56cc9be5c3cd80917",
        "to": "0x42719590da938bcb6787627a48ccc77c61d7f771",
        "rawAmount": "2000000000",
        "contractAddress": "0xdac17f958d2ee523a2206206994597c13d831ec7",
        "tokenId": null,
        "decimals": 6,
        "symbol": "USDT",
        "name": "Tether USDt",
        "logo": "https://static.alchemyapi.io/images/assets/825.png",
        "amount": "2000"
      }
    ],
    "gasUsed": "0xf6dd",
    "error": null
  }
}

const mockSimulateExecutionResponse: AssetChangesResponse = {
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "changes": [
      {
        "assetType": "ERC20",
        "changeType": "TRANSFER",
        "from": "0x8b20249b3b2ee65669b622e56cc9be5c3cd80917",
        "to": "0x42719590da938bcb6787627a48ccc77c61d7f771",
        "rawAmount": "2000000000",
        "contractAddress": "0xdac17f958d2ee523a2206206994597c13d831ec7",
        "tokenId": null,
        "decimals": 6,
        "symbol": "USDT",
        "name": "Tether USDt",
        "logo": "https://static.alchemyapi.io/images/assets/825.png",
        "amount": "2000"
      }
    ],
    "gasUsed": "0xf6dd",
    "error": null
  }
}

export const mockParams = {
  simulateExecution: mockSimulateExecution,
  simulateAssetChanges: mockSimulateAssetChanges
}

export const mockResponse = {
  simulateExecution: {
    data: mockSimulateExecutionResponse
  },
  simulateAssetChanges: {
    data: mockSimulateAssetChangesResponse
  }
}
