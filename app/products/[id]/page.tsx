
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Upload, Plus } from "lucide-react";

import { CtaBand } from "@/components/shared/footer/Foot";
import { ProductCard } from "@/components/ProductCard";
import { IMAGES, PRODUCTS, classificationTone, type Product } from "@/data/catalog";


export default async function page(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;

  const { id } = params;

  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) notFound();

  const related = PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category
  ).slice(0, 3);

  const relatedSafe = related.length ? related : PRODUCTS.slice(0, 3);

  const specs: Array<[string, string]> = [
    ["Payroll reference", product.id],
    ["Primary applications", product.sectors.join(", ")],
    ["Brand route", product.brand],
    ["Configuration", product.pack],
    ["Documentation", "SDS, COA, manuals or datasheets where applicable and available"],
    ["Availability", "Confirmed at quotation stage"],
  ];

  return (
    <>
      <div className="border-b border-border bg-ivory">
        <div className="container-pm flex flex-wrap gap-2 py-4 text-[13px] text-muted-foreground">
          <Link href="/products" className="text-burgundy hover:text-gold">
            Products
          </Link>
          <span>/</span>

          <Link
            href={`/family/${product.category}`}
            className="text-burgundy hover:text-gold"
          >
            {product.family}
          </Link>

          <span>/</span>
          <span>{product.name}</span>
        </div>
      </div>

      <section className="py-14">
        <div className="container-pm grid gap-12 lg:grid-cols-2">
          <div className="img-zoom relative aspect-5/4">
            <img
              src={IMAGES[product.image as keyof typeof IMAGES]}
              alt={product.name}
              className="h-full w-full object-cover"
            />
            <span className="tag-pm absolute top-4 left-4 border-none bg-paper text-graphite">
              Representative configuration
            </span>
          </div>

          <div>
            <span className="kicker">{product.family}</span>
            <h1 className="mt-4 text-[clamp(2.25rem,4vw,3.25rem)]">{product.name}</h1>
            <p className="mt-4 text-muted-foreground">{product.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className={`tag-pm ${classificationTone(product.classification)}`}>
                {product.classification}
              </span>
              <span className="tag-pm text-labblue">{product.brand}</span>
              <span className="tag-pm text-teal">{product.pack}</span>
            </div>

            <dl className="mt-8 divide-y divide-border border-y border-border">
              {specs.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[150px_1fr] gap-4 py-3">
                  <dt className="meta-label">{k}</dt>
                  <dd className="text-[14px]">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              {/* hook lives in client component */}
              {/*<ProductRfqButton product={product} />*/}

              <Link href="/special-sourcing" className="btn-pm btn-dark">
                Upload existing label <Upload size={16} />
              </Link>
            </div>

            <Link
              href="/special-sourcing"
              className="mt-4 inline-flex items-center gap-1.5 font-semibold text-burgundy hover:text-gold"
            >
              Request an approved equivalent <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16">
        <div className="container-pm grid gap-10 lg:grid-cols-2">
          <div>
            <span className="kicker">Applications</span>
            <h2 className="mt-4 text-[32px]">Configured around the operating need</h2>
            <p className="mt-4 text-muted-foreground">
              Confirm the sample, method, measurement range, capacity, accuracy, material compatibility,
              utilities and quality requirements. The final quotation should distinguish required features
              from preferences.
            </p>
          </div>

          <ul className="grid gap-px self-start border border-border bg-border sm:grid-cols-2">
            {product.sectors.map((s) => (
              <li key={s} className="flex items-center gap-3 bg-card p-4 text-[15px]">
                <Check size={16} className="text-success" /> {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pm">
        <div className="container-pm">
          <span className="kicker">Related products</span>
          <h2 className="mt-4 max-w-3xl">Build the surrounding product ecosystem</h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedSafe.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}