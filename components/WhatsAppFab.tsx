"use client"

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { CONTACT } from "@/data/catalog";

export function WhatsAppFab() {
  return (
    <motion.a
      href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hello Payroll Marketing, I have a laboratory requirement:")}`}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp the requirement"
      className="fixed right-5 bottom-5 z-40 flex items-center gap-2 border-l-4 border-gold bg-graphite px-4 py-3 text-[12px] font-bold tracking-widest text-paper uppercase shadow-2xl"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.5 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      <MessageCircle size={16} className="text-gold" />
      <span className="hidden sm:inline">WhatsApp us</span>
    </motion.a>
  );
}
