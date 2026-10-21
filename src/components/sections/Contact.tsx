import { Clock, MapPin, Phone } from "lucide-react";
import { PhoneLink } from "@/components/PhoneLink";
import { siteConfig } from "@/lib/site";

export function Contact() {
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.mapsQuery)}`;

  return (
    <section id="contact" className="scroll-mt-[88px]">
      <div className="page-grid section-pad">
        <p className="eyebrow">Contact</p>
        <h2 className="mt-4 text-[32px] leading-[1.1] lg:text-[44px]">
          Sunați înainte.
          <br />
          Eu răspund.
        </h2>
        <p className="mt-5 max-w-[46ch] text-ink-soft">
          Pentru informații sau urgențe veterinare, sunați direct. Disponibil
          24/7, în Iași.
        </p>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <dl className="border-t border-hairline">
              <div className="border-b border-hairline py-6">
                <dt className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-soft">
                  <Phone className="h-3.5 w-3.5" aria-hidden />
                  Telefon
                </dt>
                <dd className="mt-2">
                  <PhoneLink
                    location="contact_section"
                    className="text-[22px] text-ink hover:text-pine-700"
                  />
                  <p className="mt-1 text-sm text-ink-soft">
                    Urgențe non-stop, inclusiv weekend
                  </p>
                </dd>
              </div>

              <div className="border-b border-hairline py-6">
                <dt className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-soft">
                  <MapPin className="h-3.5 w-3.5" aria-hidden />
                  Adresă
                </dt>
                <dd className="mt-2 text-ink">
                  <p>Vasile Lupu 106B</p>
                  <p className="text-sm text-ink-soft">
                    Tătărași, {siteConfig.address.locality}
                  </p>
                </dd>
              </div>

              <div className="border-b border-hairline py-6">
                <dt className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-soft">
                  <Clock className="h-3.5 w-3.5" aria-hidden />
                  Program
                </dt>
                <dd className="mt-2 text-ink">
                  <p>Non-stop, 24/7</p>
                  <p className="text-sm text-ink-soft">
                    doar cu programare telefonică
                  </p>
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <PhoneLink
                location="contact_cta"
                className="btn-emergency rounded-full hover:text-white"
                showIcon
              >
                Sună acum
              </PhoneLink>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost rounded-full"
              >
                <MapPin className="h-4 w-4" aria-hidden />
                Deschide în Google Maps
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[16px] border border-hairline lg:col-span-7">
            <iframe
              title="Locație cabinet Dr. Claudiu Moloman, Iași"
              src={siteConfig.mapsEmbedUrl}
              className="h-[360px] w-full min-h-[320px] lg:h-full lg:min-h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
