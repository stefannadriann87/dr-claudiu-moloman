"use client";

import { trackClickToCall } from "@/lib/analytics/events";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type PhoneLinkProps = {
  location: string;
  className?: string;
  children?: React.ReactNode;
  showIcon?: boolean;
  "aria-label"?: string;
};

export function PhoneLink({
  location,
  className,
  children,
  showIcon = false,
  "aria-label": ariaLabel,
}: PhoneLinkProps) {
  return (
    <a
      href={siteConfig.phoneHref}
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center gap-2 font-bold text-cyan-700 transition hover:text-orange-600",
        className,
      )}
      onClick={() => trackClickToCall(location)}
    >
      {showIcon ? (
        <svg
          aria-hidden
          className="h-5 w-5 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ) : null}
      {children ?? siteConfig.phoneDisplay}
    </a>
  );
}
