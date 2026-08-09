import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero, SectionHead } from "../PageHero";
import { CtaBand } from "../shared/footer/Foot";
import { GsapStagger, Reveal } from "../Motion";
import { CONTACT } from "@/data/catalog";

/*export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Payroll Marketing | Laboratory Supply Since 1996" },
      {
        name: "description",
        content:
          "Payroll Marketing is a Harare-based scientific, laboratory and industrial supply partner combining local accountability with international product access since 1996.",
      },
      { property: "og:title", content: "About Payroll Marketing | Laboratory Supply Since 1996" },
      {
        property: "og:description",
        content: "Local accountability, international product access and specification-led procurement from Harare.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});*/

const PILLARS = [
  { title: "Products", text: "Routine essentials, specialist instruments and connected consumables." },
  { title: "Industries", text: "Sector pathways built around real operating challenges." },
  { title: "Projects", text: "Structured CAPEX, replacement and laboratory setup journeys." },
  { title: "Supply network", text: "International product access with accountable local follow-up." },
];

const HOW = [
  "Understand the operating need",
  "Clarify the technical specification",
  "Identify the sourcing route",
  "Confirm quotation scope and documents",
  "Coordinate the agreed supply pathway",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eager
        kicker="About Payroll Marketing"
        title="A Zimbabwean scientific, laboratory and industrial supply partner."
        intro="Established in 1996, Payroll Marketing combines local accountability with access to routine and specialist products through established manufacturer and distribution channels."
        image="academic"
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
              kicker="What we do"
              title="From daily laboratory requirements to complex project procurement"
              intro="Payroll Marketing supports product discovery, specification-led quotation, special sourcing, multi-line procurement, CAPEX requirements and lifecycle supply across scientific, laboratory and industrial environments."
            />
            <GsapStagger className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2">
              {PILLARS.map((p) => (
                <div key={p.title} data-gsap className="bg-card p-6">
                  <h3 className="text-[19px]">{p.title}</h3>
                  <p className="mt-3 text-[15px] text-muted-foreground">{p.text}</p>
                </div>
              ))}
            </GsapStagger>
          </div>

          <Reveal className="surface-dark h-fit p-8">
            <div className="font-display text-[64px] leading-none text-gold">1996</div>
            <h3 className="mt-4 text-paper">Established in Zimbabwe</h3>
            <p className="mt-4 text-[15px] text-paper/65">
              The company profile and approved materials support a longstanding presence in scientific and laboratory
              supply. Current public claims remain controlled through the website evidence register.
            </p>
            <div className="mt-6 border-t border-white/10 pt-5">
              <span className="meta-label text-paper/60">Harare-based support</span>
              <p className="mt-2 text-[15px] text-paper/70">{CONTACT.address.join(", ")}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pm bg-ivory">
        <div className="container-pm">
          <SectionHead
            className="mx-auto text-center"
            kicker="How we work"
            title="Clear requirements. Controlled sourcing. Accountable follow-up."
          />
          <GsapStagger className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3 lg:grid-cols-5">
            {HOW.map((step, i) => (
              <div key={step} data-gsap className="bg-card p-6">
                <span className="font-display text-[15px] text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-[17px] leading-tight">{step}</h3>
              </div>
            ))}
          </GsapStagger>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
