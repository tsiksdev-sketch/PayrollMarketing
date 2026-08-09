import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Mail, Upload } from "lucide-react";
import { IMAGES, CONTACT } from "@/data/catalog";
import { OrbitLines } from "../orbit";

const SUPPORT = [
  "Laboratory chemicals & reagents",
  "Glassware, plasticware & consumables",
  "Analytical & measurement instruments",
  "Microbiology, filtration & sample preparation",
  "Sector-specific technical solutions",
  "CAPEX, project sourcing & lifecycle support",
];

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden surface-dark">
      <img
        src={IMAGES.lab}
        alt="Analyst working at a laboratory bench in Harare"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-linear-to-r from-graphite via-graphite/90 to-graphite/60" />
      <OrbitLines />

      <div className="container-pm relative grid items-center gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <span className="kicker">Established 1996 · Harare, Zimbabwe</span>
          <h1 className="mt-6 max-w-3xl text-paper">Scientific, laboratory &amp; industrial solutions</h1>
          <p className="mt-6 max-w-xl text-[18px] text-paper/70">
            From routine laboratory essentials to specialist instruments, international sourcing and complete CAPEX
            requirements.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/special-sourcing" className="btn-pm btn-gold">
              Upload an RFQ <Upload size={16} />
            </Link>
            <a href={`mailto:${CONTACT.email}`} className="btn-pm btn-ghost-pm text-paper">
              Email the team <Mail size={16} />
            </a>
            <Link href="/products" className="btn-pm btn-ghost-pm text-paper">
              Explore products <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-10 max-w-xl border-t border-paper/15 pt-4 text-[13px] text-gold/85">
            Specification-led procurement. Availability is confirmed at quotation stage.
          </div>
        </motion.div>

        <motion.aside
          className="border-l-4 border-gold bg-ivory p-8 text-graphite shadow-2xl"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <h2 className="text-[24px] leading-none">What we support</h2>
          <ul className="mt-6 divide-y divide-graphite/10">
            {SUPPORT.map((item, i) => (
              <motion.li
                key={item}
                className="flex items-start gap-3 py-3 text-[15px] transition-colors hover:text-burgundy"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
              >
                <Check size={15} className="mt-1 shrink-0 text-success" />
                {item}
              </motion.li>
            ))}
          </ul>
          <div className="mt-7 border-t border-graphite/15 pt-6">
            <h3 className="text-[17px]">Not listed does not mean not available.</h3>
            <p className="mt-2 text-[14px] text-graphite/70">
              Send the product reference, specification, label or complete schedule.
            </p>
            <Link
              href="/special-sourcing"
              className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold tracking-[0.12em] text-burgundy uppercase hover:text-gold"
            >
              Start special sourcing <ArrowRight size={14} />
            </Link>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
