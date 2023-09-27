// erroring for some reason
// @todo

import { NextResponse } from "next/server";

const { Alchemy } = require("alchemy-sdk");

const settings = {
  apiKey: process.env.ALCHEMY_API_KEY,
};

const alchemy = new Alchemy(settings);

export async function POST() {
  try {
    const response = await fetch(
      `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        // https://etherscan.io/tx/0xba30216af79ea2b5fe3a5f993a87ee4ad4ea747f001238be2e69ce49d27087b6
        body: JSON.stringify({
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
        }),
      }
    );
    const responseData = await response.json(); // Parse the JSON data from the response
    console.log(responseData);

    return NextResponse.json({ data: responseData });
  } catch (e) {
    console.log(e);
  }
}
