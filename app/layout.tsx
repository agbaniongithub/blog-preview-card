import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { PropsWithChildren } from "react";
import HomePage from "./page";

const figtree = Figtree({ 
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: "variable"
});

export const metadata: Metadata = {
  title: "Blog Preview Card",
  description: "David Agbaniyaka",
};

export default function RootLayout({children}:PropsWithChildren) {
  return (
    <html lang="en"className={`${figtree.variable}`}>
      <body className="bg-yellow-1 font-figtree">
        <HomePage />
      </body>
    </html>
  );
}
