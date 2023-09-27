"use client";
import AssetChanges from "@common/asset-changes/AssetChanges";
import Hero from "@common/hero/Hero";
import SimulateExecution from "@common/simulate-execution/SimulateExecution";
import "./globals.css";
import BundleSimulation from "@common/bundle-simulation/BundleSimulation";
import { ReactNode, useState } from "react";

const MockupCode = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mockup-code w-1/2 h-96 mx-auto my-12 rounded-xl overflow-auto">
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

export default function Home() {
  const [dataDisplay, setDataDisplay] = useState<string | null>("hello there");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const setDataDisplayContent = (data: string) => setDataDisplay(data);
  const setDataDisplayLoading = (v: boolean) => setIsLoading(v);
  const setError = () => setDataDisplayContent("There was an error")
  return (
    <main className="flex flex-col">
      <Hero />
      <div className="flex items-center justify-center gap-4">
        <AssetChanges
          onComplete={setDataDisplayContent}
          setDataLoading={setDataDisplayLoading}
          setError={setError}
        />
        <SimulateExecution
          onComplete={setDataDisplayContent}
          setDataLoading={setDataDisplayLoading}
          setError={setError}
        />
        <BundleSimulation
          onComplete={setDataDisplayContent}
          setDataLoading={setDataDisplayLoading}
          setError={setError}
        />
      </div>
      <DataDisplay text={dataDisplay} loading={isLoading} />
    </main>
  );
}
