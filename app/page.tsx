"use client";

import { useState } from "react";

const CA = "3b212NC4h3WXs4WwyjqZEtbuxf9RfmedUraCeGpgpump";
const X_LINK = "https://x.com/i/communities/2038739179878633926";

export default function Page() {
  const [copiedCA, setCopiedCA] = useState(false);
  const [copiedX, setCopiedX] = useState(false);

  const copy = async (text: string, which: "ca" | "x") => {
    try {
      await navigator.clipboard.writeText(text);
      if (which === "ca") {
        setCopiedCA(true);
        setTimeout(() => setCopiedCA(false), 1500);
      } else {
        setCopiedX(true);
        setTimeout(() => setCopiedX(false), 1500);
      }
    } catch {}
  };

  return (
    <main className="min-h-screen bg-[#fdfcf7] text-black flex flex-col items-center justify-start px-5 py-10 sm:py-16 font-[var(--font-marker)]">
      <h1 className="wobble text-center font-marker leading-none tracking-tight text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-6 sm:mb-10 select-none">
        BRAIN IS<br />COOKED
      </h1>

      <div className="w-[260px] sm:w-[340px] md:w-[420px] mb-8 sm:mb-10">
        <video
          src="/brain.MP4"
          poster="/brain.png"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto float-y drop-shadow-[6px_6px_0_rgba(0,0,0,0.15)]"
        />
      </div>

      <section className="max-w-md w-full text-center font-marker text-xl sm:text-2xl leading-snug space-y-4 sm:space-y-5">
        <p>erm.</p>
        <p>forgot what im meant to say..</p>
        <p>oh yeah</p>
        <p>
          this coin is donating all the creator fees to{" "}
          <a
            href="https://memorycare.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-wavy decoration-pink-500 hover:text-pink-600 transition-colors"
          >
            MemoryCare
          </a>
          , a dementia charity.
        </p>
      </section>

      <div className="w-full max-w-md mt-10 space-y-5">
        <div>
          <p className="font-marker text-lg sm:text-xl mb-2 text-center">
            this is the CA:
          </p>
          <button
            onClick={() => copy(CA, "ca")}
            className="w-full break-all border-4 border-black bg-white hover:bg-yellow-200 active:translate-y-[2px] transition-all rounded-2xl px-4 py-4 font-mono text-sm sm:text-base shadow-[6px_6px_0_0_#000]"
          >
            {copiedCA ? "copied !! ✨" : CA}
          </button>
        </div>

        <div>
          <p className="font-marker text-lg sm:text-xl mb-2 text-center">
            join the X community:
          </p>
          <button
            onClick={() => copy(X_LINK, "x")}
            className="w-full break-all border-4 border-black bg-white hover:bg-pink-200 active:translate-y-[2px] transition-all rounded-2xl px-4 py-4 font-mono text-sm sm:text-base shadow-[6px_6px_0_0_#000]"
          >
            {copiedX ? "copied !! ✨" : X_LINK}
          </button>
        </div>
      </div>

      <footer className="mt-16 mb-4 font-marker text-sm opacity-60 text-center">
        ok bye
      </footer>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");

        .font-marker,
        h1,
        p,
        button,
        section {
          font-family: "Permanent Marker", system-ui, sans-serif;
        }

        button {
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        }

        .wobble {
          display: inline-block;
          animation: wobble 2.4s ease-in-out infinite;
          text-shadow:
            3px 3px 0 #ff4dcb,
            -2px -2px 0 #4dd2ff;
        }

        @keyframes wobble {
          0%, 100% {
            transform: rotate(-2deg) skewX(-1deg);
          }
          25% {
            transform: rotate(1.5deg) skewX(2deg) translateY(-2px);
          }
          50% {
            transform: rotate(-1deg) skewX(-2deg) translateY(1px);
          }
          75% {
            transform: rotate(2deg) skewX(1deg);
          }
        }

        .float-y {
          animation: floaty 3.5s ease-in-out infinite;
        }

        @keyframes floaty {
          0%, 100% {
            transform: translateY(0) rotate(-1deg);
          }
          50% {
            transform: translateY(-10px) rotate(1deg);
          }
        }
      `}</style>
    </main>
  );
}
