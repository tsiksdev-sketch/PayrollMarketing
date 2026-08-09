"use client";


import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { IMAGES, type ImageKey } from "@/data/catalog";
import { Parallax } from "./Motion";
import { OrbitLines } from "./orbit";

export function PageHero({
  kicker,
  title,
  intro,
  image = "lab",
  actions,
  eager = false,
}: {
  kicker: string;
  title: string;
  intro?: string;
  image?: ImageKey;
  actions?: ReactNode;
  eager?: boolean;
}) {
  return (
    <section className="relative overflow-hidden surface-dark">
      <OrbitLines />
      <div className="container-pm relative grid gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <span className="kicker">{kicker}</span>
          <h1 className="mt-6 text-paper">{title}</h1>
          {intro && <p className="mt-6 max-w-xl text-[18px] text-paper/70">{intro}</p>}
          {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
        </motion.div>

        <div className="relative">
          <Parallax distance={40} className="img-zoom aspect-5/4 w-full overflow-hidden">
            <img
              src={IMAGES[image]}
              alt=""
              loading={eager ? "eager" : "lazy"}
              className="h-[118%] w-full object-cover"
            />
          </Parallax>
          <motion.div
            className="absolute bottom-6 -left-4 z-10 max-w-[16rem] border-l-4 border-gold bg-ivory p-5 text-graphite shadow-lg sm:-left-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <span className="meta-label">Local accountability</span>
            <p className="mt-1 font-display text-[19px] leading-[1.05] uppercase">International product access</p>
            <p className="mt-2 text-[13px] text-graphite/70">
              Products selected against application, method and operational need.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


export function SectionHead({
  kicker,
  title,
  intro,
  className = "",
}: {
  kicker: string;
  title: string;
  intro?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <span className="kicker">{kicker}</span>
      <h2 className="mt-4">{title}</h2>
      {intro && <p className="mt-4 text-muted-foreground">{intro}</p>}
    </div>
  );
}
