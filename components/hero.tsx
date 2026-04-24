"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const CosmosScene = dynamic(
  () => import("./cosmos/scene").then((m) => m.CosmosScene),
  { ssr: false, loading: () => null },
);

type Stage = { coord: string; title: string; sub: string; italic?: boolean };

const STAGES: Stage[] = [
  { coord: "Observable Universe · ∞", title: "The Cosmos", sub: "Scroll to descend" },
  { coord: "Inner Solar System", title: "Earth", sub: "↓ 150 million km" },
  { coord: "Southern Hemisphere · −33.9°", title: "Africa", sub: "↓ 9,600 km" },
  { coord: "Western Cape, South Africa", title: "Cape Town", sub: "↓ 33.9°S · 18.4°E" },
  { coord: "Where it all begins", title: "evverywhere.", sub: "A creative agency", italic: true },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef(0);
  const [stage, setStage] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (reduced) {
      progressRef.current = 0;
      setStage(0);
      return;
    }

    let cleanup = () => {};
    let cancelled = false;

    (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=320%",
        pin: true,
        scrub: 1.2,
        onUpdate(self) {
          progressRef.current = self.progress;
          const p = self.progress;
          const next =
            p < 0.18 ? 0 : p < 0.42 ? 1 : p < 0.66 ? 2 : p < 0.88 ? 3 : 4;
          setStage((current) => (current === next ? current : next));
        },
      });

      cleanup = () => trigger.kill();
    })();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [reduced]);

  const s = STAGES[stage];

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-ink-1000"
      aria-label="Introduction"
    >
      <div className="absolute inset-0">
        <CosmosScene progressRef={progressRef} reducedMotion={reduced} />
      </div>

      {/* Vignette to seat the type */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center px-6">
        <div className="w-full max-w-4xl text-center">
          <p
            key={`c-${stage}`}
            className="mb-5 animate-fade-in font-mono text-[0.62rem] uppercase tracking-hud text-ink-200/70"
          >
            {s.coord}
          </p>
          <h1
            key={`t-${stage}`}
            className={`animate-fade-in font-serif font-light leading-[0.88] tracking-tighter text-bone ${
              s.italic ? "italic text-step-8 sm:text-step-8" : "text-step-7 sm:text-step-8"
            }`}
            style={{
              animationDelay: "60ms",
              textShadow: "0 4px 80px rgba(0,0,0,0.5)",
            }}
          >
            {s.title}
          </h1>
          <p
            key={`s-${stage}`}
            className="mt-8 animate-fade-in font-mono text-[0.66rem] uppercase tracking-hud text-ink-200/80"
            style={{ animationDelay: "120ms" }}
          >
            {s.sub}
          </p>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 left-1/2 z-[3] flex -translate-x-1/2 flex-col items-center gap-3 opacity-50"
      >
        <span className="font-mono text-[0.55rem] uppercase tracking-hud text-bone">
          Scroll
        </span>
        <span className="block h-12 w-px animate-scroll-hint bg-gradient-to-b from-bone/80 to-transparent" />
      </div>
    </section>
  );
}
