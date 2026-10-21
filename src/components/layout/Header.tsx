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
      <div className="page-grid flex h-[82px] items-center justify-between gap-6">
        <a href="#acasa" className="min-w-0" aria-label="Dr. Moloman - Acasă">
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
          className="inline-flex h-10 w-10 items-center justify-center text-navy xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-sheet"
          aria-label={open ? "Închide meniul" : "Deschide meniul"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-sheet"
        aria-hidden={!open}
        inert={!open ? true : undefined}
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[min(360px,88vw)] flex-col bg-white px-6 py-6 xl:hidden",
          open
            ? "visible translate-x-0 pointer-events-auto"
            : "invisible pointer-events-none translate-x-full",
        )}
        style={{
          boxShadow: open ? "0 24px 60px rgba(14,46,39,0.18)" : "none",
          transition: "transform 200ms cubic-bezier(0.2, 0.7, 0.3, 1)",
        }}
      >
        <div className="mb-8 flex items-center justify-between">
          <p className="text-sm font-medium text-ink">Meniu</p>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline"
            aria-label="Închide meniul"
            onClick={() => setOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col gap-1" aria-label="Mobil">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-3 text-2xl font-bold text-navy"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <PhoneLink
          location="mobile_menu"
          className="btn-primary mt-8 hover:text-white"
          showIcon
        >
          {siteConfig.phoneDisplay}
        </PhoneLink>
      </div>

      {open ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-navy/20 xl:hidden"
          aria-label="Închide meniul"
          onClick={() => setOpen(false)}
        />
      ) : null}
    </header>
  );
}
