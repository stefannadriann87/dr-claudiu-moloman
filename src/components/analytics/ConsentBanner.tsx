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
      className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-xl rounded-2xl border border-teal-900/10 bg-white p-5 shadow-2xl shadow-teal-950/10 md:inset-x-auto md:right-6"
    >
      <p id="consent-title" className="text-sm font-semibold text-slate-900">
        Confidențialitate și cookie-uri
      </p>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        Folosim cookie-uri pentru analiză trafic (GA4) și, opțional, măsurare
        campanii. Poți accepta doar analiza sau respinge tot. Apelurile telefonice
        nu sunt înregistrate ca lead confirmat.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => save(true, true)}
          className="rounded-full bg-teal-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-teal-800"
        >
          Accept toate
        </button>
        <button
          type="button"
          onClick={() => save(true, false)}
          className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-50"
        >
          Doar analiză
        </button>
        <button
          type="button"
          onClick={() => save(false, false)}
          className="rounded-full px-4 py-2 text-sm font-medium text-slate-500 transition hover:text-slate-800"
        >
          Respinge
        </button>
      </div>
    </div>
  );
}
