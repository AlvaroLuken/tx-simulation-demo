export default function SimulateExecution() {
  async function getSimulatedAssetChanges() {
    const response = await fetch("/api/simulate-execution/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.error("Failed");
    }
  }
  return (
    <div className="flex items-center justify-center bg-base-200">
      <button
        onClick={getSimulatedAssetChanges}
        className="btn bg-[#37ff14] text-black font-mono"
      >
        Simulate Execution
      </button>
    </div>
  );
}
