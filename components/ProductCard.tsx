"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Plus } from "lucide-react";
import { useState } from "react";
import { IMAGES, classificationTone, type Product } from "@/data/catalog";
import { useRfq } from "@/lib/rqt";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useRfq();
  const [added, setAdded] = useState(false);

  return (
    <motion.article
      className="group flex flex-col border border-border bg-card transition-colors hover:border-gold"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <div className="img-zoom relative aspect-16/10">
        <img
          src={IMAGES[product.image]}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <span
          className={`tag-pm absolute top-3 left-3 border-none bg-graphite/85 ${classificationTone(product.classification)}`}
        >
          {product.classification}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="meta-label text-labblue">{product.family}</span>
        <h3 className="mt-2 text-[19px] leading-tight">{product.name}</h3>
        <p className="mt-3 line-clamp-3 text-[15px] text-muted-foreground">
          {product.description}
        </p>

        <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-border pt-4 text-[13px]">
          <Spec label="Reference" value={product.id} />
          <Spec label="Brand route" value={product.brand} />
          <Spec label="Configuration" value={product.pack} />
        </dl>

        <div className="mt-5 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => {
              add({ id: product.id, name: product.name, family: product.family });
              setAdded(true);
              window.setTimeout(() => setAdded(false), 1600);
            }}
            className="btn-pm btn-dark h-11 min-h-11 hidden text-[11px]"
          >
            {added ? (
              <>
                Added <Check size={14} />
              </>
            ) : (
              <>
                Add to RFQ <Plus size={14} />
              </>
            )}
          </button>

          <Link
            href={`/product/${product.id}`}
            className="flex items-center gap-1.5 text-[14px] font-semibold text-burgundy hover:text-gold"
          >
            View details <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="meta-label">{label}</dt>
      <dd className="mt-1 text-[13px] text-foreground/80">{value}</dd>
    </div>
  );
}