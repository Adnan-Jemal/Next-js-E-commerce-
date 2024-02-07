import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import NavBar from "@/components/sections/NavBar";
import Footer from "@/components/sections/Footer";
import CartWrapper from "@/context/cartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce app",
  description: "Created by ADNAN",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartWrapper>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
        </CartWrapper>
      </body>
    </html>
  );
}
