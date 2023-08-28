"use client";

//import Button from "@/components/button";
import { Button } from "@/components/ui/button";
import SecondButton from "@/components/ui/button2";
import { ChevronDownCircle, ChevronUpCircle } from "lucide-react";
import { useCount } from "@/hooks/use-count";

function Counter() {
  const { count, increase, decrease } = useCount();
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

export default Counter;
