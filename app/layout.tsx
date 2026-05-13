import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AUKSAF",
    template: "%s | AUKSAF",
  },

  description:
    "AUKSAF — The Art of Essence. Modern luxury fragrance house crafting identity-driven perfumes.",

  keywords: [
    "AUKSAF",
    "perfume",
    "fragrance",
    "luxury perfumes",
    "attar",
    "oud",
    "modern fragrance house",
  ],

  authors: [{ name: "AUKSAF" }],

  openGraph: {
    title: "AUKSAF",
    description:
      "The Art of Essence — Luxury fragrance experience.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <body
        className={`
          ${cormorant.variable}
          ${inter.variable}
          bg-black
          text-white
          antialiased
          overflow-x-hidden
          selection:bg-[#c6a972]
          selection:text-black
          touch-pan-y
        `}
      >
        {children}
      </body>
    </html>
  );
}