import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "sage" | "cream";
};

export function LogoMark({ className, variant = "sage" }: LogoProps) {
  const fill = variant === "cream" ? "#f7f3eb" : "#2f5d50";
  const ink = variant === "cream" ? "#2f5d50" : "#f7f3eb";
  const accent = "#c56a3c";

  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("h-12 w-12 shrink-0", className)}
      role="img"
      aria-label="Logo Dr. Claudiu Moloman, cabinet veterinar"
    >
      <circle cx="32" cy="32" r="32" fill={fill} />
      <ellipse cx="17" cy="21" rx="6.2" ry="7.6" fill={ink} transform="rotate(-24 17 21)" />
      <ellipse cx="26" cy="14.4" rx="5.8" ry="7.2" fill={ink} transform="rotate(-7 26 14.4)" />
      <ellipse cx="38" cy="14.4" rx="5.8" ry="7.2" fill={ink} transform="rotate(7 38 14.4)" />
      <ellipse cx="47" cy="21" rx="6.2" ry="7.6" fill={ink} transform="rotate(24 47 21)" />
      <path
        fill={ink}
        d="M32 25c-8.6 0-15.4 6.2-15.4 12.6 0 6.2 6.4 11.4 15.4 11.4s15.4-5.2 15.4-11.4C47.4 31.2 40.6 25 32 25Z"
      />
      <rect x="29.1" y="31.4" width="5.8" height="15.2" rx="1.4" fill={accent} />
      <rect x="24.4" y="36.1" width="15.2" height="5.8" rx="1.4" fill={accent} />
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
              variant === "cream" ? "text-white" : "text-[#1c211d]",
            )}
          >
            Dr. Claudiu Moloman
          </span>
          <span
            className={cn(
              "block truncate text-xs",
              variant === "cream" ? "text-[#c8ddd4]" : "text-[#5c655e]",
            )}
          >
            Cabinet veterinar, Iași
          </span>
        </span>
      ) : null}
    </span>
  );
}
