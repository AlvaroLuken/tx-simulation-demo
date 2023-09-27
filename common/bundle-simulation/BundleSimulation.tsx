import Button from "@common/Button";

export default function BundleSimulation ({
  onComplete,
  setDataLoading,
  setError
}: {
  onComplete: (d: string) => void,
  setDataLoading: (v: boolean) => void,
  setError: () => void
}) {
  async function getBundleSimulation() {
    setDataLoading(true);
    const response = await fetch("/api/simulate-execution/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      onComplete(JSON.stringify(data, undefined, 4));
    } else {
      setError();
      console.error("Failed");
    }
    setDataLoading(false);
  }

  return (
    <>
    <Button onClick={getBundleSimulation}>
      Bundle Simulation
    </Button>
   </>
  )
}