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

const iconStyles = [
  "bg-cyan-500 text-white",
  "bg-emerald-500 text-white",
  "bg-violet-600 text-white",
  "bg-sky-600 text-white",
  "bg-orange-500 text-white",
] as const;

export function Services() {
  return (
    <section id="servicii" className="section-dark scroll-mt-24 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wide text-emerald-400">
            Servicii
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Servicii oferite
          </h2>
          <p className="mt-3 text-lg text-cyan-100">
            Consultații, prevenție și diagnostic, plus intervenții de urgență
            când fiecare minut contează.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index] ?? Stethoscope;
            const style = iconStyles[index] ?? iconStyles[0];
            return (
              <li
                key={service.title}
                className="group rounded-2xl border border-white/15 bg-slate-950/50 p-5 shadow-xl transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-slate-900/80"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl shadow-lg ${style}`}
                >
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
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
