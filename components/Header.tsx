"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/san-pham",  label: "THỰC ĐƠN" },
  { href: "/tin-tuc",   label: "STORIES" },
  { href: "/cua-hang",  label: "CỬA HÀNG" },
  { href: "/lien-he",   label: "LIÊN HỆ" },
  { href: "/khuyen-mai", label: "30.4 🇻🇳", campaign: true },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header style={{
      background: scrolled ? "rgba(17,17,17,.97)" : "#111",
      position: "sticky", top: 0, zIndex: 200,
      backdropFilter: scrolled ? "blur(14px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,.06)" : "none",
      transition: "background .3s ease",
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        display: "flex", alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px", height: 62,
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <Image
            src="https://phela.vn/wp-content/uploads/2025/06/cropped-0-02-06-04d15c014b6c8bbe49941692f60a957bf65d7f7b1b37169564819407b23d60e9_ec49f8f5866ec0b.png"
            alt="Phê La" width={46} height={46}
            style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex" style={{ display: "flex", gap: 24, alignItems: "center" }}>
          {navLinks.map((link) => {
            const active = pathname === link.href;
            if (link.campaign) {
              return (
                <Link key={link.href} href={link.href} style={{
                  color: "#fff", fontSize: 12, fontWeight: 800,
                  letterSpacing: 0.6,
                  background: "linear-gradient(135deg, var(--vn-red), #FF4438)",
                  padding: "7px 16px", borderRadius: 100,
                  display: "inline-flex", alignItems: "center", gap: 4,
                  whiteSpace: "nowrap",
                  transition: "transform .2s, box-shadow .2s",
                  boxShadow: "0 2px 10px rgba(218,37,29,.3)",
                }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 5px 16px rgba(218,37,29,.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 2px 10px rgba(218,37,29,.3)";
                  }}
                >
                  {link.label}
                </Link>
              );
            }
            return (
              <Link key={link.href} href={link.href} style={{
                color: active ? "#fff" : "rgba(255,255,255,.65)",
                fontSize: 12, fontWeight: active ? 700 : 400,
                letterSpacing: 1.2,
                transition: "color .2s",
                position: "relative", paddingBottom: 2,
              }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => { e.currentTarget.style.color = active ? "#fff" : "rgba(255,255,255,.65)"; }}
              >
                {link.label}
                {active && (
                  <span style={{
                    position: "absolute", bottom: -2, left: 0, right: 0,
                    height: 2, background: "var(--vn-yellow)", borderRadius: 1,
                  }} />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <Link href="/san-pham" style={{
            color: "rgba(255,255,255,.7)", fontSize: 12,
            display: "flex", alignItems: "center", gap: 6,
            transition: "color .2s",
          }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.7)")}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            <span className="hidden md:inline">Đặt hàng</span>
          </Link>
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            style={{ color: "#fff", background: "none", border: "none", fontSize: 22, cursor: "pointer", padding: 4 }}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Campaign ticker */}
      <div style={{
        background: "linear-gradient(90deg, var(--vn-red), #C01E18)",
        height: 30, overflow: "hidden", display: "flex", alignItems: "center",
      }}>
        <div className="marquee-track">
          {[...Array(8)].map((_, i) => (
            <span key={i} style={{
              color: "#fff", fontSize: 10, fontWeight: 700,
              letterSpacing: 2, padding: "0 28px",
              whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 10,
            }}>
              <span style={{ color: "var(--vn-yellow)" }}>★</span>
              30.4 — 1.5 · MỪNG NGÀY GIẢI PHÓNG · FREE TOPPING KHI ĐẶT ĐỒ UỐNG BẤT KỲ
            </span>
          ))}
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden" style={{
          background: "#111",
          padding: "8px 24px 20px",
          display: "flex", flexDirection: "column", gap: 0,
          borderTop: "1px solid #222",
        }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                color: link.campaign ? "var(--vn-yellow)" : "rgba(255,255,255,.85)",
                fontSize: 14,
                fontWeight: link.campaign ? 800 : 400,
                letterSpacing: 1,
                padding: "14px 0",
                borderBottom: "1px solid #1e1e1e",
                display: "flex", alignItems: "center", gap: 8,
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
