import { LegalPage } from "@/components/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice | Payroll Marketing Zimbabwe",
  description:
    "How Payroll Marketing collects, uses and protects information submitted through quotations, RFQ uploads, supplier registration and website enquiries.",
  openGraph: {
    title: "Privacy Notice | Payroll Marketing Zimbabwe",
    description: "Information handling for enquiries, RFQ submissions and supplier registration.",
  },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      kicker="Governance"
      title="Privacy Notice"
      intro="This notice explains what information we collect when you submit an enquiry, RFQ, supplier registration or project brief, and how that information is used."
      sections={[
        {
          h: "Information we collect",
          items: [
            "Contact details you provide: name, organisation, role, email address and telephone number.",
            "Requirement details: product references, specifications, quantities, delivery locations and required dates.",
            "Files you choose to upload, such as product labels, schedules, drawings or existing RFQ documents.",
            "Basic technical information required to operate and secure the website.",
          ],
        },
        {
          h: "How the information is used",
          items: [
            "Reviewing your requirement and identifying an appropriate sourcing route.",
            "Preparing quotations, documentation requests and project proposals.",
            "Communicating with you about an active enquiry, order or project.",
            "Maintaining internal procurement, quality and audit records.",
          ],
        },
        {
          h: "Sharing",
          items: [
            "Requirement details may be shared with manufacturers, distributors and logistics partners only to the extent needed to source, quote and deliver.",
            "We do not sell personal information.",
          ],
        },
        {
          h: "Retention and your choices",
          items: [
            "Enquiry and quotation records are retained for as long as required for commercial and statutory purposes.",
            "You may request access to, correction of, or deletion of information you have submitted.",
            "Requests should be sent to the contact address published on this website.",
          ],
        },
      ]}
    />
  );
}