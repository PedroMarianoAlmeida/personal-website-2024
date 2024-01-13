import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pedro Programmer",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="coffee" className="scroll-smooth">
      <body className={`${inter.className} prose max-w-none`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
