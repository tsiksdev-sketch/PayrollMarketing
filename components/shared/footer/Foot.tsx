import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CONTACT } from "@/data/catalog";

export function CtaBand() {
  return (
    <section className="bg-midnight py-16 text-paper">
      <div className="container-pm flex flex-col justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <span className="kicker">Ready to move</span>
          <h2 className="mt-4 text-paper">Send the specification. We will identify the sourcing route.</h2>
          <p className="mt-4 text-paper/70">Submit one item, a full schedule or a complete project brief.</p>
        </div>
        <div className="flex flex-col gap-3">
          <Link href="/request-a-quote" className="btn-pm btn-gold">
            Request a quote <ArrowRight size={16} />
          </Link>
          <a
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="btn-pm btn-ghost-pm text-paper"
          >
            WhatsApp the requirement <ArrowRight size={16} />
          </a>
          <Link href="/special-sourcing" className="btn-pm btn-ghost-pm text-paper">
            Special sourcing <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default function Foot() {
  return (
    <footer className="surface-dark">
      <div className="container-pm grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <img src='/logo.png' alt="Payroll Marketing" className="h-12 w-12 object-contain" width={48} height={48} loading="lazy" />
          <p className="mt-5 max-w-xs text-[15px] text-paper/65">
            Specification-led supply for daily laboratory requirements, specialist equipment and complete project
            procurement.
          </p>
          <div className="mt-5 flex gap-6 text-[14px] font-semibold text-burgundy">
            <Link href="/request-a-quote" className="hover:text-gold">
              Request a quote →
            </Link>
            <Link href="/special-sourcing" className="hover:text-gold">
              Special sourcing →
            </Link>
          </div>
        </div>

        <FooterCol
          title="Discover"
          links={[
            { to: "/products", label: "Products" },
            { to: "/industries", label: "Industries" },
            { to: "/capex", label: "CAPEX & Projects" },
            { to: "/resources", label: "Resources" },
            { to: "/laboratory-setup", label: "Laboratory Setup" },
            { to: "/about", label: "About" },
          ]}
        />
        <FooterCol
          title="Work with us"
          links={[
            { to: "/request-a-quote", label: "Request a Quote" },
            { to: "/special-sourcing", label: "Special Sourcing" },
            { to: "/supplier-registration", label: "Supplier Registration" },
            { to: "/brands", label: "Supply Network" },
            { to: "/contact", label: "Contact" },
          ]}
        />

        <div>
          <h4 className="text-[15px] text-paper">Contact</h4>
          <address className="mt-5 space-y-1 text-[15px] not-italic text-paper/65">
            {CONTACT.address.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </address>
          <div className="mt-4 space-y-1 text-[15px] text-paper/65">
            <div>{CONTACT.phone}</div>
            <div>{CONTACT.phoneAlt}</div>
            <div>{CONTACT.mobile}</div>
            <a href={`mailto:${CONTACT.email}`} className="hover:text-gold">
              {CONTACT.email}
            </a>
          </div>
          <a
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-gold hover:text-paper"
          >
            WhatsApp the requirement →
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-pm flex flex-col gap-2 py-5 text-[12px] text-paper/45 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Payroll Marketing (Private) Limited.</span>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="hover:text-gold">
              Privacy Notice
            </Link>
           
            <Link href="/terms" className="hover:text-gold">
              Website Terms
            </Link>
          </div>
          <span>Products shown are representative. Availability is confirmed at quotation stage.</span>
        </div>
      </div>
    </footer>
  );
}


function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="text-[15px] text-paper">{title}</h4>
      <ul className="mt-5 space-y-3 text-[15px] text-paper/65">
        {links.map((l, i) => (
          <li key={i}>
            <Link href={l.to} className="hover:text-gold">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
