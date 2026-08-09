"use client";

import Link from "next/link";
import { ArrowRight, Upload, Search } from "lucide-react";
import { SectionHead } from "../PageHero";
import { HomeHero } from "./hero";
import { CtaBand } from "../shared/footer/Foot";
import { ProductCard } from "../ProductCard";
import { GsapStagger, Parallax } from "../Motion";
import {
  IMAGES,
  INDUSTRIES,
  PRODUCT_CATEGORIES,
  PRODUCTS,
  RESOURCES,
  BRANDS,
} from "@/data/catalog";

/* ... your constants ... */

const ACCENT_TEXT: Record<string, string> = {
  gold: "text-gold",
  teal: "text-teal",
  burgundy: "text-burgundy",
  blue: "text-labblue",
};

const STATS = [
  { value: "1996", label: "Established in Zimbabwe" },
  { value: "16", label: "Representative product families" },
  { value: "RFQ", label: "Specification-led quotation" },
  { value: "CAPEX", label: "Project procurement capability" },
  { value: "LOCAL", label: "Harare-based accountability" },
];

const DIFFERENCE = [
  { t: "Specification-led supply", d: "The application, method and operating conditions define the product not a fixed catalogue line." },
  { t: "Local accountability. International product access.", d: "Harare-based support connected to established manufacturer and distribution routes." },
  { t: "Routine and specialist requirements", d: "Daily consumables and one-off specialist instruments handled through the same controlled process." },
  { t: "Connected instrument and consumable ecosystems", d: "Every instrument is linked to the accessories, standards and consumables that keep it running." },
  { t: "Support that continues beyond delivery", d: "Spares, replacement parts, documentation and recurring supply after commissioning." },
  { t: "Ready for RFQs, supplier registration and CAPEX", d: "Structured documentation for procurement teams, tenders and multi-line project schedules." },
];

const EXPERIENCE = [
  "Moisture-testing equipment for a multi-site beverage-production requirement.",
  "Laboratory and analytical equipment for established institutions.",
  "Instrumentation supplied into Zambia, Malawi and Mozambique.",
];

function Index() {
  return (
    <>
      <HomeHero />

      <section className="border-b border-border bg-ivory">
        <GsapStagger className="container-pm grid grid-cols-2 gap-6 py-10 md:grid-cols-5">
          {STATS.map((s) => (
            <div key={s.label} data-gsap>
              <div className="font-display text-[30px] leading-none text-burgundy uppercase">
                {s.value}
              </div>
              <div className="meta-label mt-2 block">{s.label}</div>
            </div>
          ))}
        </GsapStagger>
      </section>

      {/* Product families */}
      <section className="section-pm">
        <div className="container-pm">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHead
              kicker="Product directory"
              title="Find the requirement by product family"
              intro="Start with the family, application or a known reference. The online portfolio is representative rather than exhaustive."
            />
            <Link href="/products" className="btn-pm btn-dark self-start">
              <Search size={16} /> Search the portfolio
            </Link>
          </div>

          <GsapStagger className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCT_CATEGORIES.slice(0, 8).map((c, i) => (
              <Link
                key={c.slug}
                href={`/family/${c.slug}`}
                data-gsap
                className="group flex flex-col bg-card p-6 transition-colors hover:bg-ivory"
              >
                <div className="flex items-start justify-between">
                  <span className={`meta-label ${ACCENT_TEXT[c.accent]}`}>
                    {c.kicker}
                  </span>
                  <span className="font-display text-[13px] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 text-[19px] leading-tight">{c.name}</h3>
                <p className="mt-3 line-clamp-3 flex-1 text-[15px] text-muted-foreground">
                  {c.desc}
                </p>
                <span className="mt-5 flex items-center gap-1.5 text-[12px] font-bold tracking-[0.12em] text-burgundy uppercase">
                  Explore category <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </GsapStagger>

          <div className="mt-8">
            <Link href="/products" className="btn-pm btn-dark">
              View all product families <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-pm surface-dark">
        <div className="container-pm">
          <SectionHead
            kicker="Industries"
            title="Solutions organised around your operating environment"
          />
          <p className="mt-4 max-w-2xl text-paper/65">
            Product selection, documentation and support differ across mines, laboratories, plants, utilities and
            teaching environments.
          </p>

          <GsapStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.slice(0, 6).map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                data-gsap
                className="img-zoom group relative block aspect-16/11 lg:aspect-4/5"
              >
                <img
                  src={IMAGES[ind.image]}
                  alt={ind.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-graphite via-graphite/70 to-graphite/10" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="meta-label text-gold">
                    {ind.tags.slice(0, 2).join(" · ")}
                  </span>
                  <h3 className="mt-2 text-[21px] leading-tight text-paper">
                    {ind.name}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-[14px] text-paper/70">
                    {ind.desc}
                  </p>
                  <span className="mt-4 flex items-center gap-1.5 text-[12px] font-bold tracking-[0.12em] text-gold uppercase">
                    Explore sector <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </GsapStagger>
        </div>
      </section>

      {/* ...everything else remains the same... */}

       {/* CAPEX */}
  <section className="section-pm bg-ivory">
    <div className="container-pm grid gap-12 lg:grid-cols-2 lg:items-center">
      <div>
        <SectionHead
          kicker="CAPEX & projects"
          title="CAPEX configured around your requirement — not limited by a fixed catalogue"
          intro="Define the laboratory, confirm the specification, review the configuration and coordinate delivery, installation and recurring supply."
        />
        <ol className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {["Requirement", "Specification", "Sourcing", "Delivery & lifecycle"].map((step, i) => (
            <li key={step} className="border-t-2 border-gold pt-3">
              <span className="font-display text-[15px] text-gold">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-1 text-[14px] font-semibold">{step}</p>
            </li>
          ))}
        </ol>
        <Link href="/capex" className="btn-pm btn-gold mt-8">
          Explore CAPEX pathways <ArrowRight size={16} />
        </Link>
      </div>
      <Parallax distance={36} className="img-zoom aspect-video overflow-hidden">
        <img src={IMAGES.capex} alt="Laboratory installation" loading="lazy" className="h-[116%] w-full object-cover" />
      </Parallax>
    </div>
  </section>

  {/* Representative products */}
  <section className="section-pm">
    <div className="container-pm">
      <SectionHead
        kicker="Representative products"
        title="Start with a known item — then refine the specification"
        intro="Representative products demonstrate common routes. Additional models, brands, sizes and project requirements can be sourced against a confirmed specification."
      />
      <GsapStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.slice(0, 6).map((p) => (
          <div key={p.id} data-gsap className="flex">
            <ProductCard product={p} />
          </div>
        ))}
      </GsapStagger>
    </div>
  </section>

  {/* Brands */}
  <section className="section-pm bg-ivory">
    <div className="container-pm">
      <SectionHead
        kicker="Supply network"
        title="Global product access. Local supply accountability."
        intro="Brand names indicate sourcing routes only. They do not imply authorised, exclusive or official distributor status."
      />
      <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {BRANDS.slice(0, 8).map((b) => (
          <div key={b.name} className="bg-card p-5">
            <div className="font-display text-[15px] uppercase">{b.name}</div>
            <p className="mt-2 text-[13px] text-muted-foreground">{b.scope}</p>
          </div>
        ))}
      </div>
      <Link href="/brands" className="btn-pm btn-dark mt-8">
        View the supply network <ArrowRight size={16} />
      </Link>
    </div>
  </section>

  {/* Not listed */}
  <section className="bg-burgundy py-20 text-paper">
    <div className="container-pm grid gap-10 lg:grid-cols-2 lg:items-center">
      <div>
        <span className="kicker text-paper before:bg-paper">Special sourcing</span>
        <h2 className="mt-4 text-paper">Not listed does not mean not available.</h2>
        <p className="mt-4 max-w-lg text-paper/80">
          Send the known reference, existing label, specification or complete RFQ and the team will identify an
          appropriate sourcing route.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/special-sourcing" className="btn-pm bg-paper text-graphite hover:bg-ivory">
            Start special sourcing <ArrowRight size={16} />
          </Link>
          <Link href="/special-sourcing" className="btn-pm btn-ghost-pm text-paper">
            Upload an existing RFQ <Upload size={16} />
          </Link>
        </div>
      </div>
      <div className="border border-paper/25 bg-paper/10 p-8 text-center">
        <Upload size={26} className="mx-auto" />
        <p className="mt-3 font-display text-[19px] uppercase">Drop a product label, datasheet or RFQ</p>
        <p className="mt-2 text-[14px] text-paper/70">PDF, XLSX, CSV, DOCX, JPG or PNG</p>
        <Link href="/special-sourcing" className="btn-pm bg-graphite mt-5 text-paper">
          Choose file
        </Link>
      </div>
    </div>
  </section>

  {/* Why Payroll Marketing */}
  <section className="section-pm surface-dark">
    <div className="container-pm">
      <SectionHead
        kicker="Why Payroll Marketing"
        title="The Payroll Marketing difference"
        intro="Procurement discipline protects laboratory continuity. We review the application, clarify the specification, identify an appropriate sourcing route and connect the initial purchase to the products required to keep it operating."
      />
      <GsapStagger className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {DIFFERENCE.map((d, i) => (
          <div key={d.t} data-gsap className="group bg-graphite p-7 transition-colors hover:bg-white/5">
            <span className="font-display text-[13px] text-gold">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 text-[19px] leading-tight text-paper">{d.t}</h3>
            <p className="mt-3 text-[14px] text-paper/65">{d.d}</p>
          </div>
        ))}
      </GsapStagger>
    </div>
  </section>

  {/* Selected experience */}
  <section className="section-pm">
    <div className="container-pm">
      <SectionHead
        kicker="Selected experience"
        title="Requirements delivered across sectors and borders"
        intro="Payroll Marketing has supported laboratory and technical procurement across education, food and beverage, government laboratory and regional requirements. Public project references are used as factual experience only and do not imply current endorsement."
      />
      <GsapStagger className="mt-10 grid gap-6 md:grid-cols-3">
        {EXPERIENCE.map((e) => (
          <article key={e} data-gsap className="border-l-2 border-burgundy bg-ivory p-6 text-[15px]">
            {e}
          </article>
        ))}
      </GsapStagger>
      <Link href="/contact" className="btn-pm btn-dark mt-8">
        Discuss a similar requirement <ArrowRight size={16} />
      </Link>
    </div>
  </section>

  {/* Resources */}
  <section className="section-pm bg-ivory">
    <div className="container-pm">
      <SectionHead
        kicker="Resources"
        title="Practical resources for better RFQs and procurement decisions"
        intro="Controlled documents supporting specification, planning and technical review."
      />
      <GsapStagger className="mt-10 grid gap-6 md:grid-cols-3">
        {RESOURCES.slice(0, 3).map((r, i) => (
          <article key={r.title} data-gsap className="border-t-2 border-gold bg-card p-6">
            <div className="flex items-center justify-between">
              <span className="font-display text-[15px] text-burgundy">{String(i + 1).padStart(2, "0")}</span>
              <span className="tag-pm text-teal">{r.type}</span>
            </div>
            <h3 className="mt-4 text-[18px] leading-tight">{r.title}</h3>
            <p className="mt-3 text-[14px] text-muted-foreground">{r.meta}</p>
            <Link
              href="/resources"
              className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-burgundy hover:text-gold"
            >
              View resource <ArrowRight size={15} />
            </Link>
          </article>
        ))}
      </GsapStagger>
    </div>
  </section>

  <CtaBand />

</>

      
    
  );
}

export default Index;