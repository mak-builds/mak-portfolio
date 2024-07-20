import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppWrappers from "./AppWrapper";

export const metadata: Metadata = {
  title: "Mak-Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id={"root"}>
        <AppWrappers>{children}</AppWrappers>
      </body>
    </html>
  );
}
