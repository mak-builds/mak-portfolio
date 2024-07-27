import type { Metadata, Viewport } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import AppWrappers from "./AppWrapper";
import { GoogleAnalytics } from "@next/third-parties/google";

const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#colorHere",
};

export const metadata: Metadata = {
  title: "Personal portfolio",
  description:
    "This is my personal portfolio to showcase my skills and projects, It briefly describes the tecknologies I  work on.",
  robots: "index, follow",
  icons: {
    icon: "/logoblack.svg", // Path to your favicon
    apple: "/logoblack.svg", // Path to your Apple touch icon
  },
  openGraph: {
    title: "Personal portfolio",
    description:
      "This is my personal portfolio to showcase my skills and projects, It briefly describes the tecknologies I  work on.",
    url: "https://mak-portfolio.vercel.app/",
    siteName: "Mak's Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logoblack.svg" sizes="any" />
      </head>
      <body id={"root"} className={dmSans.className}>
        <AppWrappers>{children}</AppWrappers>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GAID || ""} />
      </body>
    </html>
  );
}
