import Image from "next/image";
import { images } from "@/lib/site";

const CABINET_PHOTO = images.gallery[0];

export function Gallery() {
  return (
    <section id="galerie" className="scroll-mt-24 bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <div>
          <p className="eyebrow">Cabinet</p>
          <h2 className="mt-3 text-3xl font-medium text-[#1c211d] md:text-4xl">
            Cabinet veterinar Iași
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-[#5c655e]">
            Spațiu echipat pentru urgențe și îngrijire atentă a pacienților.
          </p>
        </div>
        <figure className="mx-auto w-full max-w-sm">
          <div className="overflow-hidden rounded-[2rem] bg-[#efe8da] p-2">
            <Image
              src={CABINET_PHOTO.src}
              alt={CABINET_PHOTO.alt}
              title={CABINET_PHOTO.title}
              width={576}
              height={1024}
              className="h-auto w-full rounded-[1.55rem] object-contain"
              sizes="(max-width: 768px) 90vw, 380px"
              loading="lazy"
            />
          </div>
          <figcaption className="sr-only">{CABINET_PHOTO.title}</figcaption>
        </figure>
      </div>
    </section>
  );
}
