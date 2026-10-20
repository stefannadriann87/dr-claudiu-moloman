"use client";

import { MotionTap } from "@/components/motion/Reveal";
import { PhoneLink } from "@/components/PhoneLink";
import { siteConfig } from "@/lib/site";
import { motion, useReducedMotion } from "framer-motion";

export function FloatingCallButton() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="fixed bottom-6 right-4 z-40 md:hidden"
      initial={reduceMotion ? false : { opacity: 0, scale: 0.8, y: 16 }}
      animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <MotionTap>
        <PhoneLink
          location="floating_mobile"
          className="btn-call flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl ring-4 ring-white hover:text-white"
          showIcon
          aria-label={`Sună urgențe veterinare ${siteConfig.phoneDisplay}`}
        />
      </MotionTap>
    </motion.div>
  );
}
