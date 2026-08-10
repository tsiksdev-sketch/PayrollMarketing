import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Upload } from "lucide-react";

import { CtaBand } from "@/components/shared/footer/Foot";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import {
  PRODUCTS,
  PRODUCT_CATEGORIES,
  type Category,
  type Product,
} from "@/data/catalog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getFamilyPageData(slug: string) {
  const normalizedSlug = slug.trim().toLowerCase();

  const family = PRODUCT_CATEGORIES.find(
    (c) => c.slug.trim().toLowerCase() === normalizedSlug
  );

  if (!family) notFound();

  const products = PRODUCTS.filter(
    (p) => p.category.trim().toLowerCase() === family.slug.trim().toLowerCase()
  );

  return { family, products };
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const normalizedSlug = slug.trim().toLowerCase();

  const family = PRODUCT_CATEGORIES.find(
    (c) => c.slug.trim().toLowerCase() === normalizedSlug
  );

  if (!family) return {};

  return {
    title: `${family.name} | Payroll Marketing`,
    description: family.desc.slice(0, 155),
    openGraph: {
      title: `${family.name} | Payroll Marketing`,
      description: family.desc.slice(0, 155),
    },
  };
}

const CHECKS = [
  "Application and method",
  "Critical specification",
  "Grade, range or capacity",
  "Brand or catalogue reference",
  "Pack size and quantity",
  "Documentation and delivery needs",
];

export default async function FamilyPage({ params }: PageProps) {
  const { slug } = await params;

  const { family, products } = getFamilyPageData(slug);

  return (
    <>
      <PageHero
        kicker="Product family"
        title={family.name}
        intro={family.desc}
        image={products[0]?.image ?? "lab"}
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
            <span className="kicker">{family.kicker}</span>
            <h2 className="mt-4">Specified for the method — not selected by name alone.</h2>
            <p className="mt-4 text-muted-foreground">
              Product identity is only the starting point. Grade, purity, material, range, capacity,
              compatibility, documentation and recurring requirements determine the correct commercial route.
            </p>

            <ul className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2">
              {CHECKS.map((c) => (
                <li key={c} className="flex items-center gap-3 bg-card p-4 text-[15px]">
                  <Check size={16} className="text-success" /> {c}
                </li>
              ))}
            </ul>
          </div>

          <aside className="surface-dark h-fit p-8">
            <span className="meta-label text-gold">Supply classification</span>
            <h3 className="mt-3 text-[22px] text-paper">
              Routine supply, specialist sourcing and project procurement
            </h3>
            <p className="mt-3 text-[14px] text-paper/65">
              Availability, lead time and final configuration are confirmed at quotation stage.
            </p>

            <Link href="/contact" className="btn-pm btn-gold mt-6 w-full">
              Request this family <ArrowRight size={16} />
            </Link>
          </aside>
        </div>
      </section>

      <section className="section-pm bg-ivory">
        <div className="container-pm">
          <span className="kicker">Representative products</span>
          <h2 className="mt-4 max-w-3xl">Start with a known item — then refine the specification</h2>

          {products.length ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((p: Product) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className="mt-10 border border-burgundy bg-card p-8">
              <h3 className="text-[22px]">This family is sourced against your specification.</h3>
              <p className="mt-3 max-w-xl text-muted-foreground">
                No representative item is published for this family yet. Send the reference, label or schedule
                and the team will identify a sourcing route.
              </p>

              <Link href="/special-sourcing" className="btn-pm btn-gold mt-6">
                Start special sourcing <Upload size={16} />
              </Link>
            </div>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}