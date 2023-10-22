import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stock Price Tracker",
  description: "Simple app to track stock prices",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="mb-10">
          <h1 className="text-center text-3xl">Mini Stock Price Tracker App</h1>
        </nav>
        {children}
      </body>
    </html>
  );
}
