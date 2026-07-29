"use client";

import { useState } from "react";

const categories = [
  "O Ring Viton Custom",
  "Packing Custom Non Asbeston & Asbestos",
  "Packing Rubber Lembaran & Custom",
  "Fitting Valve Besi",
  "Fitting Valve PVC",
  "Fitting Valve Stainless",
  "Fitting Valve Swagelok",
  "Spiral Wound Gasket",
  "Mix",
];

export default function ProductsSection() {
  const [active, setActive] = useState(0);

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
                key={cat}
                className={`cat-item${active === i ? " active" : ""}`}
                onClick={() => setActive(i)}
              >
                {cat}
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
              <div className="swatch">
                <svg width="70%" viewBox="0 0 60 60">
                  <circle cx="30" cy="30" r="24" fill="none" stroke="#c98a5a" strokeWidth="7" />
                </svg>
              </div>
              <div className="swatch">
                <svg width="70%" viewBox="0 0 60 60">
                  <circle cx="30" cy="30" r="24" fill="none" stroke="#8fa9c2" strokeWidth="7" />
                </svg>
              </div>
              <div className="swatch">
                <svg width="70%" viewBox="0 0 60 60">
                  <circle cx="30" cy="30" r="24" fill="none" stroke="#7fae8f" strokeWidth="7" />
                </svg>
              </div>
              <div className="swatch">
                <svg width="70%" viewBox="0 0 60 60">
                  <circle cx="30" cy="30" r="24" fill="none" stroke="#c9a25a" strokeWidth="7" />
                </svg>
              </div>
            </div>
            <div className="product-swatches">
              <div className="swatch">
                <svg width="80%" viewBox="0 0 60 60">
                  <rect x="10" y="26" width="40" height="8" rx="2" fill="#9aa7b3" />
                  <circle cx="30" cy="30" r="12" fill="none" stroke="#5b6b7c" strokeWidth="4" />
                </svg>
              </div>
              <div className="swatch">
                <svg width="80%" viewBox="0 0 60 60">
                  <rect x="10" y="26" width="40" height="8" rx="2" fill="#9aa7b3" />
                  <circle cx="30" cy="30" r="12" fill="none" stroke="#1c4d80" strokeWidth="4" />
                </svg>
              </div>
              <div className="swatch">
                <svg width="80%" viewBox="0 0 60 60">
                  <rect x="10" y="26" width="40" height="8" rx="2" fill="#9aa7b3" />
                  <circle cx="30" cy="30" r="12" fill="none" stroke="#5b6b7c" strokeWidth="4" />
                </svg>
              </div>
              <div className="swatch">
                <svg width="80%" viewBox="0 0 60 60">
                  <rect x="10" y="26" width="40" height="8" rx="2" fill="#9aa7b3" />
                  <rect x="22" y="18" width="16" height="24" rx="3" fill="#5b6b7c" />
                </svg>
              </div>
            </div>
            <div className="product-swatches">
              {[0, 1, 2, 3].map((i) => (
                <div className="swatch" key={i}>
                  <svg width="80%" viewBox="0 0 60 60">
                    <rect x="8" y="24" width="44" height="12" rx="6" fill="#aab5bf" />
                  </svg>
                </div>
              ))}
            </div>
            <div className="thumb-row">
              <div className="thumb">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6">
                  <path d="M3 21V9l9-6 9 6v12" />
                  <path d="M9 21v-6h6v6" />
                </svg>
              </div>
              <div className="thumb">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6">
                  <rect x="4" y="3" width="16" height="18" rx="2" />
                  <line x1="8" y1="8" x2="16" y2="8" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </div>
              <div className="thumb plain">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="9" />
                  <line x1="12" y1="7" x2="12" y2="17" />
                  <line x1="7" y1="12" x2="17" y2="12" />
                </svg>
              </div>
              <div className="thumb plain">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>
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
