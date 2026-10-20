import { Logo } from "@/components/Logo";
import { PhoneLink } from "@/components/PhoneLink";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[#23473d] bg-[#23473d] text-[#d7e4de]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <Logo variant="cream" />
          <p className="mt-3 text-sm">
            {siteConfig.name}. Servicii veterinare 24/7
          </p>
        </div>
        <PhoneLink
          location="footer"
          className="text-lg font-semibold text-white hover:text-[#efe8da]"
        />
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-[#9bb5ab]">
        © {siteConfig.copyrightYear} {siteConfig.author}. Toate drepturile rezervate
      </div>
    </footer>
  );
}
