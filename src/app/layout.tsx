import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import { AuthProvider } from "@/lib/auth";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ScanPulse - Barcode Inventory Management",
  description:
    "The barcode inventory app that replaces spreadsheets. Scan items in seconds, track stock in real-time, never run out again.",
  keywords: [
    "barcode",
    "inventory",
    "scanner",
    "stock management",
    "barcode label",
    "inventory app",
  ],
  openGraph: {
    title: "ScanPulse - Barcode Inventory Management",
    description:
      "Scan. Track. Reorder. The modern barcode inventory system for businesses of all sizes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}