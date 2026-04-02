import { create } from "zustand";
import { transactions as mockData } from "../data/mockData";

export const useStore = create((set) => ({
  transactions: mockData,
  role: "viewer",
  filter: "",

  setRole: (role) => set({ role }),
  setFilter: (filter) => set({ filter }),

  addTransaction: (tx) =>
    set((state) => ({
      transactions: [...state.transactions, tx],
    })),
}));
