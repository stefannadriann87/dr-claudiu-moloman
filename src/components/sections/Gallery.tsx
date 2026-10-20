import Image from "next/image";
import { images } from "@/lib/site";

const CABINET_PHOTO = images.gallery[0];
const CABINET_WIDTH = 576;
const CABINET_HEIGHT = 1024;

export function Gallery() {
  return (
    <section
      id="galerie"
      className="scroll-mt-24 relative overflow-hidden bg-gradient-to-br from-cyan-800 via-teal-800 to-emerald-900 py-16 text-white md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-orange-500/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-14 md:px-6">
        <div>
          <p className="inline-flex rounded-full bg-orange-500 px-4 py-1 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-orange-950/40">
            Galerie
          </p>
          <h2 className="mt-5 text-3xl font-bold md:text-4xl">
            Cabinet Veterinar Iași
          </h2>
          <p className="mt-4 text-lg font-medium leading-relaxed text-cyan-100">
            Spațiu echipat pentru urgențe și îngrijire atentă a pacienților.
          </p>
        </div>

        <figure className="mx-auto w-full max-w-sm md:max-w-md">
          <div className="rounded-3xl bg-gradient-to-br from-orange-400 to-cyan-400 p-1 shadow-2xl shadow-black/40">
            <div className="rounded-[1.35rem] bg-slate-950 p-2">
              <Image
                src={CABINET_PHOTO.src}
                alt={CABINET_PHOTO.alt}
                title={CABINET_PHOTO.title}
                width={CABINET_WIDTH}
                height={CABINET_HEIGHT}
                className="h-auto w-full rounded-xl object-contain"
                sizes="(max-width: 768px) 90vw, 420px"
                loading="lazy"
              />
            </div>
          </div>
          <figcaption className="sr-only">{CABINET_PHOTO.title}</figcaption>
        </figure>
      </div>
    </section>
  );
}
