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
    footerText:
      "*BERAGAM JENIS O RING SEPERTI :O RING VITON, O RING NBR, O RING CUSTOM, SEAL MEMBRAN CUSTOM.",
  },
  {
    label: "Asbestos Tape & Fiber Tape",
    folder: "cat02",
    images: [
      "Asbestos Tape.webp",
      "Fiber Tape.jfif",
    ],
    footerText: "*BERAGAM JENIS TAPE :ASBESTOS TAPE, FIBER TAPE.",
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
    footerText:
      "*BERAGAM JENIS BAUT MUR :BAUT MUR FLUOROCARBON, BAUT MUR B7, NUT 2H, CUSTOM BAUT.",
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
    footerText:
      "*BERAGAM JENIS DAN MATERIAL FITTING DAN VALVE, SEPERTI :BALL VALVE, GLOBE VALVE, GATE VALVE, BUTTERFLY VALVE MATERIAL BESI DAN STAINLESS, ELBOW STAINLESS, TEE STAINLESS, ELBOW STAINLESS SCH 10, TEE STAINLESS SCH 40.",
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
    footerText:
      "*BERAGAM JENIS FITTING VALVE PVC :ELBOW PVC, TEE PVC, SOCK PVC, VALVE PVC, FITTING VALVE PVC SCH 80.",
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
    footerText:
      "*BERAGAM JENIS GASKET :KLINGRIT 1000, TOMBO 1995, TOMBO 1000, KLINGERSIL, CUSTOM FABRIKASI BENTUK FLANGE.",
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
    footerText:
      "*BERAGAM JENIS DAN MATERIAL PLASTIC ENGINEERING, SEPERTI :PTFE SHEET, PTFE ROD, PERTINAX SHEET, PERTINAX ROD, NOVOTEX SHEET, PP SHEET, PE SHEET, PU SHEET.",
  },
  {
    label: "Ring Copper & Tungsten Custom",
    folder: "cat08",
    images: [
      "COPPER CUSTOM.jfif",
      "TUNGSTEN.jpeg",
    ],
    footerText:
      "*BERAGAM JENIS DAN MATERIAL COPPER, SEPERTI :O RING COPPER, O RING COPPER CUSTOM, TUNGSTEN CUSTOM.",
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
    footerText:
      "*BERAGAM JENIS DAN MATERIAL SPIRAL WOUND SEPERTI :SPIRAL WOUND GASKET INNER OUTER STAINLESS, SPIRAL WOUND GASKET INNER OUTER BESI, SPIRAL WOUND GASKET BASIC, SWG IOR SS304, SWG IOR SS316.",
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
            <p className="panel-note">{selectedCategory.footerText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
