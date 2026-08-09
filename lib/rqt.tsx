"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export interface RfqLine {
  id: string;
  name: string;
  family: string;
  qty: number;
  note?: string;
}

interface RfqContext {
  lines: RfqLine[];
  count: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (line: Omit<RfqLine, "qty"> & { qty?: number }) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  setNote: (id: string, note: string) => void;
  clear: () => void;
}

const Ctx = createContext<RfqContext | null>(null);
const KEY = "pm-rfq-basket";

export function RfqProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<RfqLine[]>([]);
  const [open, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setLines(JSON.parse(raw) as RfqLine[]);
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(lines));
    } catch {
      /* ignore */
    }
  }, [lines, hydrated]);

  const add: RfqContext["add"] = useCallback((line) => {
    setLines((prev) => {
      const found = prev.find((l) => l.id === line.id);
      if (found)
        return prev.map((l) =>
          l.id === line.id ? { ...l, qty: l.qty + (line.qty ?? 1) } : l,
        );
      return [...prev, { ...line, qty: line.qty ?? 1 }];
    });
    setOpen(true);
  }, []);

  const value = useMemo<RfqContext>(
    () => ({
      lines,
      count: lines.reduce((n, l) => n + l.qty, 0),
      open,
      setOpen,
      add,
      remove: (id) => setLines((prev) => prev.filter((l) => l.id !== id)),
      setQty: (id, qty) =>
        setLines((prev) =>
          prev.map((l) => (l.id === id ? { ...l, qty: Math.max(1, qty) } : l)),
        ),
      setNote: (id, note) =>
        setLines((prev) => prev.map((l) => (l.id === id ? { ...l, note } : l))),
      clear: () => setLines([]),
    }),
    [lines, open, add],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useRfq() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useRfq must be used inside RfqProvider");
  return ctx;
}

export function rfqToText(lines: RfqLine[]) {
  return lines
    .map(
      (l, i) =>
        `${i + 1}. ${l.name} (${l.id}) — qty ${l.qty}${l.note ? ` — ${l.note}` : ""}`,
    )
    .join("\n");
}
