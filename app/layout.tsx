"use client";
import Navbar from "@common/navigation/Navbar";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { WagmiConfig, createConfig } from "wagmi";
import "./globals.css";

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.ALCHEMY_API_KEY,
    walletConnectProjectId: process.env.WALLET_CONNECT_APP_ID!,

    // Required
    appName: "Alchemy Transaction Simulation Demo",

    // Optional
    appDescription: "Quick demo of Alchemy's tx simulation APIs",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's logo,no bigger than 1024x1024px (max. 1MB)
  })
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <WagmiConfig config={config}>
        <ConnectKitProvider mode="dark">
          <body>
            <Navbar />
            <div style={{ flexGrow: 1 }}>{children}</div>
            {/* <Footer /> */}
          </body>
        </ConnectKitProvider>
      </WagmiConfig>
    </html>
  );
}
