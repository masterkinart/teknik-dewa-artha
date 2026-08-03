import type { Metadata } from "next";
// TS: allow side-effect CSS import when no type declarations are present
// @ts-ignore: Implicit any for stylesheet import
import "./globals.css";

const schema = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "CV. Teknik Dewa Artha",
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
  title: "CV. Teknik Dewa Artha - Toko Alat Industri Surabaya & Sidoarjo",
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
    "jual elbow pvc sidoarjo",
    "jual tee pvc sidoarjo",
    "jual sock pvc sidoarjo",
    "jual valve pvc sidoarjo",
    "jual fitting valve pvc sch 80 sidoarjo",
    "jual ball valve sidoarjo",
    "jual globe valve sidoarjo",
    "jual gate valve sidoarjo",
    "jual butterfly valve material besi dan stainless sidoarjo",
    "jual elbow stainless sidoarjo",
    "jual tee stainless sidoarjo",
    "jual elbow stainless sch 10 sidoarjo",
    "jual tee stainless sch 40 sidoarjo",
    "jual o ring viton sidoarjo",
    "jual o ring nbr sidoarjo",
    "jual o ring custom sidoarjo",
    "jual seal membran custom sidoarjo",
    "jual klingrit 1000 sidoarjo",
    "jual tombo 1995 sidoarjo",
    "jual tombo 1000 sidoarjo",
    "jual klingersil sidoarjo",
    "jual custom fabrikasi bentuk flange sidoarjo",
    "jual o ring copper sidoarjo",
    "jual o ring copper custom sidoarjo",
    "jual tungsten custom sidoarjo",
    "jual baut mur fluorocarbon sidoarjo",
    "jual baut mur b7 sidoarjo",
    "jual nut 2h sidoarjo",
    "jual custom baut sidoarjo",
    "jual ptfe sheet sidoarjo",
    "jual ptfe rod sidoarjo",
    "jual pertinax sheet sidoarjo",
    "jual pertinax rod sidoarjo",
    "jual novotex sheet sidoarjo",
    "jual pp sheet sidoarjo",
    "jual pe sheet sidoarjo",
    "jual pu sheet sidoarjo",
    "jual spiral wound gasket inner outer stainless sidoarjo",
    "jual spiral wound gasket inner outer besi sidoarjo",
    "jual spiral wound gasket basic sidoarjo",
    "jual swg ior ss304 sidoarjo",
    "jual swg ior ss316 sidoarjo",
    "jual asbestos tape sidoarjo",
    "jual fiber tape sidoarjo",
    "jual elbow pvc surabaya",
    "jual tee pvc surabaya",
    "jual sock pvc surabaya",
    "jual valve pvc surabaya",
    "jual fitting valve pvc sch 80 surabaya",
    "jual ball valve surabaya",
    "jual globe valve surabaya",
    "jual gate valve surabaya",
    "jual butterfly valve material besi dan stainless surabaya",
    "jual elbow stainless surabaya",
    "jual tee stainless surabaya",
    "jual elbow stainless sch 10 surabaya",
    "jual tee stainless sch 40 surabaya",
    "jual o ring viton surabaya",
    "jual o ring nbr surabaya",
    "jual o ring custom surabaya",
    "jual seal membran custom surabaya",
    "jual klingrit 1000 surabaya",
    "jual tombo 1995 surabaya",
    "jual tombo 1000 surabaya",
    "jual klingersil surabaya",
    "jual custom fabrikasi bentuk flange surabaya",
    "jual o ring copper surabaya",
    "jual o ring copper custom surabaya",
    "jual tungsten custom surabaya",
    "jual baut mur fluorocarbon surabaya",
    "jual baut mur b7 surabaya",
    "jual nut 2h surabaya",
    "jual custom baut surabaya",
    "jual ptfe sheet surabaya",
    "jual ptfe rod surabaya",
    "jual pertinax sheet surabaya",
    "jual pertinax rod surabaya",
    "jual novotex sheet surabaya",
    "jual pp sheet surabaya",
    "jual pe sheet surabaya",
    "jual pu sheet surabaya",
    "jual spiral wound gasket inner outer stainless surabaya",
    "jual spiral wound gasket inner outer besi surabaya",
    "jual spiral wound gasket basic surabaya",
    "jual swg ior ss304 surabaya",
    "jual swg ior ss316 surabaya",
    "jual asbestos tape surabaya",
    "jual fiber tape surabaya",
    "jual gasket surabaya",
    "jual Valve surabaya",
    "jual gasket surabaya",
    "jual packing surabaya",
  ],
  openGraph: {
    title: "CV. Teknik Dewa Artha - Toko Alat Industri Surabaya & Sidoarjo",
    description:
      "Dewa Artha adalah toko alat industri Surabaya dan Sidoarjo yang menyediakan alat industri berkualitas, sparepart, gasket, fitting, valve, plat, pipa, dan komponen teknik.",
    siteName: "CV. Teknik Dewa Artha",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV. Teknik Dewa Artha - Toko Alat Industri Surabaya & Sidoarjo",
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
