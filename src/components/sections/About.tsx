import Image from "next/image";
import { images, siteConfig } from "@/lib/site";

const checks = [
  `Experiență de peste ${siteConfig.experienceYears} ani`,
  "Atenție pentru fiecare pacient",
  "Contact direct pentru programări",
] as const;

export function About() {
  return (
    <section id="despre" className="scroll-mt-24 py-16 md:py-24">
      <div className="page-grid grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="overflow-hidden rounded-[22px] bg-[#d6ecee]">
          <Image
            src={images.about.src}
            alt={images.about.alt}
            width={images.about.width}
            height={images.about.height}
            className="aspect-[16/10] w-full object-cover object-[center_right]"
            quality={92}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div>
          <p className="eyebrow">Despre noi</p>
          <h2 className="mt-3 text-[clamp(30px,3.4vw,45px)] leading-[1.15]">
            Dr. Claudiu Moloman
          </h2>
          <p className="mt-5 leading-relaxed text-muted">
            Peste {siteConfig.experienceYears} ani de experiență în medicina
            veterinară, cu o pasiune reală pentru sănătatea și bunăstarea
            animalelor. Cred într-o medicină modernă, bazată pe empatie,
            profesionalism și o comunicare deschisă cu fiecare proprietar.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Cabinetul este în Tătărași, pe strada Vasile Lupu 106B, și este
            disponibil non-stop, doar pe bază de programare telefonică.
          </p>
          <ul className="mt-6 space-y-3">
            {checks.map((item) => (
              <li key={item} className="font-bold">
                <span className="mr-3 text-teal" aria-hidden>
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn-outline mt-7">
            Ia legătura cu noi →
          </a>
        </div>
      </div>
    </section>
  );
}
