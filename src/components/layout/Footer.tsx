import { PhoneLink } from "@/components/PhoneLink";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = siteConfig.copyrightYear;

  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <p className="text-lg font-bold">{siteConfig.author}</p>
          <p className="mt-1 text-sm font-medium text-cyan-300">
            {siteConfig.name}. Servicii veterinare 24/7
          </p>
        </div>
        <PhoneLink
          location="footer"
          className="btn-call rounded-full px-5 py-2.5 text-lg font-bold text-white hover:text-white"
        />
      </div>
      <div className="border-t border-white/10 bg-black/40 py-4 text-center text-xs font-medium text-slate-400">
        © {year} {siteConfig.author}. Toate drepturile rezervate
      </div>
    </footer>
  );
}
