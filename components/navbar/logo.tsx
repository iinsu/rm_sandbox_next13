"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      alt="Logo"
      onClick={() => router.push("/")}
      height={100}
      width={100}
      src="/images/rmlogo.png"
    />
  );
};

export default Logo;
