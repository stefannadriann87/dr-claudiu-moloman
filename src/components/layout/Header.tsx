"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { PhoneLink } from "@/components/PhoneLink";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#acasa", label: "Acasă" },
  { href: "#despre", label: "Despre" },
  { href: "#servicii", label: "Servicii" },
  { href: "#cabinet", label: "Cabinet" },
  { href: "#urgente", label: "Urgențe" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-[0_2px_16px_rgba(7,53,87,0.06)] backdrop-blur-md">
      <div className="page-grid relative z-20 flex h-[72px] items-center justify-between gap-4 md:h-[82px]">
        <a
          href="#acasa"
          className="min-w-0"
          aria-label="Dr. Moloman - Acasă"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </a>

        <nav
          aria-label="Navigare principală"
          className="hidden items-center gap-7 xl:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-bold text-navy transition hover:text-teal"
            >
              {link.label}
            </a>
          ))}
          <PhoneLink
            location="header_cta"
            className="btn-primary px-[18px] py-3 text-[13px] hover:text-white"
            showIcon
          />
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-navy xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Închide meniul" : "Deschide meniul"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className={cn(
          "absolute inset-x-0 top-full z-10 border-t border-line bg-white shadow-[0_18px_40px_rgba(7,53,87,0.12)] xl:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav
          aria-label="Mobil"
          className="page-grid flex flex-col py-3 pb-5"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border-b border-line py-3.5 text-[17px] font-bold text-navy last:border-b-0"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <PhoneLink
            location="mobile_menu"
            className="btn-primary mt-4 hover:text-white"
            showIcon
          >
            {siteConfig.phoneDisplay}
          </PhoneLink>
        </nav>
      </div>

      {open ? (
        <button
          type="button"
          className="fixed inset-0 z-0 bg-navy/25 xl:hidden"
          aria-label="Închide meniul"
          onClick={() => setOpen(false)}
        />
      ) : null}
    </header>
  );
}
