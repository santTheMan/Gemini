import Image from "next/image";

export function PullQuote() {
  return (
    <figure className="relative aspect-[21/8] w-full overflow-hidden bg-ink-950 max-md:aspect-[4/3]">
      <Image
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=88&auto=format&fit=crop"
        alt="Editorial creative workspace — evverywhere studio"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-ink-1000/95 via-ink-1000/55 to-ink-1000/15"
      />
      <figcaption className="absolute left-[6%] top-1/2 max-w-xl -translate-y-1/2">
        <blockquote className="font-serif text-step-5 font-light italic leading-[1.18] text-bone">
          The world&rsquo;s best brands aren&rsquo;t just <em>seen</em> —
          <br />
          they&rsquo;re <em>felt.</em>
        </blockquote>
        <span className="mt-6 block font-mono text-[0.58rem] uppercase tracking-hud text-bone/70">
          Daniel &amp; Lliam · evverywhere
        </span>
      </figcaption>
    </figure>
  );
}
