"use client";
import Hero from "@common/hero/Hero";
import "./globals.css";
import { useState } from "react";
import { executeAlchemyApiWithParams } from "@common/utils/alchemy";
import { mockParams } from "@common/utils/mocks";
import Button from "@common/components/Button";
import { DataDisplay } from "@common/components/MockupCode";
import { InputTypeSelector } from "@common/components/InputTypeSelector";
import { TransactionSelector } from "@common/components/TransactionSelector";

const DEFUALT_PARAMS = mockParams.simulateAssetChanges[0];
type ExecutionType = "SIMULATE_EXECUTION" | "SIMULATE_ASSET_CHANGES";
export default function Home() {
  const [executionType, setExecutionType] = useState<ExecutionType>("SIMULATE_EXECUTION");

  const getTransactionsToDisplay = () => {
    switch (executionType) {
      case "SIMULATE_ASSET_CHANGES": {
        return mockParams.simulateAssetChanges;
      }
      case "SIMULATE_EXECUTION": {
        return mockParams.simulateExecution;
      }
      default: {
        return mockParams.simulateExecution;
      }
    }
  }

  const [dataDisplay, setDataDisplay] = useState<string | null>("Click on the buttons to simulate a transaction");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const setDataDisplayContent = (data: string) => setDataDisplay(data);
  const setDataDisplayLoading = (v: boolean) => setIsLoading(v);
  const setError = () => setDataDisplayContent("There was an error")

  const [params, setParams] = useState<string>(JSON.stringify(DEFUALT_PARAMS));
  const [bundle, setBundle] = useState<boolean>(false);

  const execute = async () => {
    setDataDisplayLoading(true)
    const response = await executeAlchemyApiWithParams(params)
    if (response.data) {
      const data = response.data;
      setDataDisplayContent(JSON.stringify(data, undefined, 2));
    } else {
      setError();
      console.error("FAILED");
    }
    setDataDisplayLoading(false)
  }
  return (
    <main className="flex flex-col h-full">
      <Hero />
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-row items-center gap-4">
          <InputTypeSelector
            text="Simulate Execution"
            onChecked={setExecutionType}
            value="SIMULATE_EXECUTION"
            checked={executionType==="SIMULATE_EXECUTION"}
            name="execution-type-selector"
            type="radio"
            styles="radio radio-primary"
          />
          <InputTypeSelector
            text="Simulate Asset Changes"
            onChecked={setExecutionType}
            value="SIMULATE_ASSET_CHANGES"
            checked={executionType==="SIMULATE_ASSET_CHANGES"}
            name="execution-type-selector"
            type="radio"
            styles="radio radio-primary"
          />
          <InputTypeSelector
            text="Bundle Execution"
            onChecked={setBundle}
            value={true}
            checked={bundle}
            name="bundle-selector"
            type="checkbox"
            styles="checkbox checkbox-secondary"
          />
        </div>
      </div>
      <div className="grid grid-rows-3 grid-cols-3 gap-3 m-2 flex-1 overflow-auto">
        <div className="w-full h-full overflow-auto row-span-2">
          <TransactionSelector
            setParams={setParams}
            transactions={getTransactionsToDisplay()}
          />
        </div>
        <div className="col-span-2 row-span-2">
          <DataDisplay text={dataDisplay} loading={isLoading} />
        </div>
        <div className="col-span-3 flex flex-col items-center justify-center">
          <Button onClick={execute}>
            Execute
          </Button>
        </div>
      </div>
    </main>
  );
}
