import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aman Verma | Developer & Gen AI Enthusiast",
  description:
    "Portfolio of Aman Verma — BCA from Amity Patna (8.17 CGPA), MCA in Generative AI at SRM KTR. Web Developer, Java, Python & Gen AI specialist.",
  keywords: ["Aman Verma", "Portfolio", "Web Developer", "Gen AI", "SRM", "Amity Patna"],
  authors: [{ name: "Aman Verma" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
