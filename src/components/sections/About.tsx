import Image from "next/image";
import { images, siteConfig } from "@/lib/site";

const facts = [
  { label: "Experiență", value: `Peste ${siteConfig.experienceYears} ani` },
  { label: "Program", value: "Non-stop, pe bază de telefon" },
  { label: "Pacienți", value: "Câini, pisici, animale mici" },
] as const;

export function About() {
  return (
    <section id="despre" className="scroll-mt-[88px]">
      <div className="page-grid section-pad grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="order-1 lg:order-2 lg:col-span-6">
          <p className="eyebrow">Despre medic</p>
          <h2 className="mt-4 text-[32px] leading-[1.1] lg:text-[44px]">
            Un medic care răspunde
            <br />
            la propriul telefon.
          </h2>
          <p className="mt-6 text-ink-soft">
            Sunt medic veterinar cu peste {siteConfig.experienceYears} ani de
            experiență în îngrijirea animalelor de companie. Cabinetul este
            disponibil non-stop, în Tătărași, pe strada Vasile Lupu 106B, doar
            pe bază de programare telefonică.
          </p>
          <p className="mt-4 text-ink-soft">
            Sunt singurul medic din cabinet, așa că fiecare vizită este a mea,
            de la primul telefon până la recomandările de tratament. În caz de
            urgență, mă deplasez la cabinet la orice oră, indiferent de zi.
          </p>

          <dl className="mt-10 border-t border-hairline">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="grid grid-cols-[1fr_auto] items-baseline gap-6 border-b border-hairline py-4"
              >
                <dt className="text-[12px] font-medium uppercase tracking-[0.14em] text-ink-soft">
                  {fact.label}
                </dt>
                <dd className="text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 font-display text-[26px] leading-tight text-pine-900">
            {siteConfig.author}
          </p>
          <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-soft">
            Medic veterinar · Iași
          </p>
        </div>

        <div className="order-2 lg:order-1 lg:col-span-6">
          <div className="overflow-hidden rounded-[16px] bg-pine-100">
            <Image
              src={images.about.src}
              alt={images.about.alt}
              width={images.about.width}
              height={images.about.height}
              className="aspect-[4/3] w-full object-cover object-[18%_center]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <p className="mt-3 text-sm text-ink-soft">
            Dr. Claudiu Moloman, în cabinetul din Tătărași.
          </p>
        </div>
      </div>
    </section>
  );
}
