import { JsonLd } from "@/components/JsonLd";
import { FloatingCallButton } from "@/components/FloatingCallButton";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Emergency } from "@/components/sections/Emergency";
import { Faq } from "@/components/sections/Faq";
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
      <main className="pb-20 md:pb-0">
        <Hero />
        <Services />
        <About />
        <Emergency />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
