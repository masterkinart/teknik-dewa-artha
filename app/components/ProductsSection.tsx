"use client";

import { useState } from "react";

const categories = [
  {
    label: "O Ring Viton Custom",
    folder: "cat01",
    images: [
      "1a.jpeg",
      "1b.jpeg",
      "1c.jpeg",
      "1d.jpeg",
      "1e.jpeg",
      "1f.jpeg",
      "1g.jpeg",
      "1h.jpeg",
    ],
  },
  {
    label: "Packing Custom Non Asbeston & Asbestos",
    folder: "cat02",
    images: [
      "ASBES ROPE.jpg",
      "ASBESTOS TAPE.jpg",
      "everlasting carbflon.jpg",
      "GASKET TOMBO 1995.JPG",
      "GLAND PACKING GRAPHITE TEFLON.jpg",
      "GLAND PACKING.jpg",
      "KLINGER SIL C-4500.gif",
      "PACKING GASKET TOMBO 1303.jpg",
      "PACKING TOMBO.JPG",
      "TBA.jpg",
      "TOMBO 1000.jpg",
      "TOMBO 1935 NON ASBESTOS.jpg",
      "TOMBO1995.jpg",
      "WhatsApp Image 2026-07-13 at 09.21.47 (2).jpeg",
      "WhatsApp Image 2026-07-13 at 09.21.55 (1).jpeg",
      "WhatsApp Image 2026-07-13 at 09.27.12.jpeg",
      "WhatsApp Image 2026-07-13 at 09.27.19.jpeg",
      "WhatsApp Image 2026-07-13 at 09.27.20 (2).jpeg",
    ],
  },
  {
    label: "Packing Rubber Lembaran & Custom",
    folder: "cat03",
    images: [
      "Karet Viton.jpg",
      "packing karet.jpg",
      "SEAL MEMBRAN.jpeg",
      "WhatsApp Image 2026-07-13 at 09.27.10 (1).jpeg",
      "WhatsApp Image 2026-07-13 at 09.27.11 (1).jpeg",
      "WhatsApp Image 2026-07-13 at 09.27.12 (2).jpeg",
      "WhatsApp Image 2026-07-13 at 09.27.13 (1).jpeg",
      "WhatsApp Image 2026-07-13 at 09.27.14.jpeg",
      "WhatsApp Image 2026-07-13 at 09.27.15 (1).jpeg",
      "WhatsApp Image 2026-07-13 at 09.27.18 (1).jpeg",
      "WhatsApp Image 2026-07-13 at 09.27.21 (1).jpeg",
    ],
  },
  {
    label: "Fitting Valve Besi",
    folder: "cat04",
    images: [
      "ANSI 150 THREAD - Copy.jpg",
      "ANSI 300 galv RZ - Copy.JPG",
      "BENKAN SCH 80 RZS  - Copy.jpg",
      "BLIND FLANGE PN 10 24 in RZ - Copy.JPG",
      "BUTTERFLY CI DISC SS.JPG",
      "Butterfly valve .JPG",
      "SOCKET 3000.pg.jpg",
      "Straight Tee 3000.jpg",
      "TEE & ELBOW 90 DEg.jpg",
      "THREDOLET CLASS3000.jpg",
      "water mur.jpg",
      "WhatsApp Image 2026-07-13 at 09.27.20 (1).jpeg",
      "WhatsApp Image 2026-07-13 at 09.27.20.jpeg",
    ],
  },
  {
    label: "Fitting Valve PVC",
    folder: "cat05",
    images: [
      "BUTERFLY PVC JM.jpg",
      "COUPLING SOCK PVC SCH80 SPEARS - Copy.jpg",
      "FLANGE PVC.jpg",
      "Flange WN PVC.JPG",
      "IMG-20150107-WA000.jpg",
      "SWING CHECK VALVE PVC.jpg",
    ],
  },
  {
    label: "Fitting Valve Stainless",
    folder: "cat06",
    images: [
      "ball valve 3 pc.jpg",
      "BALL VALVE 3.jpg",
      "BALL VALVE TC 2PC BODY RSZ.jpg",
      "BALL VALVE TC 4 IN RSZ.jpg",
      "Butterfly Valve All Stainless.jpg",
      "Butterfly Valve sanitary.jpg",
      "DOUBLE NEPPLE SS 304 .jpg",
      "FLANGE.jpg",
      "TEE RICON RZS.JPG",
      "WNRF ANSI 150.jpg",
    ],
  },
  {
    label: "Fitting Valve Swagelok",
    folder: "cat07",
    images: [
      "WhatsApp Image 2026-07-13 at 09.27.17 (3).jpeg",
      "WhatsApp Image 2026-07-13 at 09.27.18.jpeg",
      "WhatsApp Image 2026-07-13 at 09.27.19 (1).jpeg",
    ],
  },
  {
    label: "Spiral Wound Gasket",
    folder: "cat08",
    images: [
      "IMG20211209110517.jpg",
      "Spiral Wound Gasket.jpg",
      "SWG BASIC GRP1.jpg",
      "WhatsApp Image 2026-07-13 at 09.21.54 (1).jpeg",
      "WhatsApp Image 2026-07-13 at 09.21.54.jpeg",
      "WhatsApp Image 2026-07-13 at 09.21.55 (2).jpeg",
      "WhatsApp Image 2026-07-13 at 09.27.11 (2).jpeg",
      "WhatsApp Image 2026-07-13 at 09.27.12 (1).jpeg",
      "WhatsApp Image 2026-07-13 at 09.27.14 (1).jpeg",
      "WhatsApp Image 2026-07-13 at 09.27.14 (2).jpeg",
      "WhatsApp Image 2026-07-13 at 09.27.15 (2).jpeg",
      "WhatsApp Image 2026-07-13 at 09.27.16 (1).jpeg",
      "WhatsApp Image 2026-07-13 at 09.27.16.jpeg",
      "WhatsApp Image 2026-07-13 at 09.27.17 (1).jpeg",
      "WhatsApp Image 2026-07-13 at 09.27.17 (2).jpeg",
      "WhatsApp Image 2026-07-13 at 09.27.19 (2).jpeg",
      "WhatsApp Image 2026-07-13 at 09.27.20 (3).jpeg",
      "WhatsApp Image 2026-07-13 at 09.27.21.jpeg",
      "WhatsApp Image 2026-07-13 at 09.28.28 (2).jpeg",
    ],
  },
  {
    label: "Mix",
    folder: "cat09",
    images: [
      "BAUT MUR FLUROCARBON.jfif",
      "Baut Mur Stainless.jfif",
      "Isowool Ceramic Blanket.JPG",
      "PTFE SHEET.jpg",
      "SIZE CLAMP H BEAM.jpeg",
      "WhatsApp Image 2026-07-13 at 09.21.48 (2).jpeg",
      "WhatsApp Image 2026-07-13 at 09.21.52 (2).jpeg",
      "WhatsApp Image 2026-07-13 at 09.21.54 (2).jpeg",
      "WhatsApp Image 2026-07-13 at 09.28.28 (1).jpeg",
      "WhatsApp Image 2026-07-13 at 09.28.28.jpeg",
    ],
  },
];

export default function ProductsSection() {
  const [active, setActive] = useState(0);
  const selectedCategory = categories[active];

  return (
    <section id="products">
      <div className="container">
        <div className="products-head">
          <div>
            <h2>Kategori Produk</h2>
            <p>Pilihan komponen industri terlengkap untuk kebutuhan operasional Anda.</p>
          </div>
          <span className="products-tag">Precision Engineered Components</span>
        </div>
        <div className="products-grid">
          <div className="cat-list">
            {categories.map((cat, i) => (
              <div
                key={cat.label}
                className={`cat-item${active === i ? " active" : ""}`}
                onClick={() => setActive(i)}
              >
                {cat.label}
                {i > 0 && <span>›</span>}
              </div>
            ))}
          </div>
          <div className="product-panel">
            <div className="panel-head">
              <h3>Gasket &amp; Sealing Solutions</h3>
              <a href="#contact" className="btn-navy-sm">
                View Full Catalog
              </a>
            </div>
            <div className="product-swatches">
              {selectedCategory.images.map((image) => (
                <div className="swatch" key={image}>
                  <img
                    src={encodeURI(`/${selectedCategory.folder}/${image}`)}
                    alt={`${selectedCategory.label} - ${image.replace(/\.[^/.]+$/, "")}`}
                  />
                </div>
              ))}
            </div>
            <p className="panel-note">
              * Showing featured items. Over 20+ variations available in our full catalog.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
