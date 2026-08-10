import { LegalPage } from "@/components/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Terms | Payroll Marketing Zimbabwe",
  description:
    "Terms governing use of the Payroll Marketing website, representative product information, quotations, brand references and intellectual property.",
  openGraph: {
    title: "Website Terms | Payroll Marketing Zimbabwe",
    description: "Website use, representative product information and quotation terms.",
  },
};

export default function TermsPage() {
  return (
    <LegalPage
      kicker="Governance"
      title="Website Terms"
      intro="These terms govern use of this website. Products shown are representative. Final specification, availability, documentation, lead time and commercial terms are confirmed at quotation."
      sections={[
        {
          h: "Product information",
          items: [
            "Product records, images and descriptions are indicative and do not constitute an offer to supply.",
            "Nothing on this website confirms stock, price or a delivery promise.",
            "Additional brands, models, pack sizes and project requirements can be sourced against a confirmed specification.",
          ],
        },
        {
          h: "Brand references",
          items: [
            "Brand names indicate possible sourcing routes only.",
            "They do not imply authorised, exclusive or official distributor status unless stated in writing.",
            "All trademarks remain the property of their respective owners.",
          ],
        },
        {
          h: "Quotations and orders",
          items: [
            "Quotations are valid for the period stated on the quotation document.",
            "Orders are accepted subject to written confirmation of specification, documentation and commercial terms.",
          ],
        },
        {
          h: "Use of the site",
          items: [
            "Content may not be reproduced for commercial resale without written permission.",
            "The site is provided without warranty as to uninterrupted availability.",
            "Zimbabwean law governs these terms.",
          ],
        },
      ]}
    />
  );
}