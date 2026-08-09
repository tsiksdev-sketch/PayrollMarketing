'use client'


import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "../PageHero";
import { CtaBand } from "../shared/footer/Foot";
import { Reveal } from "../Motion";
import { PRODUCT_CATEGORIES } from "@/data/catalog";

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

const STEPS = ["Contact", "Requirement", "Services & uploads", "Review"];

const CHECKLIST = [
  "Exact item or application",
  "Critical specification",
  "Quantity and delivery location",
  "Required date",
  "Acceptable alternatives",
  "Required documents and services",
];

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
          <div>
            <ol className="flex flex-wrap gap-x-8 gap-y-3">
              {STEPS.map((label, i) => (
                <li key={label} className="flex items-center gap-2.5">
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full text-[12px] font-bold ${
                      i <= step ? "bg-gold text-graphite" : "border border-border text-muted-foreground"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className="meta-label">{label}</span>
                </li>
              ))}
            </ol>

            <Reveal className="mt-8 border border-border bg-card p-6 md:p-8">
              <span className="kicker">Step {step + 1} of 4</span>

              {step === 0 && (
                <>
                  <h2 className="mt-4 text-[30px]">Who should receive the quotation follow-up?</h2>
                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    <Field id="name" label="Contact name" required />
                    <Field id="org" label="Organisation" required />
                    <Field id="role" label="Job title" />
                    <Field id="email" label="Email" type="email" required />
                    <Field id="tel" label="Telephone" type="tel" />
                    <div>
                      <label htmlFor="method" className="meta-label block">
                        Preferred contact method
                      </label>
                      <select id="method" className="mt-1 h-12 w-full border border-input bg-background px-3 text-[16px]">
                        <option>Email</option>
                        <option>Telephone</option>
                        <option>WhatsApp</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              {step === 1 && (
                <>
                  <h2 className="mt-4 text-[30px]">What is required?</h2>
                  <div className="mt-8 space-y-5">
                    <div>
                      <label htmlFor="family" className="meta-label block">
                        Product family
                      </label>
                      <select id="family" className="mt-1 h-12 w-full border border-input bg-background px-3 text-[16px]">
                        <option>Not sure yet</option>
                        {PRODUCT_CATEGORIES.map((c) => (
                          <option key={c.slug}>{c.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field id="qty" label="Quantity and unit" />
                      <Field id="date" label="Required date" type="date" />
                    </div>
                    <div>
                      <label htmlFor="spec" className="meta-label block">
                        Requirement, method or schedule *
                      </label>
                      <textarea
                        id="spec"
                        rows={5}
                        placeholder="Grade, purity, range, capacity, dimensions, compatibility or method"
                        className="mt-1 w-full border border-input bg-background p-3 text-[16px]"
                      />
                    </div>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <h2 className="mt-4 text-[30px]">Services, documents and uploads</h2>
                  <div className="mt-8 space-y-4">
                    {[
                      "Approved equivalents may be considered",
                      "Installation or commissioning review",
                      "Calibration certificates required",
                      "Recurring supply schedule required",
                    ].map((o) => (
                      <label key={o} className="flex items-center gap-3 border border-border bg-background p-4 text-[15px]">
                        <input type="checkbox" className="h-4 w-4 accent-gold" />
                        {o}
                      </label>
                    ))}
                    <label
                      htmlFor="upload"
                      className="flex cursor-pointer flex-col items-center gap-2 border-2 border-dashed border-input bg-muted p-8 text-center"
                    >
                      <span className="font-display text-[18px] uppercase">Drop a product label, datasheet or RFQ</span>
                      <span className="text-[13px] text-muted-foreground">PDF, XLSX, CSV, DOCX, JPG or PNG</span>
                      <input id="upload" type="file" className="mt-2 text-[13px]" />
                    </label>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <h2 className="mt-4 text-[30px]">Review and submit</h2>
                  <p className="mt-4 text-muted-foreground">
                    A member of the team will confirm the specification, identify the appropriate sourcing route and
                    respond with a controlled quotation.
                  </p>
                  {sent && (
                    <p className="mt-6 border-l-4 border-success bg-muted p-4 text-[15px]">
                      Thank you — your requirement has been captured. The team will respond with a sourcing route.
                    </p>
                  )}
                </>
              )}

              <div className="mt-8 flex items-center justify-between gap-4 border-t border-border pt-6">
                <button
                  type="button"
                  disabled={step === 0}
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  className="btn-pm btn-ghost-pm disabled:opacity-40"
                >
                  Back
                </button>
                {step < 3 ? (
                  <button type="button" onClick={() => setStep((s) => s + 1)} className="btn-pm btn-gold">
                    Continue <ArrowRight size={16} />
                  </button>
                ) : (
                  <button type="button" onClick={() => setSent(true)} className="btn-pm btn-gold">
                    Submit RFQ <ArrowRight size={16} />
                  </button>
                )}
              </div>
            </Reveal>
          </div>

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

function Field({ id, label, type = "text", required = false }: { id: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="meta-label block">
        {label} {required && "*"}
      </label>
      <input id={id} type={type} className="mt-1 h-12 w-full border border-input bg-background px-3 text-[16px]" />
    </div>
  );
}
