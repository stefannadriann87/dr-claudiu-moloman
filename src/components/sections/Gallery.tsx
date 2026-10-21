import Image from "next/image";
import { images } from "@/lib/site";

export function Gallery() {
  return (
    <section id="cabinet" className="scroll-mt-[88px] bg-paper-deep">
      <div className="page-grid section-pad">
        <p className="eyebrow">Cabinet</p>
        <h2 className="mt-4 max-w-lg text-[32px] leading-[1.1] lg:text-[44px]">
          Spațiu echipat pentru urgențe
        </h2>
        <p className="mt-4 max-w-lg text-ink-soft">
          Lumină naturală, masă de consultație și instrumentar pregătit pentru
          îngrijirea atentă a pacienților.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <figure className="overflow-hidden rounded-[12px] bg-pine-100 lg:col-span-8">
            <Image
              src={images.clinic.src}
              alt={images.clinic.alt}
              width={images.clinic.width}
              height={images.clinic.height}
              className="aspect-[3/2] w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
          </figure>
          <figure className="overflow-hidden rounded-[12px] bg-pine-100 lg:col-span-4">
            <Image
              src={images.clinicDetail.src}
              alt={images.clinicDetail.alt}
              width={images.clinicDetail.width}
              height={images.clinicDetail.height}
              className="aspect-square w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
