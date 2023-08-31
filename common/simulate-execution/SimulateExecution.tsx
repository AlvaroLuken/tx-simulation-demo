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
      {/* Open the modal using ID.showModal() method */}
      <button
        className="ml-4 btn text-white bg-[#092304] hover:bg-[#3d3f3d]"
        onClick={() => window.my_modal_2.showModal()}
      >
        Bundle Simulation
      </button>
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Bundle Simulation Response</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
