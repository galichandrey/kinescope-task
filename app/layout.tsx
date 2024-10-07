import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nested List App",
  description: "Author: Andrey Galich",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
