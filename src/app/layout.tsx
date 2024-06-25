import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MenuComponent from "@/components/MenuComponent";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata=():Metadata=>{
return {title:`Home`}
}

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <MenuComponent/>
      {children}
      </body>
    </html>
  );
}
