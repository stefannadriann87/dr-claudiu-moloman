import { PhoneLink } from "@/components/PhoneLink";
import { siteConfig } from "@/lib/site";

export function FloatingCallButton() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-paper p-3 md:hidden">
      <PhoneLink
        location="floating_mobile"
        className="btn-emergency w-full hover:text-white"
        showIcon
        aria-label={`Sună urgențe veterinare ${siteConfig.phoneDisplay}`}
      >
        Sună {siteConfig.phoneDisplay}
      </PhoneLink>
    </div>
  );
}
