export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <h1 className="text-5xl font-bold">
            Transaction Simulation
          </h1>
          <p className="pt-6 pb-10 font-normal text-lg">
            Get to know the exact impact of a transaction before it hits the blockchain. The Transaction
            Simulation APIs can help prevent unwanted hacks or theft, so you
            know exactly what a transaction will do by simulating it before you
            approve it in your wallet. This means identifying exactly what
            assets will be transferred, what logs will be emitted, what internal
            calls will be made, etc., before it even happens.
          </p>
        </div>
      </div>
    </div>
  );
}
