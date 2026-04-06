"use client";

import { create } from "zustand";

export type PersonFilter = "his" | "hers" | "both";

interface PersonStore {
  person: PersonFilter;
  setPerson: (person: PersonFilter) => void;
}

export const usePersonStore = create<PersonStore>((set) => ({
  person: "both",
  setPerson: (person) => set({ person }),
}));
