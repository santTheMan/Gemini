"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handle = () => setCompact(window.scrollY > 80);
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        ref={ref}
        className={cn(
          "fixed inset-x-0 top-0 z-[1000] mix-difference flex items-center justify-between transition-[padding] duration-500",
          compact ? "px-6 py-4 sm:px-14" : "px-6 py-7 sm:px-14",
        )}
      >
        <Link
          href="/#hero"
          className="font-serif text-base font-light italic tracking-[0.22em] text-bone"
          aria-label={`${SITE.name} home`}
        >
          {SITE.name}
        </Link>
        <nav aria-label="Primary">
          <ul className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-mono text-[0.6rem] uppercase tracking-hud text-bone opacity-60 transition-opacity hover:opacity-100 focus-visible:opacity-100"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="flex flex-col gap-1.5 p-2 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block h-px w-5 bg-bone" />
            <span className="block h-px w-5 bg-bone" />
            <span className="block h-px w-5 bg-bone" />
          </button>
        </nav>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={cn(
          "fixed inset-0 z-[999] flex flex-col items-center justify-center gap-12 bg-ink-1000 transition-opacity duration-500 md:hidden",
          open
            ? "opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        {NAV_LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-serif text-4xl font-light italic text-bone/90"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </>
  );
}
