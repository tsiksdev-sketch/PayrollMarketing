import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Motion";
import { OrbitLines } from "./orbit";

export interface LegalSection {
  h: string;
  items: string[];
}

export function LegalPage({
  kicker,
  title,
  intro,
  sections,
}: {
  kicker: string;
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <section className="relative isolate overflow-hidden surface-dark py-20">
        <OrbitLines />
        <div className="container-pm relative">
          <span className="kicker">{kicker}</span>
          <h1 className="mt-5 max-w-3xl text-paper">{title}</h1>
          <p className="mt-5 max-w-2xl text-[17px] text-paper/70">{intro}</p>
        </div>
      </section>

      <section className="section-pm">
        <div className="container-pm max-w-3xl">
          {sections.map((s, i) => (
            <Reveal key={s.h} delay={i * 0.05}>
              <div className="border-t-2 border-gold pt-5 pb-10">
                <h2 className="text-[26px] leading-tight">{s.h}</h2>
                <ul className="mt-4 space-y-3 text-[15px] text-muted-foreground">
                  {s.items.map((t) => (
                    <li key={t} className="border-l-2 border-border pl-4">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
          <p className="text-[13px] text-muted-foreground">
            This notice is provided for information. Final legal terms are confirmed in writing at contracting stage.
          </p>
          <Link href="/contact" className="btn-pm btn-dark mt-8">
            Contact the team <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
