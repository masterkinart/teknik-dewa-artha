"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="nav-wrap">
        <a href="#home" className="logo">
          TEKNIK DEWA ARTHA
        </a>
        <nav
          className="nav-links"
          style={
            open
              ? {
                  display: "flex",
                  flexDirection: "column",
                  position: "absolute",
                  top: "64px",
                  left: 0,
                  right: 0,
                  background: "#fff",
                  padding: "18px 24px",
                  borderBottom: "1px solid #c9d2db",
                }
              : undefined
          }
        >
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#legality">Legality</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="nav-cta">
          Get a Quote
        </a>
        <button
          className="menu-toggle"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
