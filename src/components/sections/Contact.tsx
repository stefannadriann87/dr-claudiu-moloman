import { PhoneLink } from "@/components/PhoneLink";
import { siteConfig } from "@/lib/site";
import { MapPin, Phone } from "lucide-react";

export function Contact() {
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.mapsQuery)}`;

  return (
    <section id="contact" className="scroll-mt-24 bg-[#2f5d50] py-16 text-[#f7f3eb] md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:px-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c8ddd4]">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-medium md:text-4xl">
            Urgențe veterinare Iași
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-[#d7e4de]">
            Pentru informații sau urgențe veterinare, sunați direct. Vă rugăm să
            sunați înainte. Disponibil 24/7 pentru urgențe veterinare.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="rounded-2xl bg-white/8 p-5 ring-1 ring-white/15">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#c8ddd4]">
                <Phone className="h-4 w-4" aria-hidden />
                Telefon
              </p>
              <PhoneLink
                location="contact_section"
                className="mt-2 text-2xl text-white hover:text-[#efe8da]"
              />
            </li>
            <li className="rounded-2xl bg-white/8 p-5 ring-1 ring-white/15">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#c8ddd4]">
                <MapPin className="h-4 w-4" aria-hidden />
                Adresă
              </p>
              <address className="mt-2 not-italic text-lg text-white">
                {siteConfig.address.street}, {siteConfig.address.locality},{" "}
                {siteConfig.address.country}
              </address>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-medium text-[#c8ddd4] underline-offset-4 hover:text-white hover:underline"
              >
                Deschide în Google Maps
              </a>
            </li>
          </ul>
        </div>

        <div className="overflow-hidden rounded-[1.6rem] bg-[#efe8da] p-1.5">
          <iframe
            title="Locație cabinet Dr. Claudiu Moloman, Iași"
            src={siteConfig.mapsEmbedUrl}
            className="h-80 w-full min-h-[280px] rounded-[1.25rem] md:h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
