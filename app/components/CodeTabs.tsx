"use client";

import { useMemo, useState } from "react";

type TabId = "wagmi" | "core";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      className="btn-black rounded-full px-4 py-2 text-sm font-medium transition-colors"
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1200);
      }}
      type="button"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

export function CodeTabs() {
  const [tab, setTab] = useState<TabId>("wagmi");

  const snippets = useMemo(
    () => ({
      wagmi: `// lib/wagmi.ts
import { createConfig, http } from 'wagmi';
import { mainnet, base } from 'wagmi/chains';
import { jaw } from '@jaw.id/wagmi';

export const config = createConfig({
  chains: [mainnet, base],
  connectors: [
    jaw({
      apiKey: process.env.NEXT_PUBLIC_JAW_API_KEY!,
      appName: 'My App',
      appLogoUrl: 'https://myapp.com/logo.png',
      defaultChainId: 1,
    }),
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
});`,
      core: `import { JAW } from '@jaw.id/core';

const jaw = JAW.create({
  apiKey: process.env.NEXT_PUBLIC_JAW_API_KEY!,
  appName: 'My App',
});

// EIP-1193 compatible provider
const accounts = await jaw.provider.request({
  method: 'wallet_connect',
});`,
    }),
    []
  );

  const active = snippets[tab];

  return (
    <div className="card-subtle">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="inline-flex w-full rounded-full border border-black/10 bg-white p-1 sm:w-auto">
          <button
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              tab === "wagmi"
                ? "bg-black text-white"
                : "text-black/70 hover:text-black"
            }`}
            onClick={() => setTab("wagmi")}
            type="button"
          >
            Wagmi
          </button>
          <button
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              tab === "core"
                ? "bg-black text-white"
                : "text-black/70 hover:text-black"
            }`}
            onClick={() => setTab("core")}
            type="button"
          >
            Core SDK
          </button>
        </div>

        <CopyButton text={active} />
      </div>

      <pre className="mt-4 overflow-x-auto rounded-xl border border-black/10 bg-white p-4 text-sm leading-relaxed text-black">
        <code>{active}</code>
      </pre>

      <p className="mt-3 text-sm text-black/65">
        API key lives in <code>.env.local</code>. For client-side wagmi usage, use{" "}
        <code>NEXT_PUBLIC_JAW_API_KEY</code>.
      </p>
    </div>
  );
}

