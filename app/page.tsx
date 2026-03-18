import PixelBlast from "./components/PixelBlast";
import { CodeTabs } from "./components/CodeTabs";
import { JawDemo } from "./components/JawDemo";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main>
        <section className="relative min-h-[calc(100vh-3.5rem)] w-full overflow-hidden md:min-h-[calc(100vh-4rem)]">
          <div className="absolute inset-0 z-0 h-full w-full">
            <PixelBlast
              variant="square"
              pixelSize={4}
              color="#01B73E"
              patternScale={2}
              patternDensity={1}
              pixelSizeJitter={0}
              enableRipples
              rippleSpeed={0.4}
              rippleThickness={0.12}
              rippleIntensityScale={1.5}
              liquid={false}
              liquidStrength={0.12}
              liquidRadius={1.2}
              liquidWobbleSpeed={5}
              speed={0.5}
              edgeFade={0.25}
              transparent
            />
          </div>

          <div className="section-container relative z-10 flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center bg-gradient-to-b from-white/70 via-white/75 to-white/85 py-16 text-center md:min-h-[calc(100vh-4rem)] md:py-24">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black/70">
              <span className="inline-block h-2 w-2 rounded-full bg-brand-green" />
              Smart accounts + passkeys (WebAuthn)
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">
              Seedless smart accounts with{" "}
              <span className="text-brand-green">passkeys</span> in minutes
            </h1>

            <p className="mt-3 text-base font-medium text-black/80 sm:mt-4 sm:text-lg">
              powered by{" "}
              <span className="underline-curve text-brand-green">Jaw.id</span>
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/90 sm:mt-8 sm:text-xl">
              Your users get seedless wallets that support batched transactions, stablecoin
              gas payments, and optional sponsorship—all through a familiar Web3
              interface.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="btn-brand rounded-full px-6 py-3 text-sm font-semibold transition-colors"
                href="#quickstart"
              >
                Quickstart
              </a>
              <a
                className="btn-black rounded-full px-6 py-3 text-sm font-semibold transition-colors"
                href="#demo"
              >
                Live demo
              </a>
            </div>
          </div>
        </section>

        <section className="px-0 pb-14 pt-10 md:pb-20 md:pt-14">
          <div className="section-container">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="card-subtle">
                <p className="text-sm font-semibold text-black">Issue accounts</p>
                <p className="mt-2 text-sm text-black/65">
                  Users create accounts with passkeys—no seed phrases.
                </p>
              </div>
              <div className="card-subtle">
                <p className="text-sm font-semibold text-black">Passkey auth</p>
                <p className="mt-2 text-sm text-black/65">
                  Secure, passwordless WebAuthn authentication.
                </p>
              </div>
              <div className="card-subtle">
                <p className="text-sm font-semibold text-black">Send &amp; receive</p>
                <p className="mt-2 text-sm text-black/65">
                  Standard transactions with optional gas sponsorship.
                </p>
              </div>
              <div className="card-subtle">
                <p className="text-sm font-semibold text-black">Batch transactions</p>
                <p className="mt-2 text-sm text-black/65">
                  Multiple operations in a single approval.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="quickstart" className="px-0 pb-16 pt-4 md:pb-24 md:pt-6">
          <div className="section-container">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-black md:text-3xl">
                  Quickstart
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-black/65 md:text-base">
                  Install the SDK, add your API key, and connect via passkeys.
                </p>
              </div>
              <p className="text-sm text-black/60">
                API key required (store in <code>.env.local</code>)
              </p>
            </div>

            <div className="mt-6">
              <CodeTabs />
            </div>
          </div>
        </section>

        <section id="demo" className="px-0 pb-20 pt-4 md:pb-28 md:pt-6">
          <div className="section-container">
            <JawDemo />
          </div>
        </section>

        <footer className="border-t border-black/6 bg-white py-6 md:py-8">
          <div className="section-container flex flex-col items-center justify-between gap-4 text-sm text-black/60 md:flex-row">
            <span className="font-medium text-black/80">
              <span className="text-brand-green">JAW</span> ID Starter
            </span>
            <div className="flex items-center gap-4">
              <p>Identity-first smart accounts: passkeys, batching, sponsorship.</p>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 text-black/70 transition-colors hover:text-black"
                href="https://github.com/ayushsingh82/jawid-starter"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub repository"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M12 .5C5.73.5.75 5.72.75 12.17c0 5.2 3.44 9.6 8.2 11.16.6.12.82-.27.82-.6v-2.2c-3.34.75-4.04-1.64-4.04-1.64-.55-1.43-1.35-1.81-1.35-1.81-1.1-.78.08-.77.08-.77 1.22.09 1.86 1.29 1.86 1.29 1.08 1.9 2.84 1.35 3.53 1.03.11-.8.42-1.35.76-1.66-2.66-.31-5.46-1.37-5.46-6.08 0-1.34.46-2.43 1.22-3.29-.12-.31-.53-1.56.12-3.25 0 0 1-.33 3.3 1.26.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.3-1.6 3.3-1.26 3.3-1.26.65 1.69.24 2.94.12 3.25.76.86 1.22 1.95 1.22 3.29 0 4.72-2.8 5.77-5.47 6.08.43.38.82 1.12.82 2.27v3.36c0 .33.22.72.82.6 4.77-1.56 8.2-5.97 8.2-11.16C23.25 5.72 18.27.5 12 .5z" />
                </svg>
                <span className="text-sm font-medium">GitHub</span>
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
