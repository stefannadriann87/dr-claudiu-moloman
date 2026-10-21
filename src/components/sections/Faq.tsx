"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { faqItems } from "@/lib/site";
import { ChevronDown } from "lucide-react";

export function Faq() {
  return (
    <section id="intrebari" className="scroll-mt-[88px]">
      <div className="page-grid section-pad grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <p className="eyebrow">Întrebări</p>
          <h2 className="mt-4 text-[32px] leading-[1.1] lg:text-[44px]">
            Răspunsuri
            <br />
            înainte de a suna.
          </h2>
          <p className="mt-5 max-w-[36ch] text-ink-soft">
            Dacă nu găsiți răspunsul aici, sunați direct. Este mai rapid decât
            orice formular.
          </p>
        </div>

        <Accordion.Root
          type="single"
          collapsible
          className="border-t border-hairline lg:col-span-7"
        >
          {faqItems.map((item) => (
            <Accordion.Item
              key={item.question}
              value={item.question}
              className="border-b border-hairline"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 py-5 text-left">
                  <span className="text-[18px] leading-[1.4] lg:text-[20px]">
                    {item.question}
                  </span>
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-ink-soft transition-transform duration-200 group-data-[state=open]:rotate-180"
                    aria-hidden
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="faq-content overflow-hidden">
                <p className="max-w-2xl pb-5 text-ink-soft">{item.answer}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
