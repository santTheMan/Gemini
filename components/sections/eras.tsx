import Image from "next/image";
import { Reveal } from "@/components/reveal";

const ERAS = [
  {
    span: "c7",
    src: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1600&q=85&auto=format&fit=crop",
    title: ["Social strategy", "that builds culture."],
    sub: "Community · Content · Paid",
    meta: "Strategy & Paid Ads",
    alt: "Social media campaign creative — evverywhere strategy and paid ads",
  },
  {
    span: "c5",
    src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=85&auto=format&fit=crop",
    title: ["Brand systems", "with conviction."],
    sub: "Identity · Voice · Direction",
    meta: "Brand Work",
    alt: "Brand identity system — evverywhere brand direction",
  },
  {
    span: "c4",
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=85&auto=format&fit=crop",
    title: ["Content", "that stops scrolls."],
    sub: "Photo · Video · Motion",
    meta: "Creative Media",
    alt: "Creative photography studio — evverywhere creative media production",
  },
  {
    span: "c4",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85&auto=format&fit=crop",
    title: ["Strategy rooted", "in data."],
    sub: "Analysis · Research · Growth",
    meta: "Business Analysis",
    alt: "Business analytics dashboard — evverywhere data-led strategy",
  },
  {
    span: "c4",
    src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=85&auto=format&fit=crop",
    title: ["Websites that", "convert."],
    sub: "Design · Build · Optimise",
    meta: "Website Development",
    alt: "Modern website design and development — evverywhere web builds",
  },
] as const;

const STATS = [
  { n: "10", l: "Day Turnaround" },
  { n: "5", l: "Service Pillars" },
  { n: "∞", l: "Platforms" },
  { n: "24/7", l: "Always On" },
];

const SPAN_CLASS: Record<string, string> = {
  c7: "md:col-span-7",
  c5: "md:col-span-5",
  c4: "md:col-span-4",
};

export function Eras() {
  return (
    <section
      id="eras"
      aria-labelledby="eras-heading"
      className="bg-ink-950 px-6 pb-24 pt-32 sm:px-14 sm:pt-40"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="tag">Eras · Our Work</div>
        </Reveal>

        <Reveal>
          <div className="mt-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <h2
              id="eras-heading"
              className="max-w-xl font-serif text-step-6 font-light leading-[1.04] tracking-tighter text-balance"
            >
              The work tells
              <br />
              the story of
              <br />
              <em>who we are.</em>
            </h2>
            <p className="max-w-sm text-step--1 leading-[2] text-ink-400">
              From emerging brands finding their voice to established names
              staying culturally relevant — we build the systems that make work
              matter.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
          {ERAS.map((e, i) => (
            <Reveal
              key={e.alt}
              delay={i * 60}
              className={`group overflow-hidden bg-ink-900 ${SPAN_CLASS[e.span]}`}
            >
              <div
                className={`relative overflow-hidden ${
                  e.span === "c4" ? "aspect-[4/3]" : "aspect-[3/2]"
                }`}
              >
                <Image
                  src={e.src}
                  alt={e.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1500ms] ease-editorial group-hover:scale-[1.07]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent"
                />
                <div className="absolute inset-x-8 bottom-8">
                  <h3 className="font-serif text-step-3 font-light italic leading-[1.14] text-bone">
                    {e.title[0]}
                    <br />
                    {e.title[1]}
                  </h3>
                  <span className="mt-2 block font-mono text-[0.55rem] uppercase tracking-meta text-bone/65">
                    {e.sub}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-ink-800 px-7 py-5">
                <span className="font-serif text-base font-light text-bone">
                  {e.meta}
                </span>
                <span
                  aria-hidden
                  className="text-ink-700 transition-[color,transform] duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ink-300"
                >
                  ↗
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 gap-px bg-ink-800 md:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.l}
              className="bg-ink-950 px-8 py-12 text-center transition-colors duration-500 hover:bg-ink-900"
            >
              <div className="font-serif text-step-5 font-light italic leading-none text-bone">
                {s.n}
              </div>
              <div className="mt-2 font-mono text-[0.55rem] uppercase tracking-hud text-ink-400">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
