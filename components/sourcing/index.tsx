"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Upload } from "lucide-react";
import { PageHero } from "../PageHero";
import { CtaBand } from "../shared/footer/Foot";

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
  const [fileName, setFileName] = useState<string | null>(null);

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

          <form
            className="h-fit border border-border bg-card p-6"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label className="flex cursor-pointer flex-col items-center border-2 border-dashed border-input p-10 text-center">
              <Upload size={26} className="text-burgundy" />
              <span className="mt-3 font-semibold">Drop a product label, datasheet or RFQ here</span>
              <span className="mt-1 text-[13px] text-muted-foreground">PDF, XLSX, CSV, DOCX, JPG or PNG</span>
              <span className="btn-pm btn-dark mt-5">Choose file</span>
              <input
                type="file"
                className="sr-only"
                accept=".pdf,.xlsx,.csv,.docx,.jpg,.jpeg,.png"
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
              />
            </label>
            {fileName && <p className="mt-3 text-[14px] text-success">Selected: {fileName}</p>}

            <div className="mt-6 space-y-4">
              <Field id="ss-org" label="Organisation" required />
              <Field id="ss-email" label="Work email" type="email" required />
              <div>
                <label htmlFor="ss-detail" className="meta-label block">
                  Reference, model or method *
                </label>
                <textarea
                  id="ss-detail"
                  required
                  rows={4}
                  placeholder="Old model number, catalogue reference, method or application"
                  className="mt-1 w-full border border-input bg-background p-3 text-[16px]"
                />
              </div>
              <label className="flex items-center gap-3 text-[15px]">
                <input type="checkbox" className="h-4 w-4 accent-gold" /> Request an approved equivalent
              </label>
              <label className="flex items-center gap-3 text-[15px]">
                <input type="checkbox" className="h-4 w-4 accent-gold" /> Include installation or commissioning
                review
              </label>
              <button type="submit" className="btn-pm btn-gold w-full">
                Submit the reference <ArrowRight size={16} />
              </button>
              <p className="text-[13px] text-muted-foreground">
                Availability, lead time and final configuration are confirmed at quotation stage.
              </p>
            </div>
          </form>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function Field({ id, label, type = "text", required = false }: { id: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="meta-label block">
        {label} {required && "*"}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className="mt-1 h-12 w-full border border-input bg-background px-3 text-[16px]"
      />
    </div>
  );
}