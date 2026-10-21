import { PhoneLink } from "@/components/PhoneLink";
import {
  emergencyCopy,
  emergencySituations,
  serviceAdvantages,
} from "@/lib/site";

export function Emergency() {
  return (
    <section id="urgente" className="scroll-mt-24 py-8 md:py-12">
      <div className="page-grid">
        <div className="rounded-[25px] bg-gradient-to-br from-[#073557] to-[#0a6073] px-6 py-10 text-white md:px-14 md:py-14">
          <p className="text-xs font-extrabold tracking-[0.17em] text-[#82e2dc] uppercase">
            Suntem aici când contează
          </p>
          <h2 className="mt-3 max-w-[16ch] text-[clamp(30px,3.4vw,45px)] leading-[1.15] text-white">
            {emergencyCopy.title}
          </h2>
          <p className="mt-5 max-w-[68ch] leading-relaxed text-[#d2e7ed]">
            {emergencyCopy.intro}
          </p>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-lg text-white">Situații de urgență tratate</h3>
              <ul className="mt-4 space-y-3">
                {emergencySituations.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px]">
                    <span className="mt-0.5 text-[#82e2dc]" aria-hidden>
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg text-white">
                Avantajele serviciului nostru
              </h3>
              <ul className="mt-4 space-y-3">
                {serviceAdvantages.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px]">
                    <span className="mt-0.5 text-[#82e2dc]" aria-hidden>
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-white/15 pt-8 sm:flex-row sm:items-center">
            <p className="max-w-[46ch] text-[15px] leading-relaxed text-[#d2e7ed]">
              {emergencyCopy.cta}
            </p>
            <PhoneLink
              location="emergency_banner"
              className="btn-light shrink-0 px-[22px] py-3.5 text-[15px]"
              showIcon
            >
              Sună acum
            </PhoneLink>
          </div>
        </div>
      </div>
    </section>
  );
}
