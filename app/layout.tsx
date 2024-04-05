import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI ART GENERATOR 🧑🏾‍🎨",
  description: "Ai Art Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
           <body className={manrope.className + "min-h-screen bg-stone-900 text-stone-100"}>
        {children}
      </body>
    </html>
  );
}
