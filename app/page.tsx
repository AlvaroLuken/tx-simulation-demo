"use client";
import AssetChanges from "@common/asset-changes/AssetChanges";
import Hero from "@common/hero/Hero";
import SimulateExecution from "@common/simulate-execution/SimulateExecution";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <div className="flex items-center justify-center gap-4">
        <AssetChanges />
        <SimulateExecution />
      </div>
    </main>
  );
}
