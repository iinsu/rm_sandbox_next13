import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import ClientOnly from "@/components/clientOnly";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";
import getCurrentUser from "./actions/getCurrentUser";

const inter = Inter({ subsets: ["latin"] });

type User = {
  email: string;
  name: string;
  image?: string;
} | null;

export const metadata: Metadata = {
  title: "RM Sandbox Next13",
  description: "Test Libraries",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <Navbar currentUser={currentUser as User} />
        </ClientOnly>
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
