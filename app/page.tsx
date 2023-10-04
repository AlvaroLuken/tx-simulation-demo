"use client";
import Hero from "@common/hero/Hero";
import "./globals.css";
import { HTMLInputTypeAttribute, ReactNode, useState } from "react";
import { executeAlchemyApiWithParams } from "@common/utils/alchemy";
import { TransactionParams, mockParams } from "@common/utils/mocks";
import Button from "@common/Button";
import formatWalletAddress from "@common/utils/formatWalletAddress";

const MockupCode = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mockup-code w-full h-full rounded-xl overflow-auto">
      {children}
    </div>
  )
}

const MockupCodeComponent = ({ children, center = false }: { children: ReactNode, center?: boolean }) => {
  if (center) {
    return (
      <MockupCode>
        <div className="w-full h-full items-center justify-center flex flex-col">
          {children}
        </div>
      </MockupCode>
    )
  }
  return (
    <MockupCode>
      <pre>
        {children}
      </pre>
    </MockupCode>
  )
}

const DataDisplay = ({text, loading}: {text: string | null, loading?: boolean}) => {
  if (loading) {
    return (
      <MockupCodeComponent center>
        <span className="loading loading-ring loading-lg"></span>
      </MockupCodeComponent>
    )
  }
  return (
    <MockupCodeComponent>
      {text || "Simulate a transaction to begin"}
    </MockupCodeComponent>
  )
}
const InputTypeSelector = ({
  text,
  value,
  onChecked,
  checked,
  name,
  type,
  styles
}: {
  text: string,
  value: string | boolean,
  onChecked: (ch: any) => void
  checked: boolean
  name: string
  type: HTMLInputTypeAttribute
  styles: string
}) => {
  return (
    <div className="form-control">
      <label className="flex flex-row gap-3 label cursor-pointer">
        <span className="label-text">
          {text}
        </span>
        <input
          type={type}
          name={name}
          className={styles}
          onChange={type === "radio" ? (change) => onChecked(value): (change) => onChecked(change.target.checked)}
          checked={checked}
        />
      </label>
    </div>
  )
}

const DEFUALT_PARAMS = mockParams.simulateAssetChanges[0];
type ExecutionType = "SIMULATE_EXECUTION"|"SIMULATE_ASSET_CHANGES";

const TransactionSelector = ({
  setParams,
  transactions
}: {
  setParams: (p: any) => void
  transactions: TransactionParams
}) => {
  return (
    <>
    {
      transactions.map((tx, key) => {
        return (
          <div
            className="card w-full bg-base-200 border-2 border-primary-focus mb-3"
            key={key}
          >
            <div className="card-body text-sm">
              <p>{tx.method}</p>
              <p>
                From: {formatWalletAddress(tx.params[0].from)}
              </p>
              <p>
                To: {formatWalletAddress(tx.params[0].to)}
              </p>
            </div>
          </div>
        )
      })
    }
    </>
  )
}

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
