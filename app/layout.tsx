import type { Metadata } from "next";
import "./reset.css";
import "./globals.css";
import Sidebar from "./ui/Sidebar";
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: "Nexus",
  description: "O sistema de gestão integrada do Departamento Regional do Acre",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={ inter.className }>
      <body>
        <Sidebar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
