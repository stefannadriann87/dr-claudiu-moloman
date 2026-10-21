import { Logo } from "@/components/Logo";
import { PhoneLink } from "@/components/PhoneLink";
import { siteConfig } from "@/lib/site";

const footerNav = [
  { href: "#servicii", label: "Servicii" },
  { href: "#despre", label: "Despre" },
  { href: "#urgente", label: "Urgențe" },
  { href: "#cabinet", label: "Cabinet" },
  { href: "#intrebari", label: "Întrebări" },
  { href: "#contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="bg-navy-deep pb-24 text-white md:pb-5">
      <div className="page-grid flex flex-col gap-8 py-11 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo variant="cream" />
          <p className="mt-4 max-w-[36ch] text-sm text-[#c3d6df]">
            Îngrijire veterinară cu grijă pentru fiecare viață.
          </p>
          <PhoneLink
            location="footer"
            className="mt-3 text-sm font-semibold text-white hover:text-white/80"
          />
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          {footerNav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/90 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/12">
        <div className="page-grid py-5 text-xs text-[#b3cbd5]">
          © {siteConfig.copyrightYear} Dr. Moloman. Toate drepturile rezervate.
        </div>
      </div>
    </footer>
  );
}
