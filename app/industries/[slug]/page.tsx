import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, FileText, Upload } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/shared/footer/Foot";
import { ProductCard } from "@/components/ProductCard";
import { IMAGES, INDUSTRIES, PRODUCTS, type Industry, type Product } from "@/data/catalog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getIndustryPageData(slug: string) {
  const normalizedSlug = slug.trim().toLowerCase();

  const industry = INDUSTRIES.find(
    (i) => i.slug.trim().toLowerCase() === normalizedSlug
  );

  if (!industry) notFound();

  const key = (industry.name.split(/[,&]/)[0] ?? industry.name)
    .trim()
    .toLowerCase();

  const products = PRODUCTS.filter((p) =>
    p.sectors.some(
      (s) => s.toLowerCase().includes(key) || key.includes(s.toLowerCase())
    )
  ).slice(0, 3);

  return { industry, products: products.length ? products : PRODUCTS.slice(0, 3) };
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  const industry = INDUSTRIES.find(
    (i) => i.slug.trim().toLowerCase() === slug.trim().toLowerCase()
  );

  if (!industry) return {};

  return {
    title: `${industry.name} | Payroll Marketing`,
    description: industry.desc.slice(0, 155),
    openGraph: {
      title: `${industry.name} | Payroll Marketing`,
      description: industry.headline.slice(0, 155),
    },
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;

  const { industry, products } = getIndustryPageData(slug);

  return (
    <>
      <PageHero
        kicker={industry.name}
        title={industry.headline}
        intro={industry.desc}
        image={industry.image}
        actions={
          <>
            <Link href="/contact" className="btn-pm btn-gold">
              Request a quote <ArrowRight size={16} />
            </Link>
            <Link href="/products" className="btn-pm btn-ghost-pm text-paper">
              Explore products <ArrowRight size={16} />
            </Link>
          </>
        }
      />

      <section className="section-pm">
        <div className="container-pm grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="kicker">Operating challenges</span>
            <h2 className="mt-4">Laboratory continuity depends on more than the headline instrument</h2>
            <p className="mt-4 text-muted-foreground">
              Specifications, sample conditions, utilities, calibration, documentation, recurring consumables and
              replacement pathways all affect the quality of the operating outcome.
            </p>

            <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2">
              {industry.tags.map((tag, i) => (
                <div key={tag} className="bg-card p-5">
                  <span className="font-display text-[14px] text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 text-[17px]">{tag}</h3>
                  <p className="mt-2 text-[14px] text-muted-foreground">
                    Scope the requirement around the method and operating decision.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="surface-dark h-fit p-8">
            <span className="tag-pm text-gold">Capability statement</span>
            <h3 className="mt-4 text-[22px] text-paper">{industry.name} supply capability</h3>
            <p className="mt-3 text-[14px] text-paper/65">
              A concise procurement-facing overview of relevant product families, applications, CAPEX routes and
              special-sourcing support.
            </p>

            <Link href="/resources" className="btn-pm btn-ghost-pm mt-6 w-full text-paper">
              View capability statement <FileText size={16} />
            </Link>

            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="text-[14px] font-semibold text-paper">Discuss a sector requirement</p>
              <p className="mt-1 text-[13px] text-paper/60">Send a schedule, method or project brief.</p>
              <Link href="/contact" className="mt-3 inline-flex text-[14px] font-semibold text-gold">
                Start an RFQ →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-pm bg-ivory">
        <div className="container-pm">
          <span className="kicker">Relevant product routes</span>
          <h2 className="mt-4 max-w-3xl">Products connected to the sector workflow</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Representative routes are shown below. Product selection remains specification-led and the wider portfolio
            is available through special sourcing.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pm">
        <div className="container-pm grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="kicker">Equipment & CAPEX</span>
            <h2 className="mt-4">From isolated replacement to complete laboratory configuration</h2>
            <p className="mt-4 text-muted-foreground">
              Projects can include equipment schedules, specification review, multi-brand sourcing, phased procurement,
              delivery coordination, installation pathways, documentation, spares and recurring supply.
            </p>

            <Link href="/capex" className="btn-pm btn-gold mt-8">
              Explore CAPEX pathways <ArrowRight size={16} />
            </Link>
          </div>

          <div className="relative">
            <div className="img-zoom aspect-[16/9]">
              <img src={IMAGES.capex} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>

            <div className="surface-dark p-6">
              <span className="tag-pm text-burgundy">Special sourcing</span>
              <p className="mt-3 font-display text-[19px] text-paper uppercase">
                Use an existing label, old model or method as the starting point.
              </p>

              <Link
                href="/special-sourcing"
                className="mt-3 inline-flex items-center gap-2 text-[14px] font-semibold text-gold"
              >
                Submit the reference <Upload size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}





