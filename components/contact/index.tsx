
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "../PageHero";
import { CtaBand } from "../shared/footer/Foot";
import { CONTACT} from "@/data/catalog";
import ContactForm from "./ContactForm";

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
         <ContactForm/>
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

