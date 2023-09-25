import Button from "@common/Button";

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
      <Button onClick={getSimulatedAssetChanges}>
        Simulate Execution
      </Button>
    </div>
  );
}
