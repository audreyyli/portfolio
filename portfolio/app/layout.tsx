import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Import your custom cursor
// Adjust this path to match your component's location
import CustomCursor from "../app/components/customercursor/customcursor";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Audrey Li",
  description: "Audrey Li Design Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* GLOBAL CUSTOM CURSOR */}
        <CustomCursor />

        {/* ALL PORTFOLIO PAGES */}
        {children}
      </body>
    </html>
  );
}
