"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X, Search, ArrowRight, Phone, Mail, ShoppingBag, ChevronDown } from "lucide-react";
import { CONTACT, PRODUCT_CATEGORIES, INDUSTRIES } from "@/data/catalog";
import { SearchDialog } from "@/components/SearchDialog";
import { useRfq } from "@/lib/rqt";

const NAV = [
  { to: "/products", label: "Products", mega: "products" as const },
  { to: "/industries", label: "Industries", mega: "industries" as const },
  { to: "/capex", label: "CAPEX & Projects" },
  { to: "/brands", label: "Brands & Supply Network" },
  { to: "/special-sourcing", label: "Special Sourcing" },
  { to: "/resources", label: "Resources" },
  { to: "/laboratory-setup", label: "Laboratory Setup" },
  { to: "/supplier-registration", label: "Supplier Registration" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [search, setSearch] = useState(false);
  const [mega, setMega] = useState<"products" | "industries" | null>(null);

  const { scrollY } = useScroll();
  const { count, setOpen: setRfqOpen } = useRfq();

  useMotionValueEvent(scrollY, "change", (v) => setCompact(v > 60));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearch(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 surface-dark">
      <motion.div
        className="overflow-hidden border-b border-white/10"
        animate={{ height: compact ? 0 : 36, opacity: compact ? 0 : 1 }}
        initial={false}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        <div className="container-pm flex h-9 items-center justify-between text-[11px] tracking-widest text-paper/60 uppercase">
          <div className="flex gap-6">
            <span>Established 1996</span>
            <span className="hidden sm:inline">Harare, Zimbabwe</span>
          </div>
          <div className="flex gap-6">
            <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2 hover:text-gold">
              <Phone size={12} /> {CONTACT.phone}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="hidden items-center gap-2 normal-case hover:text-gold md:flex"
            >
              <Mail size={12} /> {CONTACT.email}
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="container-pm flex items-center justify-between gap-5"
        animate={{ height: compact ? 62 : 76 }}
        initial={false}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <img
            src="/logo.png"
            alt="Payroll Marketing"
            className="h-section w-section object-contain"
            width={36}
            height={36}
          />
        {/*  <span className="leading-none">
            <span className="block font-display text-[16px] font-bold tracking-tight text-paper uppercase">
              Payroll Marketing
            </span>
            <span className="hidden text-[9.5px] tracking-[0.08em] text-paper/55 sm:block">
              Scientific, Laboratory &amp; Industrial Solutions
            </span>
          </span>*/}
        </Link>

        <nav
          className="hidden flex-1 items-center flex-wrap justify-center gap-3.5 lg:flex"
          onMouseLeave={() => setMega(null)}
        >
          {NAV.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              onMouseEnter={() => setMega((item as any).mega ?? null)}
              onFocus={() => setMega((item as any).mega ?? null)}
              className="group relative flex items-center gap-1 text-[11.5px] font-semibold whitespace-nowrap text-paper/80 transition-colors hover:text-gold [&.active]:text-gold xl:text-[12.5px]"
            >
              {item.label}
              {(item as any).mega && <ChevronDown size={12} className="opacity-60" />}
              <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5">
          <button
            type="button"
            onClick={() => setSearch(true)}
            aria-label="Search the portfolio"
            className="hidden items-center gap-2 border border-white/15 px-3 py-2 text-[11px] tracking-[0.08em] text-paper/70 uppercase transition-colors hover:border-gold hover:text-gold md:flex"
          >
            <Search size={15} /> Search
          </button>

          <button
            type="button"
            onClick={() => setSearch(true)}
            aria-label="Search the portfolio"
            className="p-2 text-paper/80 hover:text-gold md:hidden"
          >
            <Search size={18} />
          </button>

          <button
            type="button"
            onClick={() => setRfqOpen(true)}
            aria-label={`RFQ basket, ${count} lines`}
            className="relative p-2 text-paper/80 hover:text-gold"
          >
            <ShoppingBag size={19} />
            <AnimatePresence>
              {count > 0 && (
                <motion.span
                  key={count}
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.4, opacity: 0 }}
                  className="absolute top-0 right-0 flex h-4.5 min-w-4.5 items-center justify-center bg-gold px-1 font-display text-[10px] leading-none text-graphite"
                >
                  {count}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <Link
            href="/request-a-quote"
            className="btn-pm btn-gold hidden min-h-10.5! px-4! text-[11.5px]! sm:inline-flex"
          >
            Request a quote <ArrowRight size={15} />
          </Link>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="p-2 text-paper lg:hidden"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {mega && (
          <motion.div
            className="absolute inset-x-0 top-full hidden border-t border-white/10 bg-graphite/98 backdrop-blur lg:block"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => setMega(mega)}
            onMouseLeave={() => setMega(null)}
          >
            <div className="container-pm grid grid-cols-4 gap-x-8 gap-y-2 py-8">
              {(mega === "products" ? PRODUCT_CATEGORIES : INDUSTRIES).map((entry) => {
                const href =
                  mega === "products" ? `/family/${entry.slug}` : `/industries/${entry.slug}`;

                return (
                  <Link
                    key={entry.slug}
                    href={href}
                    onClick={() => setMega(null)}
                    className="group border-l border-white/10 py-1.5 pl-3 text-[13px] text-paper/70 transition-colors hover:border-gold hover:text-gold"
                  >
                    {entry.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {open && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-graphite lg:hidden">
          <div className="container-pm flex h-18 items-center justify-between">
            <span className="font-display text-lg text-paper uppercase">Menu</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="p-2 text-paper"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="container-pm flex flex-col divide-y divide-white/10 border-y border-white/10">
            {NAV.map((item) => (
              <Link
                key={item.to}
                href={item.to}
                onClick={() => setOpen(false)}
                className="py-4 text-[18px] font-semibold text-paper hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="container-pm mt-8 pb-12">
            <Link
              href="/request-a-quote"
              onClick={() => setOpen(false)}
              className="btn-pm btn-gold w-full"
            >
              Request a quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}

      <SearchDialog open={search} onClose={() => setSearch(false)} />
    </header>
  );
}