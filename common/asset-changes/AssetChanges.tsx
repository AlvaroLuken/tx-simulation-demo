import Button from "@common/Button";

export default function AssetChanges() {
  async function getSimulatedAssetChanges() {
    const response = await fetch("/api/asset-changes/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log("data from client:", data);
    } else {
      console.error("Failed");
    }
  }
  return (
    <Button onClick={getSimulatedAssetChanges}>
      Simulate Asset Changes
    </Button>
  );
}
