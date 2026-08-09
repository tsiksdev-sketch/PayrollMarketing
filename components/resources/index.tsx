import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { PageHero,SectionHead } from "../PageHero";
import { CtaBand } from "../shared/footer/Foot";
import { RESOURCES } from "@/data/catalog";


export default function ResourcesPage() {
  return (
    <>
      <PageHero
        kicker="Resources"
        title="Practical resources for better RFQs and procurement decisions"
        intro="Controlled documents supporting specification, planning and technical review."
        image="academic"
      />

      <section className="section-pm">
        <div className="container-pm">
          <SectionHead kicker="Controlled documents" title="Catalogues, capability statements and technical guides" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {RESOURCES.map((r) => (
              <article key={r.title} className="flex flex-col border-t-2 border-gold bg-card p-6">
                <div className="flex items-center justify-between">
                  <FileText size={20} className="text-burgundy" />
                  <span className="tag-pm text-teal">{r.type}</span>
                </div>
                <h3 className="mt-4 text-[19px] leading-tight">{r.title}</h3>
                <p className="mt-3 flex-1 text-[14px] text-muted-foreground">{r.meta}</p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-burgundy hover:text-gold"
                >
                  Request document <ArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
