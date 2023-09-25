import Button from "@common/Button";

export default function AssetChanges({
  onComplete,
  setDataLoading,
  setError
}: {
  onComplete: (d: string) => void,
  setDataLoading: (v: boolean) => void,
  setError: () => void
}) {
  async function getSimulatedAssetChanges() {
    setDataLoading(true);
    const response = await fetch("/api/asset-changes/", {
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
    <Button onClick={getSimulatedAssetChanges}>
      Simulate Asset Changes
    </Button>
  );
}
