import { Clock, MapPin, Phone } from "lucide-react";
import { PhoneLink } from "@/components/PhoneLink";
import { siteConfig } from "@/lib/site";

export function Contact() {
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.mapsQuery)}`;

  return (
    <section id="contact" className="scroll-mt-24 bg-gradient-to-b from-[#f5fafb] to-white py-16 md:py-24">
      <div className="page-grid grid items-stretch gap-8 lg:grid-cols-2 lg:gap-11">
        <div
          id="cabinet"
          className="scroll-mt-28 rounded-[22px] bg-[#f3f9fa] p-7 md:p-9"
        >
          <p className="eyebrow">Contact și cabinet</p>
          <h2 className="mt-3 text-[clamp(30px,3.4vw,42px)] leading-[1.15]">
            Hai să vorbim despre companionul tău.
          </h2>
          <p className="mt-4 text-muted">
            Contactează-ne telefonic înainte de vizită.
          </p>

          <div className="mt-7 space-y-6">
            <div>
              <p className="flex items-center gap-2 font-bold">
                <Phone className="h-4 w-4 text-teal" aria-hidden />
                Telefon
              </p>
              <PhoneLink
                location="contact_section"
                className="mt-1 text-lg text-muted hover:text-teal"
              />
            </div>
            <div>
              <p className="flex items-center gap-2 font-bold">
                <MapPin className="h-4 w-4 text-teal" aria-hidden />
                Locație
              </p>
              <p className="mt-1 text-muted">
                {siteConfig.address.street}, {siteConfig.address.locality},{" "}
                {siteConfig.address.country}
              </p>
            </div>
            <div>
              <p className="flex items-center gap-2 font-bold">
                <Clock className="h-4 w-4 text-teal" aria-hidden />
                Vizite
              </p>
              <p className="mt-1 text-muted">
                Non-stop, 24/7, doar după contact telefonic. Pentru urgențe,
                sună înainte.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <PhoneLink
              location="contact_cta"
              className="btn-primary hover:text-white"
              showIcon
            >
              Sună pentru informații
            </PhoneLink>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <MapPin className="h-4 w-4" aria-hidden />
              Deschide în Google Maps
            </a>
          </div>
        </div>

        <div className="min-h-[350px] overflow-hidden rounded-[22px] border border-line">
          <iframe
            title="Locație cabinet Dr. Claudiu Moloman, Iași"
            src={siteConfig.mapsEmbedUrl}
            className="h-full min-h-[350px] w-full lg:min-h-[480px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
