import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
// TS: allow side-effect CSS import when no type declarations are present
// @ts-ignore: Implicit any for stylesheet import
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "CV. Teknik Dewa Artha",
  description:
    "Dewa Artha adalah supplier alat industri Surabaya dan Sidoarjo yang menyediakan alat industri berkualitas, sparepart, gasket, fitting, valve, plat, pipa, dan komponen teknik.",
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
  title: "CV. Teknik Dewa Artha - Supplier Alat Industri Surabaya & Sidoarjo",
  description:
    "Dewa Artha adalah supplier alat industri Surabaya dan Sidoarjo yang menyediakan alat industri berkualitas, sparepart, gasket, fitting, valve, plat, pipa, dan komponen teknik.",
  keywords: [
    "supplier alat industri",
    "alat industri Surabaya",
    "alat industri Sidoarjo",
    "sparepart industri",
    "gasket spiral wound",
    "fitting valve",
    "o ring viton",
    "gasket packing",
  ],
  openGraph: {
    title: "CV. Teknik Dewa Artha - Supplier Alat Industri Surabaya & Sidoarjo",
    description:
      "Dewa Artha adalah supplier alat industri Surabaya dan Sidoarjo yang menyediakan alat industri berkualitas, sparepart, gasket, fitting, valve, plat, pipa, dan komponen teknik.",
    siteName: "CV. Teknik Dewa Artha",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV. Teknik Dewa Artha - Supplier Alat Industri Surabaya & Sidoarjo",
    description:
      "Dewa Artha adalah supplier alat industri Surabaya dan Sidoarjo yang menyediakan alat industri berkualitas, sparepart, gasket, fitting, valve, plat, pipa, dan komponen teknik.",
    images: ["/hero-bg.jpeg"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={plusJakarta.className}>{children}</body>
    </html>
  );
}
