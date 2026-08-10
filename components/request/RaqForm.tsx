"use client"


import React, { useState } from 'react'
import { Reveal } from '../Motion'
import { ArrowRight } from 'lucide-react'
import { PRODUCT_CATEGORIES } from "@/data/catalog";




    const STEPS = ["Contact", "Requirement", "Services & uploads", "Review"];
    
  
function RaqForm() {
    
    
 
      const [step, setStep] = useState(0);
      const [sent, setSent] = useState(false);
    


  return (
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
  )
}

export default RaqForm

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
