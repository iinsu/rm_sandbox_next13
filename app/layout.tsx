import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import ClientOnly from "@/components/clientOnly";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";

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
          <Navbar />
        </ClientOnly>
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
