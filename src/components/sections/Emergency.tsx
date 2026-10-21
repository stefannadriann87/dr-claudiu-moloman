import Image from "next/image";
import { PhoneLink } from "@/components/PhoneLink";
import {
  emergencySituations,
  emergencySteps,
  images,
  siteConfig,
} from "@/lib/site";

export function Emergency() {
  return (
    <section id="urgente" className="scroll-mt-[88px] bg-pine-900 text-white">
      <div className="page-grid section-pad">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.14em] text-white/70">
              Urgențe veterinare
              <span className="h-px w-16 bg-white/20" aria-hidden />
            </p>
            <h2
              className="mt-4 text-[32px] leading-[1.1] lg:text-[44px]"
              style={{ color: "#ffffff" }}
            >
              Când fiecare minut
              <br />
              contează.
            </h2>
            <p className="mt-5 max-w-[40ch] text-white/75">
              Intervenții rapide pentru animalele de companie din Iași și
              împrejurimi. Sunați. Stabilim împreună cât de urgent este cazul.
            </p>
            <PhoneLink
              location="emergency_banner"
              className="mt-8 w-fit rounded-full bg-paper px-[22px] py-3.5 text-[15px] text-pine-900 hover:bg-white hover:text-pine-900"
              showIcon
            >
              {siteConfig.phoneDisplay}
            </PhoneLink>
            <p className="mt-5 max-w-[36ch] text-sm text-white/60">
              Răspund personal, la orice oră. Vă rog să sunați înainte de a
              porni spre cabinet.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-[30px] bg-pine-700">
              <Image
                src={images.emergency.src}
                alt={images.emergency.alt}
                width={images.emergency.width}
                height={images.emergency.height}
                className="aspect-[4/3] w-full object-cover object-[18%_top]"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 lg:mt-16">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-white/55">
            Situații tratate
          </p>
          <ol className="mt-5 grid sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-2">
            {emergencySituations.map((item, index) => (
              <li
                key={item}
                className="flex items-baseline gap-4 border-t border-white/14 py-4 text-[15px]"
              >
                <span className="w-7 shrink-0 text-[12px] font-medium tracking-[0.12em] text-clay">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-white/90">{item}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 border-t border-white/12 pt-12 lg:mt-20 lg:pt-14">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-white/55">
            Cum procedăm
          </p>
          <ol className="mt-8 grid gap-10 md:grid-cols-3 md:gap-8">
            {emergencySteps.map((step, index) => (
              <li key={step.title}>
                <p className="text-[12px] font-medium tracking-[0.12em] text-clay">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 font-display text-[24px] leading-[1.2] text-white lg:text-[26px]">
                  {step.title}
                </p>
                <p className="mt-3 max-w-[34ch] text-[15px] text-white/70">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
