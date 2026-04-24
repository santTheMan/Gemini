import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Origin } from "@/components/sections/origin";
import { Strip } from "@/components/sections/strip";
import { Now } from "@/components/sections/now";
import { Eras } from "@/components/sections/eras";
import { PullQuote } from "@/components/sections/pull-quote";
import { NextCTA } from "@/components/sections/next-cta";
import { SmoothScroll } from "@/components/smooth-scroll";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Nav />
      <main id="main">
        <Hero />
        <Origin />
        <Strip />
        <Now />
        <Eras />
        <PullQuote />
        <NextCTA />
      </main>
      <Footer />
    </>
  );
}
