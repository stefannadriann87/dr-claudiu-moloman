import { siteConfig } from "@/lib/site";
import { Heart, Phone } from "lucide-react";

export function About() {
  return (
    <section id="despre" className="section-light scroll-mt-24 py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-5 md:gap-12 md:px-6">
        <div className="md:col-span-2">
          <p className="text-sm font-bold uppercase tracking-wide text-cyan-700">
            Despre mine
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-4xl">
            Medic veterinar dedicat animalelor tale
          </h2>
          <div className="mt-6 flex items-start gap-3 rounded-2xl border-l-4 border-orange-500 bg-white p-5 shadow-lg shadow-slate-300/50">
            <Heart className="mt-0.5 h-6 w-6 shrink-0 text-rose-600" aria-hidden />
            <p className="text-sm font-medium leading-relaxed text-slate-800">
              Peste {siteConfig.experienceYears} ani de experiență în îngrijirea
              câinilor, pisicilor și altor companioni, cu empatie și rigurozitate
              medicală.
            </p>
          </div>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-slate-700 md:col-span-3">
          <p>
            Sunt medic veterinar cu peste {siteConfig.experienceYears} ani de
            experiență în îngrijirea animalelor de companie. Misiunea mea este să
            ofer fiecărui pacient, cățel, pisică sau alt companion necuvântător,
            cele mai bune îngrijiri medicale, într-un mediu cald și prietenos.
          </p>
          <p>
            Cabinetul este disponibil{" "}
            <strong className="text-emerald-800">non-stop</strong>, la adresa{" "}
            <strong className="text-cyan-900">
              {siteConfig.address.street}
            </strong>
            , doar pe bază de programare telefonică. Sunt singurul medic din
            cabinet, așadar vă rog să sunați înainte. În caz de urgențe, mă
            deplasez la cabinet la orice oră, indiferent de zi sau oră.
          </p>
          <p className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-700 to-emerald-700 px-5 py-4 text-sm font-bold text-white shadow-lg shadow-cyan-900/30">
            <Phone className="h-5 w-5 shrink-0" aria-hidden />
            Disponibil non-stop. Vă rugăm să sunați înainte de a veni la cabinet.
          </p>
        </div>
      </div>
    </section>
  );
}
