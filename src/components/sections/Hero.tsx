import Image from "next/image";
import { LayoutGrid, PawPrint, ShieldCheck, Siren } from "lucide-react";
import { PhoneLink } from "@/components/PhoneLink";
import { images, siteConfig } from "@/lib/site";

const features = [
  {
    title: "Urgențe 24/7",
    text: "Disponibil non-stop în Iași pentru situațiile care nu pot aștepta.",
    icon: Siren,
    tone: "bg-[#fff0f0] text-[#d4534b]",
  },
  {
    title: "12+ ani experiență",
    text: "Peste 12 ani de experiență în medicină veterinară.",
    icon: ShieldCheck,
    tone: "bg-[#e3f8f7] text-teal",
  },
  {
    title: "Îngrijire personalizată",
    text: "Fiecare pacient beneficiază de atenție, empatie și un plan de tratament adaptat.",
    icon: PawPrint,
    tone: "bg-[#e6f5fd] text-[#2f7eb5]",
  },
] as const;

export function Hero() {
  return (
    <div>
      <section className="hero-banner" id="acasa">
        <div className="hero-photo">
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            priority
            quality={92}
            className="hero-photo-desktop"
            sizes="100vw"
          />
          <Image
            src={images.heroMobile.src}
            alt={images.heroMobile.alt}
            fill
            priority
            quality={92}
            className="hero-photo-mobile"
            sizes="100vw"
          />
        </div>
        <div className="page-grid hero-inner">
          <div className="max-w-[610px] py-12 md:py-16">
            <p className="eyebrow">
              Bine ați venit la clinica veterinară Dr. Moloman
            </p>
            <h1 className="mt-4 text-[clamp(40px,5.3vw,72px)] leading-[1.09]">
              Grijă pentru
              <br />
              <span className="text-teal">fiecare viață.</span>
            </h1>
            <p className="mt-5 max-w-[520px] text-[17px] leading-relaxed text-[#53667d] md:text-[20px]">
              Urgențe veterinare{" "}
              <span className="font-extrabold text-[#d4534b]">non-stop</span>{" "}
              în Iași.
              <br />
              Dr. Claudiu Moloman, peste {siteConfig.experienceYears} ani de
              experiență.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PhoneLink
                location="hero_primary"
                className="btn-primary hover:text-white"
                showIcon
              >
                Sună acum: {siteConfig.phoneDisplay}
              </PhoneLink>
              <a href="#servicii" className="btn-outline">
                <LayoutGrid className="h-[19px] w-[19px]" aria-hidden />
                Vezi serviciile
              </a>
            </div>
            <p className="mt-6 inline-flex flex-wrap items-center gap-x-2.5 gap-y-1 rounded-full bg-[#e3f0f4] px-4 py-2.5 text-[13px] font-semibold text-[#20445d]">
              <span
                className="h-2.5 w-2.5 rounded-full bg-[#29b956] shadow-[0_0_0_4px_rgba(41,185,86,0.12)]"
                aria-hidden
              />
              Disponibil 24/7
              <span aria-hidden>•</span>
              Doar cu programare telefonică
            </p>
          </div>
        </div>
      </section>

      <div className="page-grid relative z-10 mt-5 grid gap-3 md:-mt-8 md:grid-cols-3 md:gap-5">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <article
              key={feature.title}
              className="flex items-start gap-4 rounded-[15px] border border-[#edf2f4] bg-white p-5 shadow-[0_16px_44px_rgba(9,54,82,0.09)] md:p-6"
            >
              <span
                className={`grid h-[58px] w-[58px] shrink-0 place-items-center rounded-full ${feature.tone}`}
              >
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <h3 className="text-[16px] leading-snug">{feature.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">
                  {feature.text}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
