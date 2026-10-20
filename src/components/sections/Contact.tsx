import { PhoneLink } from "@/components/PhoneLink";
import { siteConfig } from "@/lib/site";
import { MapPin, Phone } from "lucide-react";

export function Contact() {
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.mapsQuery)}`;

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-gradient-to-br from-slate-950 via-teal-950 to-cyan-950 py-16 text-white md:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-6">
        <div>
          <p className="inline-flex rounded-full bg-emerald-600 px-3 py-1 text-sm font-bold uppercase tracking-wide">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Urgențe Veterinare Iași
          </h2>
          <p className="mt-4 text-lg text-cyan-100">
            Pentru informații sau urgențe veterinare, sunați direct. Vă rugăm să
            sunați înainte.{" "}
            <strong className="text-orange-300">Disponibil 24/7</strong> pentru
            urgențe veterinare.
          </p>

          <ul className="mt-8 space-y-5">
            <li className="flex items-start gap-3 rounded-xl bg-white/10 p-4 ring-1 ring-white/20">
              <Phone className="mt-1 h-6 w-6 shrink-0 text-orange-400" aria-hidden />
              <div>
                <p className="text-sm font-bold text-cyan-200">Telefon</p>
                <PhoneLink
                  location="contact_section"
                  className="text-2xl text-white hover:text-orange-200"
                />
              </div>
            </li>
            <li className="flex items-start gap-3 rounded-xl bg-white/10 p-4 ring-1 ring-white/20">
              <MapPin className="mt-1 h-6 w-6 shrink-0 text-emerald-400" aria-hidden />
              <div>
                <p className="text-sm font-bold text-cyan-200">Adresă</p>
                <address className="mt-1 not-italic text-lg font-semibold text-white">
                  {siteConfig.address.street}, {siteConfig.address.locality},{" "}
                  {siteConfig.address.country}
                </address>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-bold text-cyan-300 underline-offset-2 hover:text-white hover:underline"
                >
                  Deschide în Google Maps
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className="overflow-hidden rounded-2xl ring-4 ring-orange-500/60 shadow-2xl shadow-black/50">
          <iframe
            title="Locație cabinet Dr. Claudiu Moloman, Iași"
            src={siteConfig.mapsEmbedUrl}
            className="h-72 w-full min-h-[280px] md:h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
