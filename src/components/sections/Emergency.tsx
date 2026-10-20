import { PhoneLink } from "@/components/PhoneLink";
import {
  emergencySituations,
  serviceAdvantages,
  siteConfig,
} from "@/lib/site";
import { Check } from "lucide-react";

export function Emergency() {
  return (
    <section id="urgente" className="scroll-mt-24 bg-[#efe8da] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="eyebrow">Urgențe veterinare</p>
          <h2 className="mt-3 text-3xl font-medium text-[#1c211d] md:text-4xl">
            Când fiecare minut contează
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5c655e]">
            Oferim{" "}
            <strong className="font-semibold text-[#1c211d]">
              servicii complete de urgență veterinară 24/7
            </strong>{" "}
            pentru animalele de companie din Iași și împrejurimi. Suntem pregătiți
            să intervenim rapid în situații critice.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.6rem] bg-white p-7 ring-1 ring-[#e4ddd0]">
            <h3 className="font-display text-xl font-medium text-[#1c211d]">
              Situații de urgență tratate
            </h3>
            <ul className="mt-5 space-y-3">
              {emergencySituations.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-[#3f463f]">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b4532a]"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1.6rem] bg-white p-7 ring-1 ring-[#e4ddd0]">
            <h3 className="font-display text-xl font-medium text-[#1c211d]">
              Avantajele serviciului
            </h3>
            <ul className="mt-5 space-y-3">
              {serviceAdvantages.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-[#3f463f]">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#2f5d50]"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-[1.6rem] bg-[#2f5d50] px-7 py-8 text-white md:flex-row md:items-center">
          <p className="max-w-xl text-lg font-medium leading-snug">
            În caz de urgență veterinară în Iași, sunați imediat
          </p>
          <PhoneLink
            location="emergency_banner"
            className="btn-emergency rounded-full px-6 py-3 text-lg font-semibold text-white hover:text-white"
            showIcon
          >
            {siteConfig.phoneDisplay}
          </PhoneLink>
        </div>
      </div>
    </section>
  );
}
