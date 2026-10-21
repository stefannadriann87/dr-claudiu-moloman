"use client";

import { useEffect, useState } from "react";
import {
  applyConsentToGtag,
  readStoredConsent,
  storeConsent,
} from "@/lib/analytics/events";

const HAS_ANALYTICS =
  Boolean(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) ||
  Boolean(process.env.NEXT_PUBLIC_GTM_ID);

export function ConsentBanner() {
  const [visible, setVisible] = useState(
    () => HAS_ANALYTICS && readStoredConsent() === null,
  );

  useEffect(() => {
    if (!HAS_ANALYTICS) return;
    const stored = readStoredConsent();
    if (stored) applyConsentToGtag(stored);
  }, []);

  if (!HAS_ANALYTICS || !visible) return null;

  function save(analytics: boolean, marketing: boolean) {
    const consent = { analytics, marketing };
    storeConsent(consent);
    applyConsentToGtag(consent);
    setVisible(false);
  }

  return (
    <div
      role="dialog"
      aria-labelledby="consent-title"
      className="fixed inset-x-4 bottom-20 z-[100] mx-auto max-w-xl rounded-[10px] border border-hairline bg-paper p-5 md:bottom-4 md:inset-x-auto md:right-6"
    >
      <p id="consent-title" className="text-sm font-medium text-ink">
        Confidențialitate și cookie-uri
      </p>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        Folosim cookie-uri pentru analiză trafic (GA4) și, opțional, măsurare
        campanii. Poți accepta doar analiza sau respinge tot. Apelurile telefonice
        nu sunt înregistrate ca lead confirmat.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => save(true, true)}
          className="btn-primary"
        >
          Accept toate
        </button>
        <button
          type="button"
          onClick={() => save(true, false)}
          className="btn-ghost"
        >
          Doar analiză
        </button>
        <button
          type="button"
          onClick={() => save(false, false)}
          className="px-4 py-2 text-sm font-medium text-ink-soft"
        >
          Respinge
        </button>
      </div>
    </div>
  );
}
