 export const ALCHEMY_ENDPOINT = `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
 export const DEFAULT_DATA_DISPLAY = "Click on the buttons to simulate a transaction"
 export const HELP_TEXTS = {
  DEFAULT: {
    text: `Get to know the exact impact of a transaction before it hits the blockchain. The Transaction
    Simulation APIs can help prevent unwanted hacks or theft, so you
    know exactly what a transaction will do by simulating it before you
    approve it in your wallet. This means identifying exactly what
    assets will be transferred, what logs will be emitted, what internal
    calls will be made, etc., before it even happens.`,
    title: `Click to expand`
   },
  BUNDLE_SIMULATION: {
    text: `Bundle simulation API works by executing the transactions in the payload in order of their occurrence.`,
    title: `Start bundling transactions (click to expand)`
  },
  BUNDLE_ASSET: {
    text: `Duis neque diam, lacinia sed vehicula eu, porttitor ac massa. Proin aliquet scelerisque tortor, ut ultrices sapien egestas ut. Suspendisse a faucibus sem. In dui purus, tristique vel lacus facilisis, ultrices ornare neque. Suspendisse quis pulvinar nulla, sagittis accumsan massa. Nam ultrices venenatis ipsum, et imperdiet arcu varius tempor. Proin sed auctor dolor, vestibulum dapibus ligula. Sed ut finibus nibh, quis porttitor elit. Sed quis quam placerat, dignissim eros ut, lobortis metus. Nunc quis facilisis velit. Quisque a lacus sagittis, lobortis nisl in, tincidunt velit. Donec nunc augue, porta nec fermentum eget, vehicula et tellus. Aliquam tristique tempor urna. In ornare vel tellus ac ornare.`,
    title: ` sagittis accumsan massa`
  },
  SIMULATE_EXECUTION: {
    text: `Duis neque diam, lacinia sed vehicula eu, porttitor ac massa. Proin aliquet scelerisque tortor, ut ultrices sapien egestas ut. Suspendisse a faucibus sem. In dui purus, tristique vel lacus facilisis, ultrices ornare neque. Suspendisse quis pulvinar nulla, sagittis accumsan massa. Nam ultrices venenatis ipsum, et imperdiet arcu varius tempor. Proin sed auctor dolor, vestibulum dapibus ligula. Sed ut finibus nibh, quis porttitor elit. Sed quis quam placerat, dignissim eros ut, lobortis metus. Nunc quis facilisis velit. Quisque a lacus sagittis, lobortis nisl in, tincidunt velit. Donec nunc augue, porta nec fermentum eget, vehicula et tellus. Aliquam tristique tempor urna. In ornare vel tellus ac ornare.`,
    title: `Aliquam tristique tempor urna`
  },
  ASSET_CHANGES: {
    text: `Duis neque diam, lacinia sed vehicula eu, porttitor ac massa. Proin aliquet scelerisque tortor, ut ultrices sapien egestas ut. Suspendisse a faucibus sem. In dui purus, tristique vel lacus facilisis, ultrices ornare neque. Suspendisse quis pulvinar nulla, sagittis accumsan massa. Nam ultrices venenatis ipsum, et imperdiet arcu varius tempor. Proin sed auctor dolor, vestibulum dapibus ligula. Sed ut finibus nibh, quis porttitor elit. Sed quis quam placerat, dignissim eros ut, lobortis metus. Nunc quis facilisis velit. Quisque a lacus sagittis, lobortis nisl in, tincidunt velit. Donec nunc augue, porta nec fermentum eget, vehicula et tellus. Aliquam tristique tempor urna. In ornare vel tellus ac ornare.`,
    title: `Duis neque diam, lacinia sed`
  }
 }