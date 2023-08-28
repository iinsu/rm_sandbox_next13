import "./globals.css";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import ClientOnly from "@/components/clientOnly";
import Modal from "@/components/modal/modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RM Sandbox Next13",
  description: "Test Libraries",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <Modal title="Hello" isOpen actionLabel="Submit" />
          <Navbar />
        </ClientOnly>

        <div className="pb-20 pt-28 h-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
