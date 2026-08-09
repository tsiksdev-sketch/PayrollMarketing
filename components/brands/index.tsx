"use client";


import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Search, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { PageHero, SectionHead } from "../PageHero";
import { CtaBand } from "../shared/footer/Foot";
import { BRANDS } from "@/data/catalog";

/* export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Brands & Supply Network | Payroll Marketing" },
      {
        name: "description",
        content:
          "International product access with local supply accountability. Brand routes indicate sourcing pathways, not authorised distributor status.",
      },
      { property: "og:title", content: "Brands & Supply Network | Payroll Marketing" },
      {
        property: "og:description",
        content: "Sourcing routes across laboratory chemicals, instruments, consumables and analytical equipment.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BrandsPage,
});*/

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function BrandsPage() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return BRANDS;
    return BRANDS.filter((b) => `${b.name} ${b.scope} ${b.sectors}`.toLowerCase().includes(t));
  }, [q]);

  return (
    <>
      <PageHero
        kicker="Brands & supply network"
        title="Global product access. Local supply accountability."
        intro="Payroll Marketing sources routine and specialist requirements through manufacturer and distribution channels appropriate to the product line, territory, availability and commercial arrangement."
        image="industrial"
        actions={
          <>
            <Link href="/request-a-quote" className="btn-pm btn-gold">
              Request a quote <ArrowRight size={16} />
            </Link>
            <Link href="/products" className="btn-pm btn-ghost-pm text-paper">
              Explore products <ArrowRight size={16} />
            </Link>
          </>
        }
      />

      <section className="section-pm">
        <div className="container-pm">
          <div className="flex gap-4 border-l-4 border-gold bg-ivory p-6">
            <ShieldCheck size={22} className="mt-0.5 shrink-0 text-burgundy" />
            <div>
              <h3 className="text-[19px]">Brand information is evidence-controlled</h3>
              <p className="mt-2 max-w-4xl text-[15px] text-muted-foreground">
                A brand name indicates a potential product or sourcing route only where the relevant product family is
                verified. It does not by itself mean authorised, exclusive or official distributor status.
              </p>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHead
              kicker="Selected brand routes"
              title="Search the controlled supply network"
              intro="Text-first presentation protects accuracy until logo use and public relationship wording are approved."
            />
            <label className="relative block w-full max-w-sm">
              <Search size={16} className="absolute top-1/2 left-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search brand or product family"
                aria-label="Search brand or product family"
                className="h-12 w-full border border-input bg-card pr-4 pl-11 text-[15px] outline-none focus:border-gold"
              />
            </label>
          </div>

          <div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-2">
            {filtered.map((b, i) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: (i % 6) * 0.05 }}
              >
                <Link
                  href="/request-a-quote"
                  className="group flex h-full items-start gap-5 bg-card p-6 transition-colors hover:bg-ivory"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-graphite font-display text-[14px] text-gold">
                    {initials(b.name)}
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-[19px] uppercase">{b.name}</span>
                    <span className="mt-2 block text-[14px] text-muted-foreground">{b.scope}</span>
                    <span className="mt-2 block text-[12px] text-teal">{b.sectors}</span>
                  </span>
                  <ArrowRight
                    size={16}
                    className="mt-1 text-burgundy transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>
            ))}
            {filtered.length === 0 && (
              <div className="bg-card p-10 md:col-span-2">
                <h3 className="text-[19px]">No brand route matched “{q}”</h3>
                <p className="mt-2 text-[15px] text-muted-foreground">
                  Not listed does not mean not available — send the manufacturer, model and catalogue number.
                </p>
                <Link href="/special-sourcing" className="btn-pm btn-dark mt-5">
                  Start special sourcing <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-6 bg-graphite p-9 text-paper md:flex-row md:items-center">
            <div>
              <h3 className="text-[24px] text-paper">Looking for a preferred brand?</h3>
              <p className="mt-2 max-w-xl text-[15px] text-paper/70">
                Include the manufacturer, model and catalogue number. State whether approved equivalents are acceptable.
              </p>
            </div>
            <Link href="/request-a-quote" className="btn-pm btn-gold">
              Submit brand requirement <ArrowRight size={16} />
            </Link>
          </div>

          <p className="mt-6 text-[14px] text-muted-foreground">
            Client references do not imply endorsement. Availability and final configuration are confirmed at quotation
            stage.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
