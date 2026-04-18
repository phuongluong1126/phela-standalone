"use client";

import { stores, storeHours } from "@/lib/data";
import { useState, useMemo } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function StoresPage() {
  const cities = useMemo(() => [...new Set(stores.map((s) => s.city))], []);
  const [selectedCity, setSelectedCity] = useState("all");

  const filtered = selectedCity === "all" ? stores : stores.filter((s) => s.city === selectedCity);

  return (
    <div>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(160deg, var(--green-deep) 0%, var(--green-mid) 60%, #1A3D28 100%)",
        padding: "88px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 50% 0%, rgba(196,154,108,.12) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        <div style={{ position: "relative" }}>
          <span className="badge badge-yellow" style={{ display: "inline-flex", marginBottom: 16, fontSize: 11 }}>
            📍 {stores.length} CỬA HÀNG TOÀN QUỐC
          </span>
          <h1 style={{
            fontSize: "clamp(28px, 5vw, 52px)",
            fontWeight: 900, color: "#fff",
            marginBottom: 12, lineHeight: 1.1,
          }}>
            Tìm cửa hàng<br />gần bạn
          </h1>
          <p style={{
            fontSize: "clamp(14px, 1.8vw, 17px)",
            color: "rgba(255,255,255,.7)",
            maxWidth: 460, margin: "0 auto",
            lineHeight: 1.8,
          }}>
            Phê La có mặt tại {cities.length} thành phố — từ Hà Nội, Đà Nẵng đến TP.HCM.
          </p>
        </div>
      </section>

      {/* Hours banner */}
      <div style={{
        background: "var(--beige-warm)",
        padding: "18px 24px",
        textAlign: "center",
        borderBottom: "1px solid rgba(196,154,108,.3)",
      }}>
        <p style={{ fontSize: 14, color: "var(--brown-dark)", fontWeight: 600, margin: 0 }}>
          🕐 Giờ mở cửa: <strong>{storeHours}</strong> &nbsp;·&nbsp; 📞 Hotline: <a href="tel:19003013" style={{ color: "var(--green-mid)", fontWeight: 700 }}>1900 3013</a>
        </p>
      </div>

      {/* Map embed */}
      <section style={{ background: "#fff" }}>
        <div style={{ position: "relative", width: "100%", height: "clamp(280px, 45vw, 480px)" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.2!2d105.841!3d21.028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab96b5b1c9bd%3A0x6a01ee70feda2a90!2zUGjDqiBMYQ!5e0!3m2!1svi!2svn!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bản đồ cửa hàng Phê La"
          />
          <div style={{
            position: "absolute", top: 12, right: 12,
            background: "#fff", borderRadius: 8, padding: "8px 14px",
            boxShadow: "0 4px 16px rgba(0,0,0,.12)",
            fontSize: 13, fontWeight: 600, color: "var(--green-deep)",
          }}>
            📍 {stores.length} cửa hàng
          </div>
        </div>
        <div style={{ textAlign: "center", padding: "14px 24px 0" }}>
          <a
            href="https://maps.google.com/?q=Phê+La+Hà+Nội"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 13, fontWeight: 700, color: "var(--green-mid)" }}
          >
            🗺 Mở bản đồ đầy đủ →
          </a>
        </div>
      </section>

      {/* Campaign reminder */}
      <div style={{
        background: "linear-gradient(135deg, var(--vn-red), var(--vn-red-dark))",
        padding: "20px 24px",
        textAlign: "center",
      }}>
        <p style={{ color: "#fff", fontSize: 14, fontWeight: 600, margin: 0 }}>
          🇻🇳 &nbsp;30/4 – 1/5: <strong style={{ color: "var(--vn-yellow)" }}>FREE TOPPING</strong> tại tất cả cửa hàng Phê La
          &nbsp;·&nbsp;
          <Link href="/khuyen-mai" style={{ color: "var(--vn-yellow)", fontWeight: 700, textDecoration: "underline" }}>
            Xem chi tiết
          </Link>
        </p>
      </div>

      {/* Store list */}
      <section style={{ padding: "52px 24px 80px", background: "var(--beige-pale)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* City filter */}
          <ScrollReveal>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36, justifyContent: "center" }}>
              <button
                onClick={() => setSelectedCity("all")}
                style={{
                  padding: "9px 20px", fontSize: 13, fontWeight: selectedCity === "all" ? 700 : 500,
                  borderRadius: 100, border: "none", cursor: "pointer", transition: "all .2s",
                  background: selectedCity === "all" ? "var(--green-mid)" : "#fff",
                  color: selectedCity === "all" ? "#fff" : "var(--text-body)",
                  boxShadow: selectedCity === "all" ? "0 4px 14px rgba(46,107,69,.3)" : "0 1px 4px rgba(0,0,0,.08)",
                }}
              >
                Tất cả ({stores.length})
              </button>
              {cities.map((city) => {
                const count = stores.filter((s) => s.city === city).length;
                return (
                  <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    style={{
                      padding: "9px 20px", fontSize: 13,
                      fontWeight: selectedCity === city ? 700 : 500,
                      borderRadius: 100, border: "none", cursor: "pointer", transition: "all .2s",
                      background: selectedCity === city ? "var(--green-mid)" : "#fff",
                      color: selectedCity === city ? "#fff" : "var(--text-body)",
                      boxShadow: selectedCity === city ? "0 4px 14px rgba(46,107,69,.3)" : "0 1px 4px rgba(0,0,0,.08)",
                    }}
                  >
                    {city} ({count})
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          <p style={{ fontSize: 13, color: "var(--text-light)", marginBottom: 28, textAlign: "center" }}>
            Hiển thị <strong>{filtered.length}</strong> cửa hàng
            {selectedCity !== "all" && ` tại ${selectedCity}`}
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 18,
          }}>
            {filtered.map((store, i) => (
              <ScrollReveal key={store.id} delay={(i % 6) * 60}>
                <div className="card-hover" style={{
                  background: "#fff",
                  borderRadius: 14,
                  padding: "20px 22px",
                  border: "1px solid var(--beige-warm)",
                }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10 }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--green-deep)", margin: 0, lineHeight: 1.4, flex: 1 }}>
                      {store.name}
                    </h3>
                    <span className="badge badge-green" style={{ fontSize: 9, flexShrink: 0, marginLeft: 8 }}>
                      {store.city}
                    </span>
                  </div>
                  <p style={{ fontSize: 13, color: "var(--text-body)", lineHeight: 1.6, marginBottom: 8 }}>
                    📍 {store.address}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <a href={`tel:${store.phone.replace(/\s/g, "")}`}
                      style={{ fontSize: 13, color: "var(--green-mid)", fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
                      📞 {store.phone}
                    </a>
                    <span style={{ fontSize: 11, color: "var(--text-light)" }}>🕐 {storeHours.split(" ")[0]} – {storeHours.split("–")[1]?.trim().split(" ")[0]}</span>
                  </div>
                  {store.description && (
                    <p style={{ fontSize: 12, color: "var(--brown-mid)", fontStyle: "italic", marginTop: 8, padding: "8px 10px", background: "var(--beige-pale)", borderRadius: 6 }}>
                      ✨ {store.description}
                    </p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
