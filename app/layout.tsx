import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XFI Ecosystem - Conscious Expanded Existence",
  description: "Transcendent metaverse ecosystem with neural immersion and advanced tokenized economy across 30+ interconnected dimensions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
