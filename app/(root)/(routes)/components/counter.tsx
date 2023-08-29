"use client";

//import Button from "@/components/button";
import { ChevronDownCircle, ChevronUpCircle } from "lucide-react";
import { useCount } from "@/hooks/use-count";

/* shadcn button */
import { Button } from "@/components/ui/button";
/* button */
import SecondButton from "@/components/ui/button2";

function Counter() {
  const { count, increase, decrease } = useCount();
  return (
    <div className="grid justify-center h-full">
      <div>
        <div className="flex justify-center rounded-md bg-slate-100">
          <span className="py-4 text-3xl font-semibold">{count}</span>
        </div>
        {/* <Button onClick={increase} label="One Up" disabled={false} /> */}
        <div className="grid grid-cols-2 gap-2 mt-2 ">
          <Button onClick={increase} variant="test">
            <ChevronUpCircle size={20} className="mr-1" /> One up
          </Button>
          <SecondButton onClick={decrease} className="flex items-center">
            <ChevronDownCircle size={20} className="mr-1" />
            One down
          </SecondButton>
        </div>
      </div>
    </div>
  );
}

export default Counter;
