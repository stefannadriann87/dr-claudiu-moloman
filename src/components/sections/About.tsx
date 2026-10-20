import { siteConfig } from "@/lib/site";

export function About() {
  return (
    <section id="despre" className="scroll-mt-24 bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-12 md:px-6">
        <div className="md:col-span-4">
          <p className="eyebrow">Despre mine</p>
          <h2 className="mt-3 text-3xl font-medium leading-tight text-[#1c211d] md:text-4xl">
            Medic veterinar dedicat animalelor tale
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-[#5c655e] md:col-span-8 md:pt-8">
          <p>
            Sunt medic veterinar cu peste {siteConfig.experienceYears} ani de
            experiență în îngrijirea animalelor de companie. Misiunea mea este să
            ofer fiecărui pacient, cățel, pisică sau alt companion necuvântător,
            cele mai bune îngrijiri medicale, într-un mediu cald și prietenos.
          </p>
          <p>
            Cabinetul este disponibil <strong className="text-[#1c211d]">non-stop</strong>,
            la adresa{" "}
            <strong className="text-[#1c211d]">{siteConfig.address.street}</strong>,
            doar pe bază de programare telefonică. Sunt singurul medic din cabinet,
            așadar vă rog să sunați înainte. În caz de urgențe, mă deplasez la
            cabinet la orice oră, indiferent de zi sau oră.
          </p>
          <p className="rounded-2xl bg-[#e4efe9] px-5 py-4 text-sm font-medium text-[#23473d]">
            Disponibil non-stop. Vă rugăm să sunați înainte de a veni la cabinet.
          </p>
        </div>
      </div>
    </section>
  );
}
