"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "products", "contact"];

    const handleScroll = () => {
      let closest = "home";
      let closestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;
        const rect = element.getBoundingClientRect();
        const distance = Math.abs(rect.top - 96);

        if (distance < closestDistance) {
          closestDistance = distance;
          closest = id;
        }
      });

      setActiveSection(closest);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <a href="#home" className={activeSection === "home" ? "active" : ""}>
            Home
          </a>
          <a href="#about" className={activeSection === "about" ? "active" : ""}>
            About
          </a>
          <a href="#products" className={activeSection === "products" ? "active" : ""}>
            Products
          </a>
          {/* <a href="#legality">Legality</a> */}
          <a href="#contact" className={activeSection === "contact" ? "active" : ""}>
            Contact
          </a>
        </nav>
        <a href="#contact" className="nav-cta">
          Butuh Bantuan
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
