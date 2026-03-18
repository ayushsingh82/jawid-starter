import { jaw } from "@jaw.id/wagmi";
import { createConfig, http } from "wagmi";
import { base, mainnet } from "wagmi/chains";

import { env } from "./env";

export const wagmiConfig = createConfig({
  chains: [mainnet, base],
  connectors: [
    jaw({
      apiKey: env.NEXT_PUBLIC_JAW_API_KEY,
      appName: "JAW ID Starter",
      appLogoUrl: "https://jaw.id/favicon.ico",
      defaultChainId: mainnet.id,
    }),
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
});

