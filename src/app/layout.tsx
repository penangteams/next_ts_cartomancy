/** @format */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Hydration from "@/contexts/hydration";
import { ThemeProvider } from "@/components/theme-provider";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
//import NavbarResp from "@/components/NavbarResp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Zustand Demo",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Hydration />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {/* <NavbarResp /> */}
          <main className="container min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
