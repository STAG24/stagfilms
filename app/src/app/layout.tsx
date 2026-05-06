import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-barlow",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "STAGFILMS — Transforming Ideas Into High-End Visuals",
  description:
    "STAGFILMS is a creative production house based in Yogyakarta, Indonesia. We transform ideas into high-end visuals through cinematography, photography, and brand storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${barlowCondensed.variable} ${dmSans.variable} ${spaceMono.variable}`}
    >
      <body className="bg-[#080808] text-white font-[family-name:var(--font-dm)] font-light overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
