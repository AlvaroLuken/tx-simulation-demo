import Button from "@common/Button";
import axios from "axios";
import { useState } from "react";
import { executeAlchemyApiWithParams } from "@common/alchemy";

const DEFAULT_PARAMS = {
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

export default function AssetChanges({
  onComplete,
  setDataLoading,
  setError
}: {
  onComplete: (d: string) => void,
  setDataLoading: (v: boolean) => void,
  setError: () => void
}) {
  const [params, setParams] = useState<string>(JSON.stringify(DEFAULT_PARAMS));
  async function getSimulatedAssetChanges() {
    setDataLoading(true);
    const response = await executeAlchemyApiWithParams(params);
    if (response.data) {
      const data = response.data;
      onComplete(JSON.stringify(data, undefined, 4));
    } else {
      setError();
      console.error("Failed");
    }
    setDataLoading(false);
  }
  return (
    <Button onClick={getSimulatedAssetChanges}>
      Simulate Asset Changes
    </Button>
  );
}
