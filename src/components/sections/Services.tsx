import { services } from "@/lib/site";
import { ChevronRight } from "lucide-react";

export function Services() {
  return (
    <section id="servicii" className="scroll-mt-[88px]">
      <div className="page-grid section-pad">
        <p className="eyebrow">Servicii</p>
        <h2 className="mt-4 max-w-xl text-[32px] leading-[1.1] lg:text-[44px]">
          Îngrijire completă, de la prevenție la urgență
        </h2>

        <ul className="mt-12 border-t border-hairline">
          {services.map((service, index) => (
            <li key={service.title} className="border-b border-hairline">
              <a
                href="#contact"
                className="group grid grid-cols-[48px_1fr_auto] items-center gap-4 py-6 transition-[background-color,padding] duration-200 [transition-timing-function:cubic-bezier(0.2,0.7,0.3,1)] hover:bg-paper-deep hover:pl-1 md:grid-cols-[64px_1fr_1fr_auto]"
              >
                <span className="text-[12px] font-medium tracking-[0.14em] text-clay">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[22px] leading-[1.3]">{service.title}</h3>
                <p className="col-span-3 mt-1 text-sm text-ink-soft md:col-span-1 md:mt-0">
                  {service.description}
                </p>
                <ChevronRight
                  className="hidden h-4 w-4 text-ink-soft md:block"
                  aria-hidden
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
