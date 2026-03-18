"use client";

import { useConnect, useDisconnect } from "@jaw.id/wagmi";
import { useAccount, useSendCalls } from "wagmi";
import { parseEther } from "viem";

import { wagmiConfig } from "@/lib/wagmi";
import { env } from "@/lib/env";

export function JawDemo() {
  const { address, isConnected } = useAccount();
  const { mutate: connect, isPending: isConnecting } = useConnect();
  const { mutate: disconnect, isPending: isDisconnecting } = useDisconnect();
  const { sendCalls, isPending: isSending } = useSendCalls();

  const hasKey = env.NEXT_PUBLIC_JAW_API_KEY.length > 0;
  const createKeyUrl = "https://dashboard.jaw.id/dashboard/api-keys";

  return (
    <div className="card-subtle">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-black">Live demo</p>
          <p className="mt-1 text-sm text-black/65">
            Connect with a passkey, then send a single or batched call.
          </p>
        </div>

        {!isConnected ? (
          <button
            className="btn-brand rounded-full px-5 py-2.5 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50"
            onClick={() => connect({ connector: wagmiConfig.connectors[0] })}
            disabled={!hasKey || isConnecting}
            type="button"
          >
            {hasKey ? (isConnecting ? "Connecting…" : "Connect wallet") : "Add API key"}
          </button>
        ) : (
          <button
            className="btn-black rounded-full px-5 py-2.5 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50"
            onClick={() => disconnect({})}
            disabled={isDisconnecting}
            type="button"
          >
            {isDisconnecting ? "Disconnecting…" : "Disconnect"}
          </button>
        )}
      </div>

      <div className="mt-5 rounded-xl border border-black/10 bg-white p-4">
        <p className="text-sm text-black/65">
          Status:{" "}
          <span className="font-medium text-black">
            {isConnected ? `Connected (${address})` : "Not connected"}
          </span>
        </p>

        {!hasKey ? (
          <p className="mt-3 text-sm text-black/65">
            Set <code>NEXT_PUBLIC_JAW_API_KEY</code> in <code>.env.local</code> to enable
            the demo.
          </p>
        ) : null}

        <p className="mt-3 text-sm text-black/65">
          Need an API key?{" "}
          <a
            className="font-medium text-brand-green hover:opacity-80"
            href={createKeyUrl}
            target="_blank"
            rel="noreferrer"
          >
            Create one on the JAW dashboard
          </a>
          .
        </p>

        {isConnected ? (
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <button
              className="btn-black rounded-full px-5 py-2.5 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50"
              onClick={() =>
                sendCalls({
                  calls: [
                    {
                      to: address!,
                      value: parseEther("0"),
                    },
                  ],
                })
              }
              disabled={isSending}
              type="button"
            >
              {isSending ? "Sending…" : "Send (self-call)"}
            </button>

            <button
              className="btn-black rounded-full px-5 py-2.5 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50"
              onClick={() =>
                sendCalls({
                  calls: [
                    { to: address!, value: parseEther("0") },
                    { to: address!, value: parseEther("0") },
                  ],
                })
              }
              disabled={isSending}
              type="button"
            >
              {isSending ? "Sending…" : "Batch (2x self-call)"}
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

