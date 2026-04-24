import { SITE } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-start justify-between gap-3 border-t border-ink-800 bg-ink-1000 px-6 py-6 sm:flex-row sm:items-center sm:px-14">
      <span className="font-mono text-[0.55rem] uppercase tracking-meta text-ink-700">
        © {year} {SITE.name} · {SITE.city}, {SITE.country}
      </span>
      <span className="font-mono text-[0.55rem] uppercase tracking-meta text-ink-700">
        Strategy · Paid Ads · Content · Analysis · Web
      </span>
    </footer>
  );
}
