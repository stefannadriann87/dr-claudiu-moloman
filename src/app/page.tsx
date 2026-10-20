import { JsonLd } from "@/components/JsonLd";
import { FloatingCallButton } from "@/components/FloatingCallButton";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Reveal } from "@/components/motion/Reveal";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Emergency } from "@/components/sections/Emergency";
import { Faq } from "@/components/sections/Faq";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import {
  businessSchema,
  faqSchema,
  websiteSchema,
} from "@/lib/seo/schemas";

export default function HomePage() {
  return (
    <>
      <JsonLd data={businessSchema()} />
      <JsonLd data={faqSchema()} />
      <JsonLd data={websiteSchema()} />

      <Header />
      <main className="pt-0">
        <Hero />
        <Reveal>
          <About />
        </Reveal>
        <Reveal delay={0.05}>
          <Emergency />
        </Reveal>
        <Reveal delay={0.05}>
          <Services />
        </Reveal>
        <Reveal>
          <Gallery />
        </Reveal>
        <Reveal>
          <Faq />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
