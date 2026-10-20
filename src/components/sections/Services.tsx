import { services } from "@/lib/site";
import {
  FlaskConical,
  MessageCircleHeart,
  Microscope,
  Pill,
  Stethoscope,
} from "lucide-react";

const icons = [
  Stethoscope,
  Pill,
  Microscope,
  FlaskConical,
  MessageCircleHeart,
] as const;

export function Services() {
  return (
    <section id="servicii" className="scroll-mt-24 bg-[#f7f3eb] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="eyebrow">Servicii</p>
          <h2 className="mt-3 text-3xl font-medium text-[#1c211d] md:text-4xl">
            Îngrijire completă, de la prevenție la urgență
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5c655e]">
            Consultații, prevenție și diagnostic, plus intervenții de urgență
            când fiecare minut contează.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index] ?? Stethoscope;
            return (
              <li
                key={service.title}
                className="rounded-[1.5rem] bg-white p-6 ring-1 ring-[#e4ddd0] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#2f5d50]/10"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e4efe9] text-[#2f5d50]">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-medium text-[#1c211d]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5c655e]">
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
