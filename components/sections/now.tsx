import Image from "next/image";
import { Reveal } from "@/components/reveal";

const SERVICES = [
  {
    n: "01",
    title: ["Strategy", "Creation"],
    body: "World-renowned strategy that positions brands for dominance. We map audiences, decode competitors, build editorial architectures, and create go-to-market frameworks that turn ambition into direction.",
    emphasis:
      "Strategy isn't a document — it's the operating system for everything your brand does.",
    pills: ["Brand Positioning", "Audience Mapping", "Go-To-Market", "Competitive Intelligence", "Editorial Architecture"],
  },
  {
    n: "02",
    title: ["Paid", "Advertising"],
    body: "Performance marketing that converts. We build, manage, and optimise paid campaigns across Meta, Google, TikTok, and LinkedIn — full-funnel strategy, creative testing, audience refinement, and transparent reporting.",
    emphasis: "Every rand spent is a rand accounted for.",
    pills: ["Meta Ads", "Google Ads", "TikTok Ads", "Campaign Optimisation", "Performance Reporting"],
  },
  {
    n: "03",
    title: ["Creative Media", "Content"],
    body: "Full-spectrum media content production — from concept to capture to delivery. Photography, videography, motion graphics, social content, and campaign assets. We produce scroll-stopping creative at speed.",
    emphasis: "Full media content packages within 10 days of brief.",
    pills: ["Photography", "Videography", "Motion Graphics", "Social Content", "10-Day Delivery"],
  },
  {
    n: "04",
    title: ["Business", "Analysis"],
    body: "Full business analysis from the inside out. We dissect your operations, market position, digital presence, and growth levers — then deliver actionable intelligence that informs every creative and strategic decision.",
    emphasis: "We don't guess. We diagnose, then build.",
    pills: ["Market Research", "SWOT Analysis", "Growth Modelling", "Digital Audit", "Revenue Strategy"],
  },
  {
    n: "05",
    title: ["Website", "Development"],
    body: "Custom websites and digital platforms built to convert. From single-page landing sites to full e-commerce builds — responsive, performance-optimised web experiences that look world-class and turn visitors into customers.",
    emphasis: "Designed for the world. Built for conversion.",
    pills: ["Custom Web Design", "E-Commerce", "Landing Pages", "CMS Builds", "Performance Optimisation"],
  },
] as const;

export function Now() {
  return (
    <section
      id="now"
      aria-labelledby="now-heading"
      className="bg-ink-950 px-6 py-32 sm:px-14 sm:py-40"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="tag">What We Do</div>
        </Reveal>
        <h2 id="now-heading" className="sr-only">
          Services
        </h2>

        {SERVICES.slice(0, 3).map((svc) => (
          <ServiceRow key={svc.n} svc={svc} />
        ))}

        <Reveal>
          <div className="relative my-12 aspect-[21/8] w-full overflow-hidden bg-ink-900">
            <Image
              src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1800&q=88&auto=format&fit=crop"
              alt="evverywhere production crew filming a creative campaign in Cape Town"
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-[1500ms] ease-editorial hover:scale-[1.04]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-transparent"
            />
          </div>
        </Reveal>

        {SERVICES.slice(3).map((svc) => (
          <ServiceRow key={svc.n} svc={svc} />
        ))}

        <Reveal>
          <div className="mt-20 grid grid-cols-1 border border-ink-800 transition-colors duration-500 hover:border-ink-700 md:grid-cols-[200px_1fr]">
            <div className="flex flex-col items-center justify-center border-b border-ink-800 bg-ink-900 px-10 py-12 md:border-b-0 md:border-r">
              <span className="font-serif text-step-6 font-light italic leading-none text-bone">
                10
              </span>
              <span className="mt-2 font-mono text-[0.55rem] uppercase tracking-hud text-ink-400">
                Days
              </span>
            </div>
            <div className="px-10 py-12">
              <h3 className="font-serif text-step-3 font-light italic text-bone">
                Brief to delivery. Full creative package.
              </h3>
              <p className="mt-4 max-w-xl text-step--1 leading-[2.1] text-ink-400">
                We are structured to move. From the moment you brief us, our
                strategy, creative, and production teams activate in parallel —
                delivering complete media content packages in 10 days. No
                back-and-forth. No delays. Just work that lands.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceRow({
  svc,
}: {
  svc: (typeof SERVICES)[number];
}) {
  return (
    <Reveal>
      <article className="group grid grid-cols-1 gap-6 border-t border-ink-800 py-16 transition-[padding] duration-500 ease-editorial hover:pl-4 last:border-b md:grid-cols-[68px_1fr_1.9fr] md:gap-10">
        <div className="font-mono text-[0.58rem] uppercase tracking-meta text-ink-400">
          {svc.n}
        </div>
        <h3 className="font-serif text-step-4 font-light leading-[1.06] text-bone transition-colors duration-300 group-hover:text-bone">
          {svc.title[0]}
          <br />
          {svc.title[1]}
        </h3>
        <div>
          <p className="mb-3 max-w-xl text-step--1 leading-[2.1] text-ink-400">
            {svc.body}
          </p>
          <p className="mb-7 max-w-xl text-step--1 leading-[2.1] text-bone">
            {svc.emphasis}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {svc.pills.map((p) => (
              <span key={p} className="pill">
                {p}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
