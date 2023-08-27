"use client";

import Button from "@/components/button";
import { create } from "zustand";

interface CountState {
  count: number;
  increase: () => void;
}

const useStore = create<CountState>()((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
}));

function Counter() {
  const { count, increase } = useStore();
  return (
    <div>
      <div className="flex w-full bg-slate-100 justify-center">
        <span className="font-semibold text-lg py-4">{count}</span>
      </div>
      <Button onClick={increase} label="One Up" disabled={false} />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div>
        Home Page
        <Counter />
      </div>
    </>
  );
}
