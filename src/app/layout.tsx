import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./fonts.css";
import CustomCursor from '../components/CustomCursor';

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "dprint - Decentralized 3D Printing Network",
  description: "Access a global network of 3D printers. Print anything, anywhere with our AI-powered platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/Roond-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </head>
      <body className={inter.variable}>
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
