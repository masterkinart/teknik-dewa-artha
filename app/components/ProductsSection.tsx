"use client";

import { useState } from "react";

const categories = [
  {
    label: "O Ring Viton Custom",
    folder: "cat01",
    images: [
      "O RING CUSTOM.jfif",
      "O RING RUBBER.jfif",
      "O RING VITON.jfif",
    ],
  },
  {
    label: "Asbestos Tape & Fiber Tape",
    folder: "cat02",
    images: [
      "Asbestos Tape.webp",
      "Fiber Tape.jfif",
    ],
  },
  {
    label: "Bolt & Nut",
    folder: "cat03",
    images: [
      "BAUT MUR BAJA B7 NUT 2H.jfif",
      "BAUT MUR BESI PUTIH.jfif",
      "BAUT MUR FLUROCARBON.jfif",
      "Baut Mur Stainless.jfif",
    ],
  },
  {
    label: "Fitting Valve Besi & Stainless",
    folder: "cat04",
    images: [
      "FITTING VALVE SWAGELOK.jfif",
      "FITTING VALVE.jfif",
      "VALVE BRASS.jfif",
      "VALVE.jfif",
    ],
  },
  {
    label: "Fitting Valve PVC",
    folder: "cat05",
    images: [
      "BUTERFLY PVC JM.jpg",
      "COUPLING SOCK PVC SCH80 SPEARS - Copy.jpg",
      "FITTING PVC.jfif",
      "FITTING VALVE PVC.jfif",
      "FLANGE PVC.jpg",
      "Flange WN PVC.JPG",
      "IMG-20150107-WA000.jpg",
      "SWING CHECK VALVE PVC.jpg",
      "VALVE PVC.jfif",
    ],
  },
  {
    label: "Packing Gasket",
    folder: "cat06",
    images: [
      "GASKET ASBESTOS.jfif",
      "GASKET PTFE.jfif",
      "GASKET RUBBER.jfif",
      "GLAND PACKING.jpg",
      "KLINGER SIL C-4500.gif",
      "TBA.jpg",
      "TOMBO 1000.jpg",
      "TOMBO 1935 NON ASBESTOS.jpg",
      "TOMBO1995.jpg",
      "WhatsApp Image 2026-07-13 at 09.21.47 (2).jpeg",
    ],
  },
  {
    label: "Plastic Engineering",
    folder: "cat07",
    images: [
      "NYLON ROD PA6.jfif",
      "PERTINAX ROD.jfif",
      "PERTINAX SHEET.jfif",
      "PLASTIC ENGINEERING SHEET.jfif",
      "PLASTIC ENGINEERING.jfif",
      "PP SHEET.jfif",
      "PTFE ROD.jfif",
    ],
  },
  {
    label: "Ring Copper & Tungsten Custom",
    folder: "cat08",
    images: [
      "COPPER CUSTOM.jfif",
      "TUNGSTEN.jpeg",
    ],
  },
  {
    label: "Spiral Wound Gasket",
    folder: "cat09",
    images: [
      "SPIRAL WOUND GASKET BASIC.jpeg",
      "SPIRAL WOUND GASKET.jfif",
      "Spiral Wound Gasket.jpg",
      "WhatsApp Image 2026-07-13 at 09.27.16 (1).jpeg",
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
