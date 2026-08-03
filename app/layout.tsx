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
  metadataBase: new URL("https://teknikdewaartha.com"),
  title: {
    default: "Supplier Alat Industri Surabaya & Sidoarjo | CV. Teknik Dewa Artha",
    template: "%s | CV. Teknik Dewa Artha",
  },
  description:
    "Supplier alat industri terpercaya di Surabaya dan Sidoarjo: gasket spiral wound, o-ring viton, fitting valve, valve, bolt nut, plat, pipa, sparepart industri, dan solusi custom untuk kebutuhan manufaktur.",
  keywords: [
    "supplier alat industri Surabaya",
    "supplier alat industri Sidoarjo",
    "gasket spiral wound",
    "o ring viton",
    "fitting valve",
    "valve stainless",
    "bolt nut industri",
    "sparepart industri",
    "supplier gasket Surabaya",
    "jual gasket surabaya",
    "supplier komponen teknik",
  ],
  alternates: {
    canonical: "https://teknikdewaartha.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Supplier Alat Industri Surabaya & Sidoarjo | CV. Teknik Dewa Artha",
    description:
      "Supplier alat industri terpercaya di Surabaya dan Sidoarjo: gasket spiral wound, o-ring viton, fitting valve, valve, bolt nut, plat, pipa, sparepart industri, dan solusi custom untuk kebutuhan manufaktur.",
    url: "https://teknikdewaartha.com",
    siteName: "CV. Teknik Dewa Artha",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/hero-bg.jpeg",
        width: 1200,
        height: 630,
        alt: "CV. Teknik Dewa Artha - Supplier Alat Industri Surabaya Sidoarjo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Supplier Alat Industri Surabaya & Sidoarjo | CV. Teknik Dewa Artha",
    description:
      "Supplier alat industri terpercaya di Surabaya dan Sidoarjo: gasket spiral wound, o-ring viton, fitting valve, valve, bolt nut, plat, pipa, sparepart industri, dan solusi custom untuk kebutuhan manufaktur.",
    images: ["/hero-bg.jpeg"],
  },
  applicationName: "CV. Teknik Dewa Artha",
  category: "Business",
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
