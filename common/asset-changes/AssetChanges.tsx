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
    <div className="flex items-center justify-center bg-base-200">
      <button
        onClick={getSimulatedAssetChanges}
        className="btn bg-[#f8ff23] text-black font-mono"
      >
        Simulate Asset Changes
      </button>
    </div>
  );
}
