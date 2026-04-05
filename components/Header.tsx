"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/san-pham", label: "SẢN PHẨM" },
  { href: "/ve-chung-toi", label: "CÂU CHUYỆN THƯƠNG HIỆU" },
  { href: "/tin-tuc", label: "TIN TỨC" },
  { href: "/cua-hang", label: "CỬA HÀNG" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{
        background: "#1a1a1a",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          height: 64,
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            color: "#fff",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          PHÊ LA
        </Link>

        {/* Desktop nav */}
        <nav
          style={{ display: "flex", gap: 32 }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: "#fff",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: 1.2,
                transition: "opacity .2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Cart + mobile toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Link
            href="#"
            style={{ color: "#fff", fontSize: 13, letterSpacing: 1 }}
          >
            Giỏ hàng 0
          </Link>
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              color: "#fff",
              background: "none",
              border: "none",
              fontSize: 24,
              cursor: "pointer",
            }}
            aria-label="Menu"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          className="md:hidden"
          style={{
            background: "#1a1a1a",
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                color: "#fff",
                fontSize: 14,
                letterSpacing: 1,
                borderBottom: "1px solid #333",
                paddingBottom: 12,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
