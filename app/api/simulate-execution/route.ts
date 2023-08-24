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
        body: JSON.stringify({
          id: 1,
          jsonrpc: "2.0",
          method: "alchemy_simulateExecution",
          params: [
            {
              from: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
              to: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
              value: "0x0",
              data: "0xa9059cbb000000000000000000000000fc43f5f9dd45258b3aff31bdbe6561d97e8b71de00000000000000000000000000000000000000000000000000000000000f4240",
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
