"use client";

import { useState } from "react";
import { Logo } from "@/components/Logo";
import { PhoneLink } from "@/components/PhoneLink";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#despre", label: "Despre" },
  { href: "#urgente", label: "Urgențe" },
  { href: "#servicii", label: "Servicii" },
  { href: "#galerie", label: "Cabinet" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e4ddd0] bg-[#f7f3eb]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 md:px-6">
        <a href="/" className="min-w-0">
          <Logo />
        </a>

        <nav
          aria-label="Navigare principală"
          className="hidden items-center gap-7 md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#3f463f] transition hover:text-[#2f5d50]"
            >
              {link.label}
            </a>
          ))}
          <PhoneLink
            location="header_cta"
            className="btn-call rounded-full px-4 py-2 text-sm font-semibold hover:text-white"
            showIcon
          />
        </nav>

        <button
          type="button"
          className="inline-flex rounded-full p-2 text-[#1c211d] md:hidden"
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
        className={cn("border-t border-[#e4ddd0] bg-[#f7f3eb] md:hidden", open ? "block" : "hidden")}
      >
        <nav className="flex flex-col gap-1 px-4 py-3" aria-label="Mobil">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-[#1c211d] hover:bg-[#efe8da]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <PhoneLink
            location="mobile_menu"
            className="btn-call mt-2 justify-center rounded-full px-4 py-3 font-semibold text-white hover:text-white"
            showIcon
          >
            {siteConfig.phoneDisplay}
          </PhoneLink>
        </nav>
      </div>
    </header>
  );
}
