import { PhoneLink } from "@/components/PhoneLink";
import { siteConfig } from "@/lib/site";

export function FloatingCallButton() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-40 md:hidden">
      <PhoneLink
        location="floating_mobile"
        className="btn-primary w-full shadow-[0_10px_35px_rgba(8,54,87,0.33)] hover:text-white"
        showIcon
        aria-label={`Sună acum: ${siteConfig.phoneDisplay}`}
      >
        Sună acum: {siteConfig.phoneDisplay}
      </PhoneLink>
    </div>
  );
}
