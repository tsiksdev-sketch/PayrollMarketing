"use client";

import { PRODUCT_CATEGORIES } from '@/data/catalog';
import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react'

function ContactForm() {
    const [sent, setSent] = useState(false);
  return (
    <div>
         <form
            className="border border-border bg-card p-6 md:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <span className="kicker">RFQ details</span>
            <h2 className="mt-4 text-[32px]">Tell us what the laboratory needs</h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Full name" required />
              <Field id="org" label="Organisation" required />
              <Field id="email" label="Work email" type="email" required />
              <Field id="phone" label="Telephone" type="tel" />
            </div>

            <div className="mt-5">
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

            <div className="mt-5">
              <label htmlFor="detail" className="meta-label block">
                Requirement, method or schedule *
              </label>
              <textarea
                id="detail"
                required
                rows={5}
                placeholder="Describe the application, method, quantities, critical specification and target date"
                className="mt-1 w-full border border-input bg-background p-3 text-[16px]"
              />
            </div>

            <button type="submit" className="btn-pm btn-gold mt-6">
              Submit RFQ <ArrowRight size={16} />
            </button>
            {sent && (
              <p className="mt-4 border-l-4 border-success bg-muted p-4 text-[15px]">
                Thank you — your requirement has been captured. A member of the team will respond with a sourcing route.
              </p>
            )}
            <p className="mt-4 text-[13px] text-muted-foreground">
              Stock and prices are not published online. Availability and final configuration are confirmed at quotation
              stage.
            </p>
          </form>

    </div>
  )
}

export default ContactForm

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