"use client";

import { ClipboardEdit } from "lucide-react";
import { Button } from "@/components/ui/button";
import Counter from "./components/counter";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col justify-center h-full bg-stone-300">
        <div className="flex items-center justify-center">
          <h3 className="my-5 text-3xl text-center">Home Page</h3>
          <Button className="ml-3" onClick={() => router.push("/board")}>
            <ClipboardEdit size={20} />
          </Button>
        </div>
        <Counter />
      </div>
    </>
  );
}
