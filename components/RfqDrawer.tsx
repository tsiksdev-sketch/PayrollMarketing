"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, Send, Trash2, X, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useRfq,rfqToText } from "@/lib/rqt";
import { CONTACT } from "@/data/catalog";

export function RfqDrawer() {
  const { lines, open, setOpen, remove, setQty, clear, count } = useRfq();

  const body = encodeURIComponent(
    `Requirement schedule from the website RFQ basket:\n\n${rfqToText(lines)}\n\nDelivery location:\nRequired date:\nDocumentation required:`,
  );

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-60 bg-graphite/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          <motion.aside
            className="fixed top-0 right-0 z-61 flex h-full w-full max-w-md flex-col border-l-4 border-gold bg-card"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            role="dialog"
            aria-label="RFQ basket"
          >
            <div className="flex items-center justify-between border-b border-border p-5">
              <div>
                <span className="meta-label text-burgundy">RFQ basket</span>
                <h2 className="mt-1 text-[22px] leading-none">{count} line{count === 1 ? "" : "s"}</h2>
              </div>
              <button type="button" aria-label="Close RFQ basket" onClick={() => setOpen(false)} className="p-2">
                <X size={22} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              {lines.length === 0 ? (
                <p className="text-[15px] text-muted-foreground">
                  Your RFQ basket is empty. Browse products, add an unlisted requirement or upload a complete RFQ.
                </p>
              ) : (
                <ul className="divide-y divide-border">
                  {lines.map((l) => (
                    <motion.li key={l.id} layout className="py-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span className="meta-label text-labblue">{l.family}</span>
                          <p className="mt-1 text-[15px] font-semibold leading-tight">{l.name}</p>
                          <p className="mt-1 text-[12px] text-muted-foreground">{l.id}</p>
                        </div>
                        <button type="button" aria-label={`Remove ${l.name}`} onClick={() => remove(l.id)} className="p-1 text-muted-foreground hover:text-burgundy">
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <div className="mt-3 inline-flex items-center border border-border">
                        <button type="button" aria-label="Decrease quantity" onClick={() => setQty(l.id, l.qty - 1)} className="px-3 py-1.5 hover:bg-ivory">
                          <Minus size={13} />
                        </button>
                        <span className="min-w-10 text-center text-[14px] font-semibold">{l.qty}</span>
                        <button type="button" aria-label="Increase quantity" onClick={() => setQty(l.id, l.qty + 1)} className="px-3 py-1.5 hover:bg-ivory">
                          <Plus size={13} />
                        </button>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>

            <div className="space-y-3 border-t border-border p-5">
              <Link href="/request-a-quote" onClick={() => setOpen(false)} className="btn-pm btn-gold w-full">
                Request a quote <Send size={15} />
              </Link>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}?text=${body}`}
                target="_blank"
                rel="noreferrer"
                className="btn-pm btn-dark w-full"
              >
                WhatsApp the requirement <MessageCircle size={15} />
              </a>
              <a href={`mailto:${CONTACT.email}?subject=RFQ%20from%20website&body=${body}`} className="btn-pm btn-ghost-pm w-full">
                Email the schedule
              </a>
              {lines.length > 0 && (
                <button type="button" onClick={clear} className="w-full text-[12px] tracking-widest text-muted-foreground uppercase hover:text-burgundy">
                  Clear basket
                </button>
              )}
              <p className="text-[12px] text-muted-foreground">
                Availability, final specification, documentation, lead time and commercial terms are confirmed at
                quotation.
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
