import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm"
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces"
});

export const metadata: Metadata = {
  title: {
    default: "Lawrence Academy | Curiosity. Character. Community.",
    template: "%s | Lawrence Academy"
  },
  description:
    "Lawrence Academy is a JK–12 independent school in Hartwell with a responsive Next.js site."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
