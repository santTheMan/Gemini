import Image from "next/image";
import { Reveal } from "@/components/reveal";

export function Origin() {
  return (
    <section
      id="origin"
      aria-labelledby="origin-heading"
      className="bg-cream px-6 py-32 text-ink-900 sm:px-14 sm:py-40"
    >
      <Reveal className="tag !text-ink-300">
        About evverywhere
      </Reveal>

      <div className="mx-auto mt-16 grid max-w-6xl gap-16 lg:grid-cols-2 lg:gap-32">
        <div>
          <Reveal>
            <h2
              id="origin-heading"
              className="font-serif text-step-6 font-light leading-[1.04] tracking-tighter text-balance"
            >
              Creative strategy.
              <br />
              Global standard.
              <br />
              <em>Cape Town built.</em>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[
                { name: "Daniel", role: "Co-Founder · Strategy & Growth" },
                { name: "Lliam", role: "Co-Founder · Creative Direction" },
              ].map((f) => (
                <div key={f.name} className="border-t border-ink-100 pt-5">
                  <div className="font-serif text-3xl font-light text-ink-900">
                    {f.name}
                  </div>
                  <div className="mt-1 font-mono text-[0.58rem] uppercase tracking-meta text-ink-300">
                    {f.role}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <span className="mt-10 inline-block border border-ink-100 px-5 py-2 font-mono text-[0.55rem] uppercase tracking-editorial text-ink-300">
              Cape Town, ZA · Est. 2024
            </span>
          </Reveal>

          <Reveal delay={260}>
            <div className="relative mt-12 aspect-[3/4] w-full overflow-hidden bg-ink-100">
              <Image
                src="https://images.unsplash.com/photo-1580098674347-72e30a71a6cf?w=1200&q=85&auto=format&fit=crop"
                alt="Cape Town's Table Mountain at dusk — the home of evverywhere creative agency"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1500ms] ease-editorial hover:scale-[1.04]"
              />
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal delay={120}>
            <blockquote className="border-l-2 border-ink-100 pl-7 font-serif text-step-2 font-light italic leading-[1.55] text-ink-800">
              &ldquo;World-class creative work doesn&rsquo;t require a Johannesburg
              postcode or a London agency behind it.&rdquo;
            </blockquote>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-12 space-y-6 text-step--1 leading-[2.1] text-ink-400">
              <p>
                evverywhere is a Cape Town creative agency built for the
                everywhere generation — brands that refuse to be contained by
                category, geography, or convention.
              </p>
              <p>
                We deliver{" "}
                <strong className="font-medium text-ink-800">
                  world-renowned strategy creation
                </strong>
                ,{" "}
                <strong className="font-medium text-ink-800">paid advertising</strong>,{" "}
                <strong className="font-medium text-ink-800">creative media content</strong>
                ,{" "}
                <strong className="font-medium text-ink-800">full business analysis</strong>
                , and{" "}
                <strong className="font-medium text-ink-800">website development</strong>{" "}
                — executed not as isolated services but as one coherent creative
                system.
              </p>
              <p>
                We are structured to move fast. Full media content creatives
                delivered within{" "}
                <strong className="font-medium text-ink-800">10 days of brief</strong>.
                No bloat. No delays. Just work that lands.
              </p>
              <p className="border-t border-ink-100 pt-5 font-mono text-[0.58rem] uppercase tracking-editorial text-ink-300">
                Strategy · Paid Ads · Content · Analysis · Web Dev
              </p>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="relative mt-12 aspect-[4/3] w-full overflow-hidden bg-ink-100">
              <Image
                src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1200&q=85&auto=format&fit=crop"
                alt="evverywhere studio — strategy session in progress"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1500ms] ease-editorial hover:scale-[1.04]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
