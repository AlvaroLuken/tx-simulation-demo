"use client";
import AssetChanges from "@common/asset-changes/AssetChanges";
import Hero from "@common/hero/Hero";
import SimulateExecution from "@common/simulate-execution/SimulateExecution";
import "./globals.css";
import BundleSimulation from "@common/bundle-simulation/BundleSimulation";
import { useState } from "react";

export default function Home() {
  const [dataDisplay, setDataDisplay] = useState<string | null>(null);
  return (
    <main className="flex flex-col">
      <Hero />
      <div className="flex items-center justify-center gap-4">
        <AssetChanges />
        <SimulateExecution />
        <BundleSimulation />
      </div>
      <div className="bg-primary w-1/2 h-96 mx-auto my-12 rounded-xl">
        {dataDisplay}
      </div>
    </main>
  );
}
