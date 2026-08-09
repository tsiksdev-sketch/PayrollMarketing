import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero,SectionHead } from "../PageHero";
import { CtaBand } from "../shared/footer/Foot";
import { CAPEX_PROJECTS, IMAGES } from "@/data/catalog";

/*export const Route = createFileRoute("/capex")({
  head: () => ({
    meta: [
      { title: "CAPEX & Projects | Payroll Marketing" },
      {
        name: "description",
        content:
          "Laboratory CAPEX and project procurement: requirement definition, specification, multi-brand sourcing, delivery coordination and lifecycle support.",
      },
      { property: "og:title", content: "CAPEX & Projects | Payroll Marketing" },
      {
        property: "og:description",
        content: "Illustrative laboratory configurations for mining, pharmaceutical, food, water, academic and industrial projects.",
      },
    ],
  }),
  component: CapexPage,
});*/

const STEPS = [
  { title: "Requirement definition", text: "Scope, users, methods, throughput, utilities and constraints are captured before product selection." },
  { title: "Specification", text: "Critical parameters are separated from preferences so the quotation can be reviewed technically." },
  { title: "Sourcing", text: "Multi-brand routes are compared against specification, documentation and support requirements." },
  { title: "Delivery & lifecycle", text: "Delivery coordination, installation pathways, spares, consumables and recurring supply." },
];

export default function CapexPage() {
  return (
    <>
      <PageHero
        kicker="CAPEX & projects"
        title="Laboratory configuration, not a fixed bill of quantities"
        intro="Define the laboratory, confirm the specification and review a configuration built around the operating environment."
        image="capex"
        actions={
          <Link href="/contact" className="btn-pm btn-gold">
            Discuss a project <ArrowRight size={16} />
          </Link>
        }
      />

      <section className="section-pm">
        <div className="container-pm">
          <SectionHead
            kicker="Procurement discipline"
            title="A structured pathway that protects laboratory continuity"
          />
          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-4">
            {STEPS.map((s, i) => (
              <div key={s.title} className="bg-card p-6">
                <span className="font-display text-[15px] text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-[18px]">{s.title}</h3>
                <p className="mt-3 text-[14px] text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pm bg-ivory">
        <div className="container-pm">
          <SectionHead
            kicker="Illustrative configurations"
            title="CAPEX pathways organised by operating environment"
            intro="CAPEX cards are illustrative configurations rather than fixed bills of quantities."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CAPEX_PROJECTS.map((p) => (
              <article key={p.name} className="group border border-border bg-card">
                <div className="img-zoom aspect-video">
                  <img src={IMAGES[p.image]} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <span className="tag-pm text-burgundy">CAPEX / project</span>
                  <h3 className="mt-3 text-[18px] leading-tight">{p.name}</h3>
                  <p className="mt-2 text-[14px] text-muted-foreground">{p.text}</p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-burgundy hover:text-gold"
                  >
                    Discuss this configuration <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
