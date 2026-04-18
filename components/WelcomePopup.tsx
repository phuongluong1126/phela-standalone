"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function WelcomePopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("phela-popup-dismissed");
    if (dismissed) return;
    const timer = setTimeout(() => setVisible(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  function close() {
    sessionStorage.setItem("phela-popup-dismissed", "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="popup-backdrop" onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
      <div className="popup-box">
        {/* Top strip */}
        <div style={{
          background: "linear-gradient(135deg, var(--green-deep), var(--green-mid))",
          padding: "28px 28px 20px",
          textAlign: "center",
          position: "relative",
        }}>
          {/* Close */}
          <button
            onClick={close}
            aria-label="Đóng"
            style={{
              position: "absolute", top: 12, right: 14,
              background: "rgba(255,255,255,.15)", border: "none",
              color: "#fff", fontSize: 18, width: 32, height: 32,
              borderRadius: "50%", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background .2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,.3)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,.15)")}
          >
            ✕
          </button>

          <div style={{ fontSize: 40, marginBottom: 8 }}>🍃</div>
          <p style={{
            fontSize: 11, fontWeight: 700, letterSpacing: 2.5,
            color: "rgba(255,255,255,.7)", marginBottom: 6,
          }}>
            CHÀO MỪNG ĐẾN PHÊ LA
          </p>
          <h2 style={{
            fontSize: "clamp(22px, 4vw, 30px)",
            fontWeight: 800, color: "#fff",
            lineHeight: 1.2, margin: 0,
          }}>
            Ưu đãi đặc biệt<br />
            <span style={{ color: "var(--vn-yellow)" }}>10% cho đơn đầu tiên</span>
          </h2>
        </div>

        {/* Body */}
        <div style={{ padding: "24px 28px 28px" }}>
          <p style={{
            fontSize: 14, color: "var(--text-body)",
            lineHeight: 1.7, textAlign: "center", marginBottom: 20,
          }}>
            Nhập email để nhận mã giảm giá <strong>10%</strong> cho lần đặt đồ uống đầu tiên tại Phê La.
            Cùng khám phá những hương vị đặc sản Việt Nam!
          </p>

          <form
            onSubmit={(e) => { e.preventDefault(); close(); }}
            style={{ display: "flex", flexDirection: "column", gap: 12 }}
          >
            <input
              type="email"
              placeholder="Nhập email của bạn"
              required
              style={{
                width: "100%", padding: "14px 16px",
                fontSize: 14, border: "1.5px solid #e0e0e0",
                borderRadius: 8, outline: "none",
                transition: "border-color .2s",
                fontFamily: "inherit",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "var(--green-mid)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "#e0e0e0")}
            />
            <button
              type="submit"
              className="btn btn-green"
              style={{ width: "100%", justifyContent: "center", fontSize: 13, letterSpacing: 1.5 }}
            >
              🎁 &nbsp;Nhận ưu đãi ngay
            </button>
          </form>

          <p style={{
            fontSize: 11, color: "var(--text-light)",
            textAlign: "center", marginTop: 14, lineHeight: 1.6,
          }}>
            Mã sẽ được gửi qua email. Áp dụng cho đơn trên 50.000đ.{" "}
            <button
              onClick={close}
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: "var(--green-mid)", fontWeight: 600, fontSize: 11,
                textDecoration: "underline", padding: 0,
              }}
            >
              Bỏ qua
            </button>
          </p>

          {/* Campaign teaser */}
          <div style={{
            marginTop: 16, padding: "12px 16px",
            background: "rgba(218,37,29,.06)",
            borderRadius: 8, borderLeft: "3px solid var(--vn-red)",
            display: "flex", alignItems: "center", gap: 10,
          }}>
            <span style={{ fontSize: 20 }}>🇻🇳</span>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, margin: 0, color: "var(--vn-red)" }}>
                30/4 – 1/5: FREE TOPPING!
              </p>
              <Link href="/khuyen-mai" onClick={close} style={{
                fontSize: 11, color: "var(--text-light)",
              }}>
                Xem chi tiết ưu đãi →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
