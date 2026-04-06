"use client";

import { create } from "zustand";
import { bills as initialBills, type Bill } from "@/lib/mock-data/bills";

interface BillsStore {
  bills: Bill[];
  togglePaid: (id: string) => void;
}

export const useBillsStore = create<BillsStore>((set) => ({
  bills: initialBills,
  togglePaid: (id) =>
    set((state) => ({
      bills: state.bills.map((b) =>
        b.id === id
          ? { ...b, status: b.status === "paid" ? "upcoming" : "paid" }
          : b
      ),
    })),
}));
