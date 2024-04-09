import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Image from "next/image";



const figtree = Figtree({ 
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: "variable"
});

export const metadata: Metadata = {
  title: "Blog Preview Card",
  description: "David Agbaniyaka",
  icons: {
    icon: '/icon.png', // /public path
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"className={`${figtree.variable}`} >
      <body className="bg-yellow-1 font-figtree">
        {children}
      </body>
    </html>
  )
}