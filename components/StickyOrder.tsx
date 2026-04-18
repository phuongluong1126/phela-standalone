"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function StickyOrder() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <Link
      href="/san-pham"
      className="sticky-order"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(20px)",
        transition: "opacity .3s ease, transform .3s ease",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 01-8 0"/>
      </svg>
      Đặt ngay
    </Link>
  );
}
