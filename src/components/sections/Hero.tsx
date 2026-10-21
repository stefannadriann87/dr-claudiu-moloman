import Image from "next/image";
import { PhoneLink } from "@/components/PhoneLink";
import { images, siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="py-16 md:py-20">
      <div className="page-grid grid items-center gap-8 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-6 lg:col-span-5">
          <p className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-clay" aria-hidden />
            Disponibil 24/7
          </p>
          <h1 className="mt-5 max-w-[11ch] text-[40px] leading-[1.02] lg:text-[64px]">
            Urgențe veterinare{" "}
            <span className="whitespace-nowrap text-clay">non stop</span> în Iași
          </h1>
          <p className="mt-5 max-w-md text-[20px] leading-[1.6] text-ink-soft">
            {siteConfig.author}. {siteConfig.tagline}. Sunați înainte de
            deplasare la cabinet.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PhoneLink
              location="hero_primary"
              className="btn-emergency hover:text-white"
              showIcon
            >
              Sună {siteConfig.phoneDisplay}
            </PhoneLink>
            <a href="#contact" className="btn-ghost">
              Locație cabinet
            </a>
          </div>
          <p className="mt-6 text-sm text-ink-soft">
            Tătărași, Vasile Lupu 106B · programare telefonică
          </p>
        </div>

        <div className="md:col-span-6 lg:col-span-7">
          <div className="h-[320px] overflow-hidden rounded-[30px] bg-pine-100 sm:h-[380px] lg:h-[440px]">
            <Image
              src={images.hero.src}
              alt={images.hero.alt}
              width={images.hero.width}
              height={images.hero.height}
              className="h-full w-full object-cover object-[22%_center] animate-[heroIn_500ms_cubic-bezier(0.2,0.7,0.3,1)_both]"
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
