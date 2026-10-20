import { PhoneLink } from "@/components/PhoneLink";
import {
  emergencySituations,
  serviceAdvantages,
  siteConfig,
} from "@/lib/site";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export function Emergency() {
  return (
    <section
      id="urgente"
      className="scroll-mt-24 bg-slate-900 py-16 text-white md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-3xl">
          <p className="badge-live inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold uppercase tracking-wide">
            <AlertCircle className="h-4 w-4" aria-hidden />
            Urgențe veterinare
          </p>
          <h2 className="mt-5 text-3xl font-bold md:text-4xl">
            Urgențe Veterinare Non Stop în Iași
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-cyan-100">
            Oferim{" "}
            <strong className="font-bold text-white">
              servicii complete de urgență veterinară 24/7
            </strong>{" "}
            pentru animalele de companie din Iași și împrejurimi. Suntem pregătiți
            să intervenim rapid în situații critice, asigurând îngrijirea medicală
            de care animalul tău are nevoie în momentele dificile.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="card-solid-cyan rounded-2xl p-6 shadow-xl shadow-cyan-950/40">
            <h3 className="text-xl font-bold">Situații de urgență tratate</h3>
            <ul className="mt-4 space-y-2.5">
              {emergencySituations.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm font-medium leading-relaxed text-cyan-50"
                >
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-400"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-solid-emerald rounded-2xl p-6 shadow-xl shadow-emerald-950/40">
            <h3 className="text-xl font-bold">Avantajele serviciului nostru</h3>
            <ul className="mt-4 space-y-3">
              {serviceAdvantages.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm font-medium leading-relaxed text-emerald-50"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-lime-300"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="btn-call mt-10 rounded-2xl px-6 py-10 text-center md:px-10">
          <p className="text-xl font-bold">
            În caz de urgență veterinară în Iași, sunați imediat
          </p>
          <PhoneLink
            location="emergency_banner"
            className="mt-4 justify-center text-3xl font-bold text-white hover:text-white md:text-4xl"
            showIcon
          >
            {siteConfig.phoneDisplay}
          </PhoneLink>
        </div>
      </div>
    </section>
  );
}
