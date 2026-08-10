'use client';

import { useScroll, motion } from "framer-motion";




export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-80 h-0.75 origin-left bg-gold"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
