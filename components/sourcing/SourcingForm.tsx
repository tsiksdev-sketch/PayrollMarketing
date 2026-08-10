"use client"


import { ArrowRight, Upload } from 'lucide-react';
import React, { useState } from 'react'

function SourcingForm() {
     const [fileName, setFileName] = useState<string | null>(null);
     
  return (
    <div>
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
  )
}

export default SourcingForm

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