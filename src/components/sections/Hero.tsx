import Image from "next/image";
import { MotionTap, FadeIn } from "@/components/motion/Reveal";
import { PhoneLink } from "@/components/PhoneLink";
import { images, siteConfig } from "@/lib/site";
import { Clock, MapPin, Phone, Shield } from "lucide-react";

const trustItems = [
  { icon: Clock, label: "24/7 non-stop" },
  { icon: Shield, label: `${siteConfig.experienceYears}+ ani experiență` },
  { icon: MapPin, label: "Tătărași, Iași" },
] as const;

export function Hero() {
  return (
    <section className="hero-bg hero-pattern relative overflow-hidden text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 h-[32rem] w-[32rem] rounded-full bg-cyan-500/20 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-emerald-500/25 blur-[90px]"
      />

      <div className="hero-phone-strip relative z-10 border-b border-white/10 md:hidden">
        <MotionTap className="block w-full">
          <PhoneLink
            location="hero_mobile_strip"
            className="flex w-full items-center justify-center gap-2 px-4 py-3.5 text-base font-bold text-white hover:text-white"
            showIcon
          >
            Urgență? Sună acum: {siteConfig.phoneDisplay}
          </PhoneLink>
        </MotionTap>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-24 md:px-6 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <FadeIn className="order-2 lg:order-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge-live inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
                <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                Disponibil acum
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-cyan-100 ring-1 ring-white/20">
                Iași · Programare telefonică
              </span>
            </div>

            <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Medic veterinar urgențe
            </p>
            <h1 className="mt-2 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              <span className="text-gradient-brand block">Dr. Claudiu Moloman</span>
              <span className="mt-3 block text-2xl font-semibold text-white/95 sm:text-3xl lg:text-[2rem] lg:leading-tight">
                Urgențe veterinare non stop în Iași
              </span>
            </h1>

            <p className="mt-5 text-lg font-bold text-emerald-300">
              {siteConfig.slogan}
            </p>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-cyan-50/90">
              {siteConfig.tagline}. Sunați înainte de deplasare la cabinet, inclusiv
              noaptea și în weekend.
            </p>

            <div className="mt-8 hidden flex-col gap-3 sm:flex sm:flex-row sm:items-stretch md:flex">
              <MotionTap className="flex-1 sm:flex-none">
                <PhoneLink
                  location="hero_primary"
                  className="btn-call flex h-full min-h-[52px] w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-base font-bold hover:text-white sm:w-auto sm:min-w-[260px] sm:rounded-full"
                  showIcon
                >
                  {siteConfig.phoneDisplay}
                </PhoneLink>
              </MotionTap>
              <MotionTap className="flex-1 sm:flex-none">
                <a
                  href="#contact"
                  className="btn-outline-light flex h-full min-h-[52px] w-full items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-bold sm:w-auto sm:rounded-full"
                >
                  <MapPin className="h-4 w-4 shrink-0" aria-hidden />
                  Locație cabinet
                </a>
              </MotionTap>
            </div>

            <ul className="mt-8 flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:grid lg:grid-cols-3 lg:overflow-visible [&::-webkit-scrollbar]:hidden">
              {trustItems.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="card-glass min-w-[140px] shrink-0 rounded-xl px-3 py-3 lg:min-w-0"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-500 shadow-lg shadow-orange-950/40">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="text-xs font-bold leading-tight sm:text-sm">
                      {label}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1} y={32} className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-md lg:max-w-none lg:justify-self-end">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-orange-500 via-cyan-400 to-emerald-400 opacity-80 blur-2xl" />

              <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-950 p-2 shadow-2xl ring-2 ring-white/20">
                <div className="relative aspect-[680/510] overflow-hidden rounded-2xl">
                  <Image
                    src={images.profile.src}
                    alt={images.profile.alt}
                    width={images.profile.width}
                    height={images.profile.height}
                    className="h-full w-full object-cover object-top"
                    priority
                    sizes="(max-width: 1024px) 92vw, 480px"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent px-4 pb-4 pt-16">
                    <p className="text-sm font-bold text-white">
                      {siteConfig.author}
                    </p>
                    <p className="text-xs font-medium text-cyan-200">
                      Cabinet urgențe · {siteConfig.address.locality}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-1 top-4 rounded-2xl bg-emerald-600 px-4 py-2 text-center shadow-xl ring-2 ring-white/30 sm:-right-4">
                <p className="text-2xl font-bold leading-none">
                  {siteConfig.experienceYears}+
                </p>
                <p className="text-[10px] font-bold uppercase tracking-wide text-emerald-100">
                  ani experiență
                </p>
              </div>

              <div className="absolute -bottom-5 left-4 right-4 rounded-2xl bg-white p-4 text-slate-900 shadow-2xl sm:left-6 sm:right-auto sm:max-w-xs">
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                    <Phone className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-orange-600">
                      Programări & urgențe
                    </p>
                    <PhoneLink
                      location="hero_card"
                      className="text-xl font-bold text-slate-900 hover:text-orange-600"
                    />
                    <p className="mt-0.5 text-xs font-medium text-slate-500">
                      Sunați înainte de vizită
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="mt-10 flex flex-col gap-3 sm:hidden">
          <MotionTap>
            <PhoneLink
              location="hero_primary_mobile"
              className="btn-call flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-lg font-bold hover:text-white"
              showIcon
            >
              Sună: {siteConfig.phoneDisplay}
            </PhoneLink>
          </MotionTap>
          <a
            href="#contact"
            className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-white/30 bg-white/10 py-3.5 text-sm font-bold text-white"
          >
            <MapPin className="h-4 w-4" aria-hidden />
            Vezi locația
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
