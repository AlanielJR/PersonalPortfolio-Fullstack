import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alaniel Ríos | Desarrollador Fullstack",
  description:
    "Desarrollador Fullstack en Panamá especializado en sitios web profesionales con Next.js, React y TypeScript.",
  keywords: "desarrollador web panama, freelancer web panama, next.js react panama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
