"use client";

import { useEffect } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function SmoothScroll() {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    let cleanup = () => {};
    let cancelled = false;

    (async () => {
      const Lenis = (await import("lenis")).default;
      if (cancelled) return;
      const lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.6,
      });

      const onScroll = () => {
        // Allow GSAP ScrollTrigger to refresh on each tick
        if (typeof window !== "undefined" && (window as any).ScrollTrigger) {
          (window as any).ScrollTrigger.update();
        }
      };
      lenis.on("scroll", onScroll);

      const tick = (time: number) => {
        lenis.raf(time);
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);

      // Anchor smooth scroll
      const onAnchor = (e: MouseEvent) => {
        const t = e.target as HTMLElement | null;
        const a = t?.closest('a[href^="#"]') as HTMLAnchorElement | null;
        if (!a) return;
        const href = a.getAttribute("href");
        if (!href || href === "#") return;
        const el = document.querySelector(href);
        if (!el) return;
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { duration: 1.3 });
      };
      document.addEventListener("click", onAnchor);

      cleanup = () => {
        document.removeEventListener("click", onAnchor);
        cancelAnimationFrame(raf);
        lenis.destroy();
      };
    })();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [reduced]);

  return null;
}
