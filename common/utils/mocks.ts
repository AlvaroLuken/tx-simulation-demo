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
    txType: "safeTransferFrom",
    naturalLanguage: `Transfer 2000 USDT from 0x8B20249B3B...cd80917 to 0xdAC17F958D...D831ec7`
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
          from: "0x1b45aBFD4a82c438f1BB63b691Ac7c662Efcf0C6",
          to: "0xC20e204606557cb98b305be605F924d8565fb700",
          value: "0x0",
          data: "0xa22cb4650000000000000000000000001e0049783f008a0085193e00003d00cd54003c710000000000000000000000000000000000000000000000000000000000000001"
        },
      ]
    },
    txType: "Approval: setApprovalForAll",
    naturalLanguage: `Set approval for 0x1E0049783F...4003c71 for all tokens`
  },
  {
    // https://etherscan.io/tx/0xebc27d7336ae53b467cdeb91ec5f60fe0a0541a10c47ced0a6c0f073ad942c5a
    apiParams: {
      id: 1,
      jsonrpc: "2.0",
      method: "alchemy_simulateExecution",
      params: [
        {
          from: "0x63dB58b5B78B6E5BaDF747E8Ef7963c90fE855b7",
          to: "0x881D40237659C251811CEC9c364ef91dC08D300C",
          value: "0x4A817C800",
          data: "0x5f5755290000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000470de4df82000000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000147061726173776170563546656544796e616d6963000000000000000000000000000000000000000000000000000000000000000000000000000000000000022000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003d806324b6df5af3c1a81acba14a8a62fe6d643f00000000000000000000000000000000000000000000000000466ebb82ac1000000000000000000000000000000000000000000036aa795d0acc6e4a85fa4c2e000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000009f295cd5f000000000000000000000000000dc838074d95c89a5c2cbf26984fedc9160b61620000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e40b86a4c1000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee00000000000000000000000000000000000000000000000000466ebb82ac1000000000000000000000000000000000000000000036aa795d0acc6e4a85fa4c2e000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000001000000000000000000004de541f50f520f5095fc8403df083285232b822611c3000000000000000000000000000000000000000000000000000000000171"
        },
      ]
    },
    txType: "Swap",
    naturalLanguage: `Swap 0.19 ETH for $SOLANA on Uniswap V2 using Metamask Swap Router`
  },
  {
    // https://etherscan.io/tx/0x26b8e4b073b35463ad6bc2253782a4b447c9388f8256c3d55b4e9075862143e3
    apiParams: {
      id: 1,
      jsonrpc: "2.0",
      method: "alchemy_simulateExecution",
      params: [
        {
          from: "0x453231aB01ad2323b341a6571595295642926E5b",
          to: "0x06450dEe7FD2Fb8E39061434BAbCFC05599a6Fb8",
          value: "0x0",
          data: "0x9ff054df000000000000000000000000000000000000000000000000000000000000003a"
        },
      ]
    },
    txType: "Function: claimRank",
    naturalLanguage: `Claim rank 58 on XENCrypto contract (0x06450dEe7FD2Fb8E39061434BAbCFC05599a6Fb8)`
  },
]
