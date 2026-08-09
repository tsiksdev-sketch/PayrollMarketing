import Link from "next/link";
import { ArrowRight, Upload } from "lucide-react";
import { PageHero, SectionHead } from "../PageHero";
import { CtaBand } from "../shared/footer/Foot";
import { IMAGES, INDUSTRIES } from "@/data/catalog";

/*export const Route = createFileRoute("/industries/")({
  head: () => ({
    meta: [
      { title: "Industries | Payroll Marketing Technical Supply" },
      {
        name: "description",
        content:
          "Laboratory and industrial supply pathways for mining, water, healthcare, food, academic, industrial, utilities and development programmes.",
      },
      { property: "og:title", content: "Industries | Payroll Marketing Technical Supply" },
      {
        property: "og:description",
        content: "Technical supply organised around the operating environment, method and documentation requirement.",
      },
    ],
  }),
  component: IndustriesPage,
});*/

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        kicker="Industries"
        title="Technical supply organised around the operating environment"
        intro="Each industry page connects sector challenges to relevant products, methods, recurring supply, project procurement and controlled resources."
        image="mining"
        actions={
          <>
            <Link href="/contact" className="btn-pm btn-gold">
              Request a quote <ArrowRight size={16} />
            </Link>
            <Link href="/special-sourcing" className="btn-pm btn-ghost-pm text-paper">
              Upload an RFQ <Upload size={16} />
            </Link>
          </>
        }
      />

      <section className="section-pm">
        <div className="container-pm">
          <SectionHead
            kicker="Eight sector pathways"
            title="Start with the laboratory, plant, programme or project context"
            intro="The same instrument or reagent can require different configuration, documentation and support across sectors."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {INDUSTRIES.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="img-zoom group relative block aspect-16/11"
              >
                <img src={IMAGES[ind.image]} alt={ind.name} loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-graphite via-graphite/75 to-graphite/10" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="meta-label text-gold">{ind.tags.slice(0, 2).join(" · ")}</span>
                  <h3 className="mt-2 text-[24px] leading-tight text-paper">{ind.name}</h3>
                  <p className="mt-2 max-w-lg text-[14px] text-paper/70">{ind.desc}</p>
                  <span className="mt-4 flex items-center gap-1.5 text-[12px] font-bold tracking-[0.12em] text-gold uppercase">
                    Explore sector <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
