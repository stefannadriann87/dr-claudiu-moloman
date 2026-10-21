import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "sage" | "cream";
};

export function LogoMark({ className }: LogoProps) {
  return (
    <Image
      src="/logo-mark.png"
      alt="Dr. Moloman"
      width={363}
      height={363}
      className={cn("h-10 w-10 shrink-0", className)}
    />
  );
}

export function Logo({ className, variant = "sage" }: LogoProps) {
  const onDark = variant === "cream";

  return (
    <span
      className={cn(
        "inline-flex min-w-0 items-center",
        onDark && "rounded-lg bg-white px-2.5 py-1.5",
        className,
      )}
    >
      <Image
        src="/logo.png"
        alt="Dr. Moloman — Clinică Veterinară"
        width={944}
        height={319}
        className={cn(
          "h-[60px] w-auto max-w-[min(230px,68vw)] sm:h-[70px] sm:max-w-[240px]",
          onDark && "h-12 max-w-[210px] sm:h-14",
        )}
        priority
      />
    </span>
  );
}
