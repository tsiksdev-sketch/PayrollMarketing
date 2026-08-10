"use client";

import Link from "next/link";
import { ArrowRight, Upload } from "lucide-react";
import { PageHero } from "../PageHero";
import { CtaBand } from "../shared/footer/Foot";
import SourcingForm from "./SourcingForm";

/*export const Route = createFileRoute("/special-sourcing")({
  head: () => ({
    meta: [
      { title: "Special Sourcing | Not Listed Is Not Unavailable" },
      {
        name: "description",
        content:
          "Send an old model, photograph, method, catalogue number or existing label and Payroll Marketing will identify an appropriate sourcing route.",
      },
      { property: "og:title", content: "Special Sourcing | Not Listed Is Not Unavailable" },
      {
        property: "og:description",
        content: "Turn an incomplete reference into a reviewable laboratory requirement.",
      },
    ],
  }),
  component: SpecialSourcingPage,
});*/

const STEPS = [
  "Upload the reference",
  "Confirm the application",
  "Clarify critical specification",
  "Review equivalents and documents",
  "Receive the quotation route",
];

export default function SpecialSourcingPage() {
 

  return (
    <>
      <PageHero
        kicker="No product match"
        title="Not listed does not mean not available."
        intro="Send the known reference, existing label, specification or complete RFQ and the team will identify an appropriate sourcing route."
        image="pharma"
        actions={
          <Link href="/contact" className="btn-pm btn-gold">
            Request a quote <ArrowRight size={16} />
          </Link>
        }
      />

      <section className="section-pm">
        <div className="container-pm grid gap-12 lg:grid-cols-2">
          <div>
            <span className="kicker">Next best action</span>
            <h2 className="mt-4">Turn an incomplete reference into a reviewable requirement</h2>
            <p className="mt-4 text-muted-foreground">
              Scientific procurement often begins with an old model, a photograph, a method, a catalogue number or a
              product that is not presented in a standard local catalogue.
            </p>
            <ol className="mt-8 divide-y divide-border border-y border-border">
              {STEPS.map((s, i) => (
                <li key={s} className="flex items-center gap-4 py-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold font-display text-[13px] text-graphite">
                    {i + 1}
                  </span>
                  <span className="text-[16px] font-semibold">{s}</span>
                </li>
              ))}
            </ol>
          </div>
        
        <SourcingForm/>
        
        </div>
      </section>

      <CtaBand />
    </>
  );
}

