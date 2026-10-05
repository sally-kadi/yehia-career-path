import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yehia's Career Path",
  description: "Yehia's career planning website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Link href="/">Home</Link>
          {" | "}
          <Link href="/plan">Plan</Link>
          {" | "}
          <Link href="/opportunities">Opportunities</Link>
          {" | "}
          <Link href="/dashboard">Dashboard</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}