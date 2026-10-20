"use client";

import { useEffect, useState } from "react";
import { PhoneLink } from "@/components/PhoneLink";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#despre", label: "Despre" },
  { href: "#urgente", label: "Urgențe" },
  { href: "#servicii", label: "Servicii" },
  { href: "#galerie", label: "Galerie" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-slate-200 bg-white shadow-lg shadow-slate-900/10"
          : "border-white/10 bg-transparent backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#" className="group flex min-w-0 flex-col">
          <span
            className={cn(
              "truncate text-sm font-bold tracking-tight md:text-base",
              scrolled ? "text-slate-900" : "text-white",
            )}
          >
            Dr. Claudiu Moloman
          </span>
          <span
            className={cn(
              "truncate text-xs font-semibold",
              scrolled ? "text-cyan-700" : "text-cyan-300",
            )}
          >
            Urgențe veterinare 24/7, Iași
          </span>
        </a>

        <nav
          aria-label="Navigare principală"
          className="hidden items-center gap-6 md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-bold transition",
                scrolled
                  ? "text-slate-700 hover:text-cyan-700"
                  : "text-white/90 hover:text-white",
              )}
            >
              {link.label}
            </a>
          ))}
          <PhoneLink
            location="header_cta"
            className="btn-call rounded-full px-4 py-2 text-sm font-bold text-white hover:text-white"
            showIcon
          />
        </nav>

        <button
          type="button"
          className={cn(
            "inline-flex rounded-lg p-2 md:hidden",
            scrolled ? "text-slate-900" : "text-white",
          )}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Închide meniul" : "Deschide meniul"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t bg-white md:hidden",
          open ? "block" : "hidden",
          scrolled ? "border-slate-200" : "border-white/10",
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-3" aria-label="Mobil">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-bold text-slate-800 hover:bg-cyan-50"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <PhoneLink
            location="mobile_menu"
            className="btn-call mt-2 justify-center rounded-full px-4 py-3 font-bold text-white hover:text-white"
            showIcon
          >
            {siteConfig.phoneDisplay}
          </PhoneLink>
        </nav>
      </div>
    </header>
  );
}
