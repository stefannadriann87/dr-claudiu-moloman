import Link from "next/link";
import { Logo } from "@/components/Logo";
import { PhoneLink } from "@/components/PhoneLink";
import { siteConfig } from "@/lib/site";

const footerNav = [
  { href: "#despre", label: "Despre" },
  { href: "#urgente", label: "Urgențe" },
  { href: "#servicii", label: "Servicii" },
  { href: "#cabinet", label: "Cabinet" },
  { href: "#intrebari", label: "Întrebări" },
  { href: "#contact", label: "Contact" },
] as const;

export function Footer() {
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.mapsQuery)}`;

  return (
    <footer className="bg-pine-900 text-white">
      <div className="page-grid grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        <div>
          <Link href="/" className="inline-block">
            <Logo variant="cream" />
          </Link>
          <p className="mt-6 max-w-[34ch] text-[15px] leading-relaxed text-white/70">
            Urgențe veterinare non stop în Iași. Servicii veterinare 24/7 pe
            bază de programare telefonică.
          </p>
        </div>

        <div>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-white/55">
            Navigare
          </p>
          <nav aria-label="Footer" className="mt-4 flex flex-col gap-2.5">
            {footerNav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/85 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-white/55">
            Contact
          </p>
          <PhoneLink
            location="footer"
            className="mt-4 text-[22px] text-white hover:text-white/80"
          />
          <p className="mt-3 text-white/85">
            {siteConfig.address.street}
            <br />
            {siteConfig.address.locality}, {siteConfig.address.country}
          </p>
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-white/85 underline-offset-4 transition hover:text-white hover:underline"
          >
            Vezi pe hartă
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="page-grid flex flex-col gap-2 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {siteConfig.copyrightYear} {siteConfig.author}. Toate drepturile
            rezervate.
          </p>
          <p>Urgențe veterinare non stop · Iași</p>
        </div>
      </div>
    </footer>
  );
}
