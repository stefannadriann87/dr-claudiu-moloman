import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "sage" | "cream";
};

function LogoGlyphs({ ink, accent }: { ink: string; accent: string }) {
  return (
    <>
      <rect x="29.1" y="10.4" width="5.8" height="16" rx="1.3" fill={accent} />
      <rect x="24" y="15.7" width="16" height="5.8" rx="1.3" fill={accent} />
      <path
        d="M27.2 35.8A9.2 10.4 0 1 0 27.2 53.2"
        fill="none"
        stroke={ink}
        strokeWidth="4.4"
        strokeLinecap="round"
      />
      <path
        d="M34.4 53.4V36L43.3 49.6L52.2 36V53.4"
        fill="none"
        stroke={ink}
        strokeWidth="4.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  );
}

export function LogoMark({ className, variant = "sage" }: LogoProps) {
  const fill = variant === "cream" ? "#F7F5EF" : "#0E2E27";
  const ink = variant === "cream" ? "#0E2E27" : "#F7F5EF";
  const accent = "#C2643E";
  const ring = variant === "cream" ? "rgba(14,46,39,0.18)" : "rgba(247,245,239,0.28)";

  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("h-12 w-12 shrink-0", className)}
      role="img"
      aria-label="Logo Dr. Claudiu Moloman, medic veterinar"
    >
      <circle cx="32" cy="32" r="32" fill={fill} />
      <circle
        cx="32"
        cy="32"
        r="28.6"
        fill="none"
        stroke={ring}
        strokeWidth="1.2"
      />
      <LogoGlyphs ink={ink} accent={accent} />
    </svg>
  );
}

export function Logo({
  className,
  variant = "sage",
  showWordmark = true,
}: LogoProps & { showWordmark?: boolean }) {
  return (
    <span className={cn("flex min-w-0 items-center gap-3", className)}>
      <LogoMark variant={variant} />
      {showWordmark ? (
        <span className="min-w-0">
          <span
            className={cn(
              "block truncate font-display text-[1.05rem] font-medium leading-tight",
              variant === "cream" ? "text-white" : "text-ink",
            )}
          >
            Dr. Claudiu Moloman
          </span>
          <span
            className={cn(
              "block truncate text-xs",
              variant === "cream" ? "text-white/70" : "text-ink-soft",
            )}
          >
            Cabinet veterinar · Iași
          </span>
        </span>
      ) : null}
    </span>
  );
}
