import Button from "@common/Button";
import { executeAlchemyApiWithParams } from "@common/alchemy";
import { useState } from "react";

const DEFAULT_PARAMS = {
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

export default function SimulateExecution({
  onComplete,
  setDataLoading,
  setError
}: {
  onComplete: (d: string) => void,
  setDataLoading: (v: boolean) => void,
  setError: () => void
}) {
  const [params, setParams] = useState<string>(JSON.stringify(DEFAULT_PARAMS));
  async function getSimulatedExecution() {
    setDataLoading(true)
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
    <Button onClick={getSimulatedExecution}>
      Simulate Execution
    </Button>
  );
}
