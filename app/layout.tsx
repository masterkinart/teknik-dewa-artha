import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PT. Teknik Dewa Artha — Solusi Rekayasa Industri Terpercaya",
  description:
    "Menyediakan komponen teknik berkualitas tinggi dan layanan rekayasa presisi untuk mendukung operasional industri manufaktur, pertambangan, dan energi di seluruh Indonesia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
