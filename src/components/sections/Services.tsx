import {
  HeartHandshake,
  Microscope,
  ShieldCheck,
  Stethoscope,
  Syringe,
} from "lucide-react";
import { services } from "@/lib/site";

const icons = [Stethoscope, Syringe, ShieldCheck, Microscope, HeartHandshake];

export function Services() {
  return (
    <section id="servicii" className="scroll-mt-24 bg-gradient-to-b from-[#f5fafb] to-white py-16 md:py-24">
      <div className="page-grid">
        <div className="mx-auto max-w-[660px] text-center">
          <p className="eyebrow">Servicii</p>
          <h2 className="mt-2 text-[clamp(29px,3vw,43px)] leading-tight">
            Servicii oferite
          </h2>
          <p className="mt-3 text-muted">
            O gamă completă de servicii pentru sănătatea și bunăstarea
            companionului tău.
          </p>
        </div>

        <ul className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index] ?? Stethoscope;
            return (
              <li
                key={service.title}
                className="rounded-2xl border border-[#eaf0f2] bg-white p-6 shadow-[0_9px_32px_rgba(7,53,87,0.05)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(9,54,82,0.09)]"
              >
                <span className="grid h-[58px] w-[58px] place-items-center rounded-full bg-[#e3f8f7] text-teal">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-4 text-[17px] leading-snug">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
