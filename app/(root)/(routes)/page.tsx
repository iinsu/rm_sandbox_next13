"use client";

import Counter from "./components/counter";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center h-full bg-stone-300">
        <h3 className="my-5 text-3xl text-center">Home Page</h3>
        <Counter />
      </div>
    </>
  );
}
