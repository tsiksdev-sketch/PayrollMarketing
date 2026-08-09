"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Search, X, CornerDownLeft } from "lucide-react";
import { PRODUCTS, PRODUCT_CATEGORIES, INDUSTRIES, BRANDS } from "@/data/catalog";

type Hit = { label: string; group: string; sub: string; go: () => void };

export function SearchDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [q, setQ] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!open) setQ("");
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const hits = useMemo<Hit[]>(() => {
    const term = q.trim().toLowerCase();
    if (!term) return [];

    const out: Hit[] = [];

    for (const p of PRODUCTS) {
      const hay = `${p.name} ${p.id} ${p.family} ${p.brand} ${p.sectors.join(" ")}`.toLowerCase();
      if (hay.includes(term)) {
        out.push({
          label: p.name,
          group: "Product",
          sub: `${p.id} · ${p.family}`,
          go: () => router.push(`/product/${encodeURIComponent(p.id)}`),
        });
      }
    }

    for (const c of PRODUCT_CATEGORIES) {
      if (`${c.name} ${c.kicker} ${c.desc}`.toLowerCase().includes(term)) {
        out.push({
          label: c.name,
          group: "Product family",
          sub: c.kicker,
          go: () => router.push(`/family/${encodeURIComponent(c.slug)}`),
        });
      }
    }

    for (const i of INDUSTRIES) {
      if (`${i.name} ${i.tags.join(" ")}`.toLowerCase().includes(term)) {
        out.push({
          label: i.name,
          group: "Industry",
          sub: i.tags.slice(0, 3).join(" · "),
          go: () => router.push(`/industries/${encodeURIComponent(i.slug)}`),
        });
      }
    }

    for (const b of BRANDS) {
      if (`${b.name} ${b.scope}`.toLowerCase().includes(term)) {
        out.push({
          label: b.name,
          group: "Supply route",
          sub: b.scope,
          go: () => router.push(`/brands`),
        });
      }
    }

    return out.slice(0, 12);
  }, [q, router]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-70 flex items-start justify-center bg-graphite/75 p-4 pt-[12vh] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-2xl border-t-4 border-gold bg-card shadow-2xl"
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Search"
          >
            <div className="flex items-center gap-3 border-b border-border px-5">
              <Search size={18} className="text-burgundy" />
              {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search by product, application, brand, model or catalogue number"
                className="h-14 flex-1 bg-transparent text-[15px] outline-none"
              />
              <button
                type="button"
                aria-label="Close search"
                onClick={onClose}
                className="p-2 text-muted-foreground"
              >
                <X size={18} />
              </button>
            </div>

            <ul className="max-h-[52vh] overflow-y-auto">
              {hits.map((h, i) => (
                <li key={`${h.group}-${h.label}-${i}`}>
                  <button
                    type="button"
                    onClick={() => {
                      h.go();
                      onClose();
                    }}
                    className="group flex w-full items-center justify-between gap-4 border-b border-border px-5 py-3 text-left hover:bg-ivory"
                  >
                    <span>
                      <span className="meta-label text-labblue">{h.group}</span>
                      <span className="mt-1 block text-[15px] font-semibold leading-tight">{h.label}</span>
                      <span className="block text-[13px] text-muted-foreground">{h.sub}</span>
                    </span>
                    <CornerDownLeft
                      size={15}
                      className="shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </button>
                </li>
              ))}

              {q && hits.length === 0 && (
                <li className="px-5 py-8 text-[15px] text-muted-foreground">
                  No match in the representative portfolio. Not listed does not mean not available — send the
                  specification through special sourcing.
                </li>
              )}
            </ul>

            <div className="px-5 py-3 text-[12px] text-muted-foreground">
              Search covers product names, references, families, sectors and supply routes.
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}