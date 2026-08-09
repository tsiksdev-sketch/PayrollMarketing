import Link from "next/link";
import { ArrowRight, Search, Upload } from "lucide-react";
import { PageHero } from "../PageHero";
import { CtaBand } from "../shared/footer/Foot";
import { ProductCard } from "../ProductCard";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/data/catalog";

const ROUTES = [
  "All supply routes",
  "Routine supply",
  "Routine / specialist sourcing",
  "Specialist sourcing",
  "CAPEX / specialist sourcing",
  "Project / specialist sourcing",
];

type Props = {
  searchParams?: {
    q?: string;
    family?: string;
    route?: string;
  };
};

export default function ProductsPage({ searchParams }: Props) {
  const query = (searchParams?.q ?? "").toString();
  const family = (searchParams?.family ?? "all").toString();
  const route = (searchParams?.route ?? ROUTES[0]).toString();

  const results = PRODUCTS.filter((p) => {
    const q = query.trim().toLowerCase();
    const matchQ =
      !q ||
      [p.name, p.id, p.brand, p.family, p.description, ...p.sectors]
        .join(" ")
        .toLowerCase()
        .includes(q);

    const matchF = family === "all" || p.category === family;
    const matchR = route === ROUTES[0] || p.classification === route;

    return matchQ && matchF && matchR;
  });

  return (
    <>
      <PageHero
        kicker="Product directory"
        title="Products organised around how laboratories buy"
        intro="Search by product family, application, sector, brand or known reference. The online portfolio is representative rather than exhaustive."
        image="industrial"
        actions={
          <>
            <Link href="/contact" className="btn-pm btn-gold">
              Request a quote <ArrowRight size={16} />
            </Link>
            <Link href="/special-sourcing" className="btn-pm btn-ghost-pm text-paper">
              Upload an RFQ <Upload size={16} />
            </Link>
          </>
        }
      />

      <section className="border-b border-border bg-ivory py-6">
        <div className="container-pm">
          {/* NOTE: In Next, you typically update query params.
              If you want it “fully Next way”, use a form + method=get
              so filters are shareable/bookmarkable. */}
          <form method="get" className="flex flex-col gap-3 md:flex-row">
            <label className="flex flex-1 items-center gap-3 border border-input bg-card px-4">
              <Search size={18} className="text-muted-foreground" />
              <span className="sr-only">Search products</span>

              <input
                name="q"
                defaultValue={query}
                placeholder="Search product, application, model or catalogue number"
                className="h-12 w-full bg-transparent text-[16px] outline-none"
              />
            </label>

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="meta-label block" htmlFor="family">
                  Product family
                </label>
                <select
                  id="family"
                  name="family"
                  defaultValue={family}
                  className="mt-1 h-11 w-full border border-input bg-card px-3 text-[14px]"
                >
                  <option value="all">All families</option>
                  {PRODUCT_CATEGORIES.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="meta-label block" htmlFor="route">
                  Supply route
                </label>
                <select
                  id="route"
                  name="route"
                  defaultValue={route}
                  className="mt-1 h-11 w-full border border-input bg-card px-3 text-[14px]"
                >
                  {ROUTES.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* submit button not shown in your original UI; add a hidden one */}
            <button type="submit" className="sr-only">
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="section-pm">
        <div className="container-pm grid gap-10 lg:grid-cols-[260px_1fr]">
          <aside>
            <span className="kicker">Browse categories</span>
            <ul className="mt-5 divide-y divide-border border-y border-border">
              {PRODUCT_CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/family/${c.slug}`}
                    className="flex items-center justify-between gap-3 py-3 text-[14px] hover:text-burgundy"
                  >
                    {c.name}
                    <span className="meta-label">
                      {PRODUCTS.filter((p) => p.category === c.slug).length}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="surface-dark mt-8 p-6">
              <h3 className="text-[17px] text-paper">Cannot find the item?</h3>
              <p className="mt-2 text-[14px] text-paper/65">
                Upload a label, datasheet or full schedule.
              </p>
              <Link
                href="/special-sourcing"
                className="mt-4 inline-flex text-[14px] font-semibold text-gold"
              >
                Use special sourcing →
              </Link>
            </div>
          </aside>

          <div>
            <div className="flex items-baseline justify-between gap-4 border-b border-border pb-4">
              <h2 className="text-[28px]">Procurement-ready product discovery</h2>
              <span className="meta-label">{results.length} representative products</span>
            </div>

            {results.length > 0 ? (
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {results.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            ) : (
              <div className="mt-8 border border-burgundy bg-card p-10">
                <span className="kicker">No product match</span>
                <h3 className="mt-3 text-[26px]">Not listed does not mean not available.</h3>
                <p className="mt-3 max-w-xl text-muted-foreground">
                  No representative product matched the current search. Send the known reference, existing label,
                  specification or complete RFQ and the team will identify an appropriate sourcing route.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/special-sourcing" className="btn-pm btn-gold">
                    Start special sourcing <ArrowRight size={16} />
                  </Link>
                  <Link href="/contact" className="btn-pm btn-ghost-pm">
                    Upload an RFQ <Upload size={16} />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}