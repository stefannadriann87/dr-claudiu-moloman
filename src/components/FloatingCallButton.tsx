"use client";

import { MotionTap } from "@/components/motion/Reveal";
import { PhoneLink } from "@/components/PhoneLink";
import { siteConfig } from "@/lib/site";
import { motion, useReducedMotion } from "framer-motion";

export function FloatingCallButton() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="fixed bottom-5 right-4 z-40 md:hidden"
      initial={reduceMotion ? false : { opacity: 0, scale: 0.85, y: 12 }}
      animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <MotionTap>
        <PhoneLink
          location="floating_mobile"
          className="btn-emergency flex h-14 w-14 items-center justify-center rounded-full text-white ring-4 ring-[#f7f3eb] hover:text-white"
          showIcon
          aria-label={`Sună urgențe veterinare ${siteConfig.phoneDisplay}`}
        />
      </MotionTap>
    </motion.div>
  );
}
