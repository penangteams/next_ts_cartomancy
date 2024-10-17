/** @format */

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BearState {
  bears: number;
  increaseBears: () => void;
  decreaseBears: () => void;
  removeAllBears: () => void;
}
interface SearchState {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}
export const useBearStore = create<BearState>()(
  persist(
    (set) => ({
      bears: 0,
      increaseBears: () => set((state) => ({ bears: state.bears + 1 })),
      decreaseBears: () => set((state) => ({ bears: state.bears - 1 })),
      removeAllBears: () => set({ bears: 0 }),
    }),
    {
      name: "bear store",
    }
  )
);

export const useSearchStore = create<SearchState>()(
  persist(
    (set) => ({
      searchTerm: "",
      setSearchTerm: (searchTerm: string) => set(() => ({ searchTerm })),
    }),
    {
      name: "search store",
    }
  )
);
