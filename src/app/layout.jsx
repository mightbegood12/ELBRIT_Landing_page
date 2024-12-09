"use client";
import "./globals.css";
import { Jost, Roboto_Mono } from "next/font/google";
import Transition from "@/components/Transition";

export const jost = Jost({
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

export const roboto_mono = Roboto_Mono({
  weight: "400",
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${roboto_mono.variable} overflow-x-hidden scroll-smooth`}
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/icon.png"></link>
        <title>Elbrit Life Sciences</title>
      </head>
      <body>
        <Transition>{children}</Transition>
      </body>
    </html>
  );
}
