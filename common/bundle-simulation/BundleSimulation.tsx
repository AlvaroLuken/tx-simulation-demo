import Button from "@common/Button";

export default function BundleSimulation () {
  async function getBundleSimulation() {
    console.log("do something here");
  }

  return (
    <>
    <Button onClick={getBundleSimulation}>
      Bundle Simulation
    </Button>
   </>
  )
}