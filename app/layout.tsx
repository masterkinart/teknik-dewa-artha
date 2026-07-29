import type { Metadata } from "next";
import "./globals.css";

const schema = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "PT. Teknik Dewa Artha",
  description:
    "Dewa Artha adalah toko alat industri Surabaya dan Sidoarjo yang menyediakan alat industri berkualitas, sparepart, gasket, fitting, valve, plat, pipa, dan komponen teknik.",
  telephone: "0856 4846 8999",
  email: "cvteknikdewaartha@yahoo.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "JL. H. Syukur III No. 60",
    addressLocality: "Sedati",
    addressRegion: "Jawa Timur",
    addressCountry: "ID",
  },
};

export const metadata: Metadata = {
  title: "PT. Teknik Dewa Artha - Toko Alat Industri Surabaya & Sidoarjo",
  description:
    "Dewa Artha adalah toko alat industri Surabaya dan Sidoarjo yang menyediakan alat industri berkualitas, sparepart, gasket, fitting, valve, plat, pipa, dan komponen teknik.",
  keywords: [
    "dewa artha",
    "toko alat industri",
    "alat industri surabaya",
    "alat industri sidoarjo",
    "jual alat industri",
    "sparepart industri",
    "alat teknik",
  ],
  openGraph: {
    title: "PT. Teknik Dewa Artha - Toko Alat Industri Surabaya & Sidoarjo",
    description:
      "Dewa Artha adalah toko alat industri Surabaya dan Sidoarjo yang menyediakan alat industri berkualitas, sparepart, gasket, fitting, valve, plat, pipa, dan komponen teknik.",
    siteName: "PT. Teknik Dewa Artha",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT. Teknik Dewa Artha - Toko Alat Industri Surabaya & Sidoarjo",
    description:
      "Dewa Artha adalah toko alat industri Surabaya dan Sidoarjo yang menyediakan alat industri berkualitas, sparepart, gasket, fitting, valve, plat, pipa, dan komponen teknik.",
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
