import "./globals.css";
import { Jost, Roboto_Mono } from "next/font/google";

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
    <html lang="en" className={`${jost.variable} ${roboto_mono.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/icon.png"></link>
        <title>Elbrit Life Sciences</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
