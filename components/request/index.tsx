'use client'


import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "../PageHero";
import { CtaBand } from "../shared/footer/Foot";
import RaqForm from "./RaqForm";


  const CHECKLIST = [
      "Exact item or application",
      "Critical specification",
      "Quantity and delivery location",
      "Required date",
      "Acceptable alternatives",
      "Required documents and services",
    ];



/*export const Route = createFileRoute("/request-a-quote")({
  head: () => ({
    meta: [
      { title: "Request a Quote | Payroll Marketing RFQ" },
      {
        name: "description",
        content:
          "Send one item, a full schedule or a complete project brief. A four-step RFQ for routine products, specialist equipment, equivalents and CAPEX.",
      },
      { property: "og:title", content: "Request a Quote | Payroll Marketing RFQ" },
      {
        property: "og:description",
        content: "A structured quotation route for routine, specialist, recurring and CAPEX requirements.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QuotePage,
});*/



export default function QuotePage() {
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eager
        kicker="Request a quote"
        title="Send one item, a full schedule or a complete project brief."
        intro="Use this quotation route for routine products, specialist equipment, recurring requirements, equivalents and CAPEX. The more complete the specification, the more efficiently the team can assess the sourcing route."
        image="capex"
      />

      <section className="section-pm">
        <div className="container-pm grid gap-10 lg:grid-cols-[1.6fr_1fr]">
       
        <RaqForm/>

          <aside className="space-y-6">
            <div className="border-l-4 border-gold bg-ivory p-6">
              <span className="kicker">RFQ basket</span>
              <h3 className="mt-3 text-[21px]">Attach representative products</h3>
              <p className="mt-3 text-[15px] text-muted-foreground">
                Add references from the product directory so the team can confirm the exact configuration.
              </p>
              <Link
                href="/products"
                className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold tracking-[0.12em] text-burgundy uppercase"
              >
                Add products <ArrowRight size={14} />
              </Link>
            </div>

            <div className="border border-border bg-card p-6">
              <h3 className="text-[21px]">Before you submit</h3>
              <ul className="mt-4 space-y-3 text-[15px]">
                {CHECKLIST.map((c) => (
                  <li key={c} className="flex gap-3">
                    <Check size={17} className="mt-0.5 shrink-0 text-success" /> {c}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

