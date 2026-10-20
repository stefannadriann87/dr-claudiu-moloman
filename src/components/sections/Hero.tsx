import Image from "next/image";
import { FadeIn, MotionTap } from "@/components/motion/Reveal";
import { PhoneLink } from "@/components/PhoneLink";
import { images, siteConfig } from "@/lib/site";
import { Clock, MapPin, Shield } from "lucide-react";

const trustItems = [
  { icon: Clock, label: "Disponibil 24/7" },
  { icon: Shield, label: `${siteConfig.experienceYears}+ ani experiență` },
  { icon: MapPin, label: "Tătărași, Iași" },
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#dce8e2] blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-12 md:px-6 md:py-20 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <p className="eyebrow">Medic veterinar, urgențe non-stop</p>
          <h1 className="mt-4 max-w-xl text-[2.35rem] font-medium leading-[1.08] text-[#1c211d] sm:text-5xl lg:text-[3.4rem]">
            Urgențe veterinare non stop în Iași
          </h1>
          <p className="mt-3 text-xl font-medium text-[#2f5d50]">
            {siteConfig.author}
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-[#5c655e]">
            {siteConfig.slogan}. {siteConfig.tagline}. Sunați înainte de
            deplasare la cabinet, inclusiv noaptea și în weekend.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <MotionTap>
              <PhoneLink
                location="hero_primary"
                className="btn-emergency w-full justify-center rounded-full px-6 py-3.5 text-base font-semibold text-white hover:text-white sm:w-auto"
                showIcon
              >
                Sună: {siteConfig.phoneDisplay}
              </PhoneLink>
            </MotionTap>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-[#cfc6b4] bg-white px-6 py-3.5 text-sm font-semibold text-[#1c211d] transition hover:border-[#2f5d50] hover:text-[#2f5d50]"
            >
              Locație cabinet
            </a>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-3">
            {trustItems.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-2xl bg-white/80 px-3 py-3 ring-1 ring-[#e4ddd0]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e4efe9] text-[#2f5d50]">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <span className="text-sm font-medium text-[#1c211d]">{label}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.1} y={24}>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-[2rem] bg-[#efe8da] p-2 shadow-[0_30px_60px_-30px_rgba(47,93,80,0.35)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] sm:aspect-[5/6]">
                <Image
                  src={images.profile.src}
                  alt={images.profile.alt}
                  width={images.profile.width}
                  height={images.profile.height}
                  className="h-full w-full object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 90vw, 480px"
                />
              </div>
            </div>
            <div className="absolute -bottom-5 left-4 right-4 rounded-2xl bg-white p-4 shadow-xl shadow-[#2f5d50]/10 ring-1 ring-[#e4ddd0] sm:left-8 sm:right-auto sm:max-w-xs">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2f5d50]">
                Programări și urgențe
              </p>
              <PhoneLink location="hero_card" className="mt-1 text-xl" />
              <p className="mt-1 text-xs text-[#5c655e]">
                Sunați înainte de vizită
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
