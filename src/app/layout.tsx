import type { Metadata } from "next";
import { syne, inter, jetbrainsMono } from "@/config/fonts";
import "@/styles/globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Affan Parkar | Portfolio",
  description: "Portfolio of Affan Parkar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        syne.variable,
        inter.variable,
        jetbrainsMono.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body>{children}</body>
    </html>
  );
}
