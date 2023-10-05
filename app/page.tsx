"use client";
import Hero from "@common/hero/Hero";
import "./globals.css";
import { useEffect, useState } from "react";
import { executeAlchemyApiWithParams, prepareBundledParams } from "@common/utils/alchemy";
import { AlchemyApiResponse, Execution, ExecutionType } from "types";
import Button from "@common/components/Button";
import { DataDisplay } from "@common/components/MockupCode";
import { InputTypeSelector } from "@common/components/InputTypeSelector";
import { TransactionSelector } from "@common/components/TransactionSelector";
import { mockSimulateAssetChanges, mockSimulateExecution } from "@common/utils/mocks";
import formatResponse from "@common/utils/formatResponse";
import { DEFAULT_DATA_DISPLAY } from "@common/utils/constants";

export default function Home() {
  const [executionType, setExecutionType] = useState<ExecutionType>("SIMULATE_EXECUTION");
  const getTransactionsToDisplay = () => {
    switch (executionType) {
      case "SIMULATE_ASSET_CHANGES": {
        return mockSimulateAssetChanges;
      }
      case "SIMULATE_EXECUTION": {
        return mockSimulateExecution;
      }
      default: {
        return [];
      }
    }
  }
  const [dataDisplay, setDataDisplay] = useState<string | null>(DEFAULT_DATA_DISPLAY);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const setDataDisplayLoading = (v: boolean) => setIsLoading(v);
  const setError = () => setDataDisplay("There was an error")
  const [params, setParams] = useState<Array<Execution>>([]);
  const [bundle, setBundle] = useState<boolean>(false);
  const [nerdMode, setNerdMode] = useState<boolean>(false);
  const [executionResponse, setExecutionResponse] = useState<AlchemyApiResponse>();
  const execute = async () => {
    setDataDisplayLoading(true)
    try {
      if (!executionType) {
        throw "Error: Execution Type not set";
      }
      const prepared: Execution = bundle ? prepareBundledParams(executionType, params) : params[0]
      const response = await executeAlchemyApiWithParams(JSON.stringify(prepared));
      if (response.data) {
        const data = response.data as AlchemyApiResponse;
        setExecutionResponse(data);
        setDataDisplay(formatResponse(data, nerdMode));
      } else {
        throw "Error: data object not found in response";
      }
    } catch (err) {
      setDataDisplayLoading(false)
      setError();
      console.error(err);
    }
    setDataDisplayLoading(false)
  }
  const reset = () => {
    setDataDisplay(DEFAULT_DATA_DISPLAY);
    setIsLoading(false);
  }
  useEffect(() => {
    reset();
    setParams([]);
  }, [bundle, executionType]);
  useEffect(() => {
    reset();
  }, [params] )
  useEffect(() => {
    setDataDisplay(formatResponse(executionResponse, nerdMode))
  }, [nerdMode]);
  return (
    <main className="flex flex-col h-full">
      <Hero />
      <div className="flex flex-col items-center gap-6 px-24">
        <div className="flex flex-row items-center justify-between w-full">
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
          <InputTypeSelector
            text="Nerd Mode"
            onChecked={setNerdMode}
            value={true}
            checked={nerdMode}
            name="nerdMode-selector"
            type="checkbox"
            styles="toggle toggle-secondary"
          />
        </div>

      </div>
      <div className="grid grid-rows-3 grid-cols-3 gap-3 m-2 flex-1 overflow-auto px-24">
        <div className="w-full h-full overflow-auto row-span-2">
          <TransactionSelector
            setParams={setParams}
            transactions={getTransactionsToDisplay()}
            currentParams={params}
            multiSelect={bundle}
          />
        </div>
        <div className="col-span-2 row-span-2">
          <DataDisplay text={dataDisplay} loading={isLoading} />
        </div>
        <div className="col-span-3 flex flex-col items-center">
          <Button onClick={execute} styles="btn-lg">
            Execute
          </Button>
        </div>
      </div>
    </main>
  );
}
