import type { Metadata, Viewport } from "next";
import { Space_Mono } from "next/font/google";
import "@/styles/globals.css";

const terminal = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-terminal",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Independent Design Practice",
    template: "%s | Independent Design Practice",
  },
  description:
    "An independent design and development practice shaping thoughtful digital experiences.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={terminal.variable}>
      <body>{children}</body>
    </html>
  );
}