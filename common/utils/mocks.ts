import { Execution } from "types"
export const mockSimulateAssetChanges: Array<Execution> = [
  {
    apiParams: {
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
      ]
    },
    txType: "Transfer",
    response: {
      data: {
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
    }
  },
  {
    apiParams: {
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
      ]
    },
    txType: "Transfer",
    response: {
      data: {
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
    }
  },
]

export const mockSimulateExecution: Array<Execution> = [
  {
    apiParams: {
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
      ]
    },
    txType: "Contract Call",
    response: {
      data: {
        "jsonrpc": "2.0",
        "id": 1,
        "result": {
          "calls": [
            {
              "decoded": {
                "authority": "ETHERSCAN",
                "methodName": "transfer",
                "inputs": [
                  {
                    "name": "_to",
                    "value": "0x42719590da938bcb6787627a48ccc77c61d7f771",
                    "type": "address"
                  },
                  {
                    "name": "_value",
                    "value": "2000000000",
                    "type": "uint256"
                  }
                ],
                "outputs": []
              },
              "type": "CALL",
              "from": "0x82e1d4ddd636857ebcf6a0e74b9b0929c158d7fb",
              "to": "0xdac17f958d2ee523a2206206994597c13d831ec7",
              "value": "0x0",
              "gas": "0x80000000000000c0",
              "gasUsed": "0xf6dd",
              "input": "0xa9059cbb00000000000000000000000042719590da938bcb6787627a48ccc77c61d7f7710000000000000000000000000000000000000000000000000000000077359400",
              "output": "0x"
            }
          ],
          "logs": [
            {
              "decoded": {
                "authority": "ETHERSCAN",
                "eventName": "Transfer",
                "inputs": [
                  {
                    "name": "from",
                    "value": "0x82e1d4ddd636857ebcf6a0e74b9b0929c158d7fb",
                    "type": "address",
                    "indexed": true
                  },
                  {
                    "name": "to",
                    "value": "0x42719590da938bcb6787627a48ccc77c61d7f771",
                    "type": "address",
                    "indexed": true
                  },
                  {
                    "name": "value",
                    "value": "2000000000",
                    "type": "uint256",
                    "indexed": false
                  }
                ]
              },
              "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
              "data": "0x0000000000000000000000000000000000000000000000000000000077359400",
              "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x82e1d4ddd636857ebcf6a0e74b9b0929c158d7fb",
                "0x42719590da938bcb6787627a48ccc77c61d7f771"
              ]
            }
          ]
        }
      }
    }
  },
  {
    apiParams: {
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
      ]
    },
    txType: "Contract Call",
    response: {
      data: {
        "jsonrpc": "2.0",
        "id": 1,
        "result": {
          "calls": [
            {
              "decoded": {
                "authority": "ETHERSCAN",
                "methodName": "transfer",
                "inputs": [
                  {
                    "name": "_to",
                    "value": "0x42719590da938bcb6787627a48ccc77c61d7f771",
                    "type": "address"
                  },
                  {
                    "name": "_value",
                    "value": "2000000000",
                    "type": "uint256"
                  }
                ],
                "outputs": []
              },
              "type": "CALL",
              "from": "0x82e1d4ddd636857ebcf6a0e74b9b0929c158d7fb",
              "to": "0xdac17f958d2ee523a2206206994597c13d831ec7",
              "value": "0x0",
              "gas": "0x80000000000000c0",
              "gasUsed": "0xf6dd",
              "input": "0xa9059cbb00000000000000000000000042719590da938bcb6787627a48ccc77c61d7f7710000000000000000000000000000000000000000000000000000000077359400",
              "output": "0x"
            }
          ],
          "logs": [
            {
              "decoded": {
                "authority": "ETHERSCAN",
                "eventName": "Transfer",
                "inputs": [
                  {
                    "name": "from",
                    "value": "0x82e1d4ddd636857ebcf6a0e74b9b0929c158d7fb",
                    "type": "address",
                    "indexed": true
                  },
                  {
                    "name": "to",
                    "value": "0x42719590da938bcb6787627a48ccc77c61d7f771",
                    "type": "address",
                    "indexed": true
                  },
                  {
                    "name": "value",
                    "value": "2000000000",
                    "type": "uint256",
                    "indexed": false
                  }
                ]
              },
              "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
              "data": "0x0000000000000000000000000000000000000000000000000000000077359400",
              "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x82e1d4ddd636857ebcf6a0e74b9b0929c158d7fb",
                "0x42719590da938bcb6787627a48ccc77c61d7f771"
              ]
            }
          ]
        }
      }
    }
  },
  {
    apiParams: {
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
      ]
    },
    txType: "Contract Call",
    response: {
      data: {
        "jsonrpc": "2.0",
        "id": 1,
        "result": {
          "calls": [
            {
              "decoded": {
                "authority": "ETHERSCAN",
                "methodName": "transfer",
                "inputs": [
                  {
                    "name": "_to",
                    "value": "0x42719590da938bcb6787627a48ccc77c61d7f771",
                    "type": "address"
                  },
                  {
                    "name": "_value",
                    "value": "2000000000",
                    "type": "uint256"
                  }
                ],
                "outputs": []
              },
              "type": "CALL",
              "from": "0x82e1d4ddd636857ebcf6a0e74b9b0929c158d7fb",
              "to": "0xdac17f958d2ee523a2206206994597c13d831ec7",
              "value": "0x0",
              "gas": "0x80000000000000c0",
              "gasUsed": "0xf6dd",
              "input": "0xa9059cbb00000000000000000000000042719590da938bcb6787627a48ccc77c61d7f7710000000000000000000000000000000000000000000000000000000077359400",
              "output": "0x"
            }
          ],
          "logs": [
            {
              "decoded": {
                "authority": "ETHERSCAN",
                "eventName": "Transfer",
                "inputs": [
                  {
                    "name": "from",
                    "value": "0x82e1d4ddd636857ebcf6a0e74b9b0929c158d7fb",
                    "type": "address",
                    "indexed": true
                  },
                  {
                    "name": "to",
                    "value": "0x42719590da938bcb6787627a48ccc77c61d7f771",
                    "type": "address",
                    "indexed": true
                  },
                  {
                    "name": "value",
                    "value": "2000000000",
                    "type": "uint256",
                    "indexed": false
                  }
                ]
              },
              "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
              "data": "0x0000000000000000000000000000000000000000000000000000000077359400",
              "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x82e1d4ddd636857ebcf6a0e74b9b0929c158d7fb",
                "0x42719590da938bcb6787627a48ccc77c61d7f771"
              ]
            }
          ]
        }
      }
    }
  },
  {
    apiParams: {
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
      ]
    },
    txType: "Contract Call",
    response: {
      data: {
        "jsonrpc": "2.0",
        "id": 1,
        "result": {
          "calls": [
            {
              "decoded": {
                "authority": "ETHERSCAN",
                "methodName": "transfer",
                "inputs": [
                  {
                    "name": "_to",
                    "value": "0x42719590da938bcb6787627a48ccc77c61d7f771",
                    "type": "address"
                  },
                  {
                    "name": "_value",
                    "value": "2000000000",
                    "type": "uint256"
                  }
                ],
                "outputs": []
              },
              "type": "CALL",
              "from": "0x82e1d4ddd636857ebcf6a0e74b9b0929c158d7fb",
              "to": "0xdac17f958d2ee523a2206206994597c13d831ec7",
              "value": "0x0",
              "gas": "0x80000000000000c0",
              "gasUsed": "0xf6dd",
              "input": "0xa9059cbb00000000000000000000000042719590da938bcb6787627a48ccc77c61d7f7710000000000000000000000000000000000000000000000000000000077359400",
              "output": "0x"
            }
          ],
          "logs": [
            {
              "decoded": {
                "authority": "ETHERSCAN",
                "eventName": "Transfer",
                "inputs": [
                  {
                    "name": "from",
                    "value": "0x82e1d4ddd636857ebcf6a0e74b9b0929c158d7fb",
                    "type": "address",
                    "indexed": true
                  },
                  {
                    "name": "to",
                    "value": "0x42719590da938bcb6787627a48ccc77c61d7f771",
                    "type": "address",
                    "indexed": true
                  },
                  {
                    "name": "value",
                    "value": "2000000000",
                    "type": "uint256",
                    "indexed": false
                  }
                ]
              },
              "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
              "data": "0x0000000000000000000000000000000000000000000000000000000077359400",
              "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x82e1d4ddd636857ebcf6a0e74b9b0929c158d7fb",
                "0x42719590da938bcb6787627a48ccc77c61d7f771"
              ]
            }
          ]
        }
      }
    }
  },
]
