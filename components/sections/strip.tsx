import Image from "next/image";

const ITEMS = [
  {
    src: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&q=85&auto=format&fit=crop",
    title: ["Creative", "Production"],
    meta: "Content · Photo · Video",
    alt: "Cinematic video production set — evverywhere creative content",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85&auto=format&fit=crop",
    title: ["Strategy", "& Data"],
    meta: "Analysis · Growth",
    alt: "Brand strategy data and analytics — evverywhere business intelligence",
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=85&auto=format&fit=crop",
    title: ["Digital", "Builds"],
    meta: "Web · E-Commerce",
    alt: "Website development workspace — evverywhere digital builds",
  },
];

export function Strip() {
  return (
    <div className="grid grid-cols-1 bg-ink-900 md:grid-cols-3" aria-hidden="false">
      {ITEMS.map((it) => (
        <article
          key={it.meta}
          className="group relative aspect-[3/2] overflow-hidden bg-ink-800"
        >
          <Image
            src={it.src}
            alt={it.alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-[1500ms] ease-editorial group-hover:scale-[1.07]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
          />
          <div className="absolute bottom-8 left-8 z-10">
            <h3 className="font-serif text-2xl font-light italic leading-[1.1] text-bone">
              {it.title[0]}
              <br />
              {it.title[1]}
            </h3>
            <span className="mt-2 block font-mono text-[0.56rem] uppercase tracking-meta text-bone/70">
              {it.meta}
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}
