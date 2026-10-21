"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { PhoneLink } from "@/components/PhoneLink";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#despre", label: "Despre" },
  { href: "#urgente", label: "Urgențe" },
  { href: "#servicii", label: "Servicii" },
  { href: "#cabinet", label: "Cabinet" },
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
    <header className="sticky top-0 z-50 h-[72px] border-b border-hairline bg-paper">
      <div className="page-grid flex h-full items-center justify-between gap-6">
        <Link href="/" className="min-w-0">
          <Logo />
        </Link>

        <nav
          aria-label="Navigare principală"
          className="hidden items-center gap-8 lg:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-ink-soft transition hover:text-pine-700"
            >
              {link.label}
            </a>
          ))}
          <PhoneLink
            location="header_cta"
            className="btn-primary hover:text-white"
            showIcon
          />
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-ink lg:hidden"
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
          "fixed inset-y-0 right-0 z-50 flex w-[min(360px,88vw)] flex-col bg-paper px-6 py-6 lg:hidden",
          open
            ? "translate-x-0 pointer-events-auto"
            : "pointer-events-none translate-x-full",
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
              className="py-3 text-2xl font-medium text-ink"
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
          className="fixed inset-0 z-40 bg-pine-900/20 lg:hidden"
          aria-label="Închide meniul"
          onClick={() => setOpen(false)}
        />
      ) : null}
    </header>
  );
}
