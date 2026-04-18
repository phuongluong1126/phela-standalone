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
      <h1
        style={{
          color: "#C8A96E",
          fontSize: "clamp(36px, 6vw, 56px)",
          fontWeight: 300,
          letterSpacing: 10,
          margin: 0,
          fontFamily: "serif",
        }}
      >
        PHÊ LA
      </h1>

      <p
        style={{
          color: "rgba(200, 169, 110, 0.8)",
          fontSize: "clamp(11px, 1.5vw, 14px)",
          letterSpacing: 5,
          marginTop: 12,
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
