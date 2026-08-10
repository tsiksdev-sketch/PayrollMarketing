"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ShieldCheck, Upload } from "lucide-react";
import { toast } from "sonner";
import { PageHero, SectionHead } from "../PageHero";
import { CtaBand } from "../shared/footer/Foot";
import { Reveal } from "../Motion";
import SupplierForm from "./SupplierForm";

/*export const Route = createFileRoute("/supplier-registration")({
  head: () => ({
    meta: [
      { title: "Supplier Registration | Payroll Marketing" },
      {
        name: "description",
        content:
          "Register Payroll Marketing as a supplier, or apply to supply and partner with us. Controlled routes for onboarding, tenders and principal discussions.",
      },
      { property: "og:title", content: "Supplier Registration | Payroll Marketing" },
      {
        property: "og:description",
        content: "Supplier onboarding, manufacturer partnership and tender registration routes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SupplierRegistrationPage,
});*/

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

export default function SupplierRegistrationPage() {
  const [route, setRoute] = useState<string>("client");
  const [file, setFile] = useState<string | null>(null);

  return (
    <>
      <PageHero
        kicker="Supplier registration"
        title="Register a supplier, manufacturer or project opportunity."
        intro="Use this route for supplier onboarding requests, manufacturer or principal discussions, tender portals and major-client registration questionnaires. It is not the product RFQ form."
        image="capex"
      />
    
    <SupplierForm/>
      

      <CtaBand />
    </>
  );
}

