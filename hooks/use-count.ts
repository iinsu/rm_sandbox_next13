import { create } from "zustand";

interface CountState {
  count: number;
  increase: () => void;
  decrease: () => void;
}

export const useCount = create<CountState>()((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () =>
    set((state) => ({ count: state.count <= 0 ? 0 : state.count - 1 })),
}));
