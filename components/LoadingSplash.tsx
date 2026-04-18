"use client";

import { useState, useEffect } from "react";

export default function LoadingSplash() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 800);
    const hideTimer = setTimeout(() => setVisible(false), 1400);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#1B4332",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.6s ease-out",
        pointerEvents: fadeOut ? "none" : "auto",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://phela.vn/wp-content/uploads/2025/06/cropped-0-02-06-04d15c014b6c8bbe49941692f60a957bf65d7f7b1b37169564819407b23d60e9_ec49f8f5866ec0b.png"
        alt="Phê La"
        style={{ width: 160, objectFit: "contain", filter: "brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(5deg)", marginBottom: 16 }}
      />

      <p
        style={{
          color: "rgba(200, 169, 110, 0.8)",
          fontSize: "clamp(11px, 1.5vw, 14px)",
          letterSpacing: 5,
          marginTop: 0,
          fontFamily: "serif",
        }}
      >
        Nốt Hương Đặc Sản
      </p>

      <div style={{ marginTop: 48, position: "relative", width: 40, height: 40 }}>
        <div
          style={{
            width: 40,
            height: 40,
            border: "2px solid rgba(200, 169, 110, 0.2)",
            borderTop: "2px solid #C8A96E",
            borderRadius: "50%",
            animation: "splash-spin 0.9s linear infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes splash-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
