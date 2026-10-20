declare global {
  interface Window {
    gtag?: (
      command: "consent" | "config" | "event" | "js",
      targetOrAction: string | Date,
      params?: Record<string, unknown>,
    ) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

export type ConsentState = {
  analytics: boolean;
  marketing: boolean;
};

const CONSENT_STORAGE_KEY = "dr-moloman-consent-v1";

export function readStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ConsentState;
  } catch {
    return null;
  }
}

export function storeConsent(consent: ConsentState): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
}

export function applyConsentToGtag(consent: ConsentState): void {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("consent", "update", {
    analytics_storage: consent.analytics ? "granted" : "denied",
    ad_storage: consent.marketing ? "granted" : "denied",
    ad_user_data: consent.marketing ? "granted" : "denied",
    ad_personalization: consent.marketing ? "granted" : "denied",
  });
}

/** Diagnostic only — not a confirmed lead or Google Ads conversion. */
export function trackClickToCall(location: string): void {
  if (typeof window === "undefined" || !window.gtag) return;
  const stored = readStoredConsent();
  if (!stored?.analytics) return;

  window.gtag("event", "click_to_call", {
    event_category: "engagement",
    event_label: location,
    non_interaction: false,
  });
}
