"use client";


import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero, SectionHead } from "../PageHero";
import { CtaBand } from "../shared/footer/Foot";
import { GsapStagger, Reveal } from "../Motion";

/*export const Route = createFileRoute("/laboratory-setup")({
  head: () => ({
    meta: [
      { title: "Laboratory Setup Pathway | Payroll Marketing" },
      {
        name: "description",
        content:
          "Build a laboratory around the work it must perform: define, plan, specify, source, mobilise and sustain with a controlled equipment and supply schedule.",
      },
      { property: "og:title", content: "Laboratory Setup Pathway | Payroll Marketing" },
      {
        property: "og:description",
        content: "A six-stage laboratory setup pathway from operating requirement to recurring supply.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LabSetupPage,
});*/

const STAGES = [
  { title: "Define", text: "Methods, samples, throughput, users and quality requirements" },
  { title: "Plan", text: "Rooms, utilities, sample flow, storage and safety" },
  { title: "Specify", text: "Equipment, accessories, consumables and documentation" },
  { title: "Source", text: "Multi-brand review, quotation and controlled alternatives" },
  { title: "Mobilise", text: "Delivery, installation pathways and user familiarisation" },
  { title: "Sustain", text: "Spares, standards, recurring supply and replacement planning" },
];

export default function LabSetupPage() {
  return (
    <>
      <PageHero
        eager
        kicker="CAPEX pathway"
        title="Build a laboratory around the work it must perform"
        intro="A laboratory setup starts with methods, people, sample movement, utilities, safety, documentation and continuity — not with a disconnected equipment list."
        image="capex"
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
        <div className="container-pm grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <SectionHead
              kicker="Laboratory setup"
              title="Translate the operating requirement into a controlled equipment and supply schedule"
              intro="Payroll Marketing can support the development and sourcing of a coherent requirement covering equipment, glassware, reagents, consumables, safety, storage and lifecycle products."
            />

            <GsapStagger className="mt-10 divide-y divide-border border-t border-border">
              {STAGES.map((s, i) => (
                <div key={s.title} data-gsap className="flex gap-6 py-6">
                  <span className="font-display text-[22px] text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-[19px]">{s.title}</h3>
                    <p className="mt-1.5 text-[15px] text-muted-foreground">{s.text}</p>
                  </div>
                </div>
              ))}
            </GsapStagger>
          </div>

          <Reveal className="surface-dark h-fit p-8">
            <h3 className="text-paper">Start a laboratory setup brief</h3>
            <form
              className="mt-6 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div>
                <label htmlFor="labtype" className="meta-label block text-paper/60">
                  Laboratory type
                </label>
                <select id="labtype" className="mt-1.5 h-12 w-full border border-white/15 bg-white/5 px-3 text-[15px] text-paper">
                  <option className="text-graphite">Choose a laboratory type</option>
                  <option className="text-graphite">School / teaching laboratory</option>
                  <option className="text-graphite">Mine or minerals laboratory</option>
                  <option className="text-graphite">Water & environmental laboratory</option>
                  <option className="text-graphite">Food & beverage QC laboratory</option>
                  <option className="text-graphite">Pharmaceutical QC laboratory</option>
                  <option className="text-graphite">Research laboratory</option>
                </select>
              </div>
              <div>
                <label htmlFor="stage" className="meta-label block text-paper/60">
                  Project stage
                </label>
                <select id="stage" className="mt-1.5 h-12 w-full border border-white/15 bg-white/5 px-3 text-[15px] text-paper">
                  <option className="text-graphite">Concept</option>
                  <option className="text-graphite">Design</option>
                  <option className="text-graphite">Budgeting</option>
                  <option className="text-graphite">Tender</option>
                  <option className="text-graphite">Implementation</option>
                </select>
              </div>
              <div>
                <label htmlFor="target" className="meta-label block text-paper/60">
                  Target date
                </label>
                <input
                  id="target"
                  type="date"
                  className="mt-1.5 h-12 w-full border border-white/15 bg-white/5 px-3 text-[15px] text-paper"
                />
              </div>
              <Link href="/request-a-quote" className="btn-pm btn-gold w-full">
                Continue to project RFQ <ArrowRight size={16} />
              </Link>
            </form>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
