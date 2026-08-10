"use client";


import { useState } from 'react'
import { Reveal } from '../Motion';
import { ArrowRight, ShieldCheck, Upload } from 'lucide-react';
import Link from 'next/link';
import { SectionHead } from '../PageHero';
import { toast } from 'sonner';


const ROUTES = [
  {
    id: "client",
    tag: "For clients",
    title: "Register Payroll Marketing as a supplier",
    text: "Upload the questionnaire, portal instructions or required document schedule. The team will confirm the appropriate owner and secure submission route.",
  },
  {
    id: "manufacturer",
    tag: "For manufacturers",
    title: "Apply to supply or partner with Payroll Marketing",
    text: "Introduce the product scope, territories, commercial model and current relationship evidence for review.",
  },
] as const;

function SupplierForm() {
      const [route, setRoute] = useState<string>("client");
      const [file, setFile] = useState<string | null>(null);
  return (

<section className="section-pm bg-ivory">
        <div className="container-pm grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <SectionHead kicker="Choose a registration path" title="Two controlled routes — one clear next step" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {ROUTES.map((r) => {
                const active = route === r.id;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setRoute(r.id)}
                    aria-pressed={active}
                    className={`h-full border-2 p-6 text-left transition-all hover:-translate-y-1 ${
                      active ? "border-gold bg-card shadow-lg" : "border-border bg-card/60"
                    }`}
                  >
                    <span className={`tag-pm ${active ? "text-gold" : "text-teal"}`}>{r.tag}</span>
                    <h3 className="mt-4 text-[19px] leading-tight">{r.title}</h3>
                    <p className="mt-3 text-[14px] text-muted-foreground">{r.text}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-bold tracking-[0.12em] text-burgundy uppercase">
                      {active ? "Selected" : "Select this route"} <ArrowRight size={14} />
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex gap-4 bg-graphite p-6 text-paper">
              <ShieldCheck size={20} className="mt-0.5 shrink-0 text-gold" />
              <p className="text-[14px] text-paper/80">
                <strong className="text-paper">Sensitive documents:</strong> banking, identity or high-risk corporate
                documents should only be submitted through an approved secure due-diligence route.
              </p>
            </div>
          </div>

          <Reveal className="border border-border bg-card p-8 shadow-sm">
            <span className="kicker">Initial registration enquiry</span>
            <h2 className="mt-4 text-[30px] leading-none">Provide the information required to route the request</h2>
            <form
              className="mt-8 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Registration enquiry captured", {
                  description: "The team will confirm the correct owner and submission route.",
                });
              }}
            >
              <Field label="Organisation name" required name="org" />
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Country" name="country" />
                <Field label="Website" name="website" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Primary contact" required name="contact" />
                <Field label="Email" required type="email" name="email" />
              </div>
              <div>
                <label className="meta-label" htmlFor="requirement">
                  Products, services or registration requirement
                </label>
                <textarea
                  id="requirement"
                  rows={5}
                  className="mt-2 w-full border border-input bg-background p-3 text-[15px] outline-none focus:border-gold"
                />
              </div>

              <label className="block cursor-pointer border-2 border-dashed border-input bg-ivory p-8 text-center transition-colors hover:border-gold">
                <input
                  type="file"
                  className="sr-only"
                  onChange={(e) => setFile(e.target.files?.[0]?.name ?? null)}
                />
                <Upload size={22} className="mx-auto text-graphite" />
                <span className="mt-3 block font-semibold">
                  {file ?? "Drop a questionnaire, profile or document schedule here"}
                </span>
                <span className="mt-1 block text-[13px] text-muted-foreground">PDF, XLSX, CSV, DOCX, JPG or PNG</span>
                <span className="btn-pm btn-dark mt-4">Choose file</span>
              </label>

              <label className="flex items-start gap-3 text-[14px] text-muted-foreground">
                <input type="checkbox" required className="mt-1.5 accent-gold" />
                I confirm that submitted information is accurate and may be used to assess this enquiry.
              </label>

              <button type="submit" className="btn-pm btn-gold w-full sm:w-auto">
                Submit registration enquiry <ArrowRight size={16} />
              </button>
              <p className="text-[13px] text-muted-foreground">
                Selected route: <strong>{route === "client" ? "Client onboarding" : "Manufacturer partnership"}</strong>.
                For product pricing use{" "}
                <Link href="/request-a-quote" className="text-burgundy hover:text-gold">
                  Request a quote
                </Link>
                .
              </p>
            </form>
          </Reveal>
        </div>
      </section>
  )
}

export default SupplierForm

function Field({
  label,
  name,
  required,
  type = "text",
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label className="meta-label" htmlFor={name}>
        {label} {required && <span className="text-burgundy">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 h-12 w-full border border-input bg-background px-3 text-[15px] outline-none focus:border-gold"
      />
    </div>
  );
}
