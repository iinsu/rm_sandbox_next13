"use client";

//import Button from "@/components/button";
import { Button } from "@/components/ui/button";
import SecondButton from "@/components/ui/button2";
import { ChevronDownCircle, ChevronUpCircle } from "lucide-react";
import { create } from "zustand";

interface CountState {
  count: number;
  increase: () => void;
  decrease: () => void;
}

const useStore = create<CountState>()((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () =>
    set((state) => ({ count: state.count <= 0 ? 0 : state.count - 1 })),
}));

function Counter() {
  const { count, increase, decrease } = useStore();
  return (
    <div className="grid grid-cols-2 gap-x-3">
      <div>
        <div className="flex w-full bg-slate-100 justify-center">
          <span className="font-semibold text-lg py-4">{count}</span>
        </div>
        {/* <Button onClick={increase} label="One Up" disabled={false} /> */}
        <div className="flex gap-2 justify-center mt-2">
          <Button onClick={increase}>
            <ChevronUpCircle size={20} className="mr-1" /> One up
          </Button>
          <SecondButton onClick={decrease} className="flex items-center">
            <ChevronDownCircle size={20} className="mr-1" />
            One down
          </SecondButton>
        </div>
      </div>
      <div className="bg-red-500"></div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div>
        <h3>Home Page</h3>
        <Counter />
      </div>
    </>
  );
}
