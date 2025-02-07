import type { Metadata } from "next";
import "./globals.css";

import "@fontsource/inter";
import "@fontsource/jetbrains-mono";

export const metadata: Metadata = {
  title: "TIPSE",
  description: "Technical Interview Preparation for Software Engineers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
