import {
  ClipboardEdit,
  CreditCard,
  MousePointerSquare,
  ArrowDownSquare,
  AppWindow,
  ClipboardList,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Counter from "./components/counter";
import Link from "next/link";

function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <div className="flex items-center justify-center">
          <h3 className="my-5 text-3xl text-center">Home Page</h3>
        </div>
        <Counter />
        <div className=" w-[500px] flex justify-center bg-stone-100 mt-7 rounded-md p-5">
          <div className="grid justify-center grid-cols-3 gap-2 ">
            <Link href="/card">
              <Button className="w-full bg-indigo-500">
                <CreditCard size={20} className="mr-2" />
                Card
              </Button>
            </Link>
            <Link href="/button">
              <Button className="w-full bg-purple-600">
                <ArrowDownSquare size={20} className="mr-2" />
                Button
              </Button>
            </Link>
            <Link href="/textarea">
              <Button className="w-full">
                <ClipboardEdit size={20} className="mr-2" />
                Textarea
              </Button>
            </Link>
            <Link href="/dialog">
              <Button className="w-full">
                <MousePointerSquare size={20} className="mr-2" />
                Dialog
              </Button>
            </Link>
            <Link href="/tab">
              <Button className="w-full">
                <AppWindow size={20} className="mr-2" />
                Tab
              </Button>
            </Link>
            <Link href="/form">
              <Button className="w-full">
                <ClipboardList size={20} className="mr-2" />
                Form
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
