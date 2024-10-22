import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@src/components/Header";
import Footer from "@src/components/Footer";

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
  title: "On Focus",
  description: "Servicios Informáticos y Desarrollo Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-gradient-to-r to-cyan-600 from-teal-500`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
