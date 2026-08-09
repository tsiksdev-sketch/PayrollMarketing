'use client';

import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "../PageHero";
import { CtaBand } from "../shared/footer/Foot";
import { CONTACT, PRODUCT_CATEGORIES } from "@/data/catalog";

/*export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Request a Quote | Payroll Marketing Harare" },
      {
        name: "description",
        content:
          "Submit one item, a full schedule or a complete project brief. Payroll Marketing responds with a specification-led sourcing route from Harare, Zimbabwe.",
      },
      { property: "og:title", content: "Request a Quote | Payroll Marketing Harare" },
      {
        property: "og:description",
        content: "Send the specification and the team will identify the sourcing route.",
      },
    ],
  }),
  component: ContactPage,
});*/

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        kicker="Request a quote"
        title="Send the specification. We will identify the sourcing route."
        intro="Established in 1996 and based in Harare, Payroll Marketing supplies scientific, laboratory and industrial requirements across Zimbabwe."
        image="lab"
      />

      <section className="section-pm">
        <div className="container-pm grid gap-12 lg:grid-cols-[1.3fr_1fr]">
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

          <aside className="surface-dark h-fit p-8">
            <span className="kicker">Contact</span>
            <h3 className="mt-4 text-[24px] text-paper">Payroll Marketing (Private) Limited</h3>
            <ul className="mt-6 space-y-5 text-[15px] text-paper/75">
              <li className="flex gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-gold" />
                <span>{CONTACT.address.join(", ")}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="mt-1 shrink-0 text-gold" />
                <span>
                  <a href={`tel:${CONTACT.phone}`} className="hover:text-gold">
                    {CONTACT.phone}
                  </a>
                  <br />
                  <a href={`tel:${CONTACT.mobile}`} className="hover:text-gold">
                    {CONTACT.mobile}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="mt-1 shrink-0 text-gold" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-gold">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
            <div className="mt-8 border-t border-white/10 pt-6 text-[14px] text-paper/60">
              Established 1996. Supplying laboratories, mines, utilities, manufacturers, schools and development
              programmes across Zimbabwe.
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
      <input
        id={id}
        type={type}
        required={required}
        className="mt-1 h-12 w-full border border-input bg-background px-3 text-[16px]"
      />
    </div>
  );
}
