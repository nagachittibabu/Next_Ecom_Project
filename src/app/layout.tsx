"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CartProvider from "./contextAPI/cartProvider";
import ItemsProvider from "./contextAPI/ItemsProvider";
import UserProvider from "./contextAPI/UserDetails";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossOrigin="anonymous" referrerPolicy="no-referrer"></link>
      </head>
      <body className={inter.className}>
        <ItemsProvider>
          <UserProvider>
            {children}
          </UserProvider>
        </ItemsProvider>
      </body>
    </html>
  );
}
