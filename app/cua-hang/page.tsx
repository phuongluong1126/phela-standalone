"use client";

import { stores } from "@/lib/data";
import { useState, useMemo } from "react";

export default function StoresPage() {
  const cities = useMemo(() => [...new Set(stores.map((s) => s.city))], []);
  const [selectedCity, setSelectedCity] = useState("all");

  const filtered = selectedCity === "all"
    ? stores
    : stores.filter((s) => s.city === selectedCity);

  return (
    <div>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #f5ebe0 0%, #e8d5c0 100%)", padding: "60px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, letterSpacing: 4, marginBottom: 12 }}>
          HỆ THỐNG CỬA HÀNG
        </h1>
        <p style={{ fontSize: 14, color: "#666" }}>
          {stores.length} cửa hàng trên toàn quốc
        </p>
      </section>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px" }}>
        {/* City filter */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32, justifyContent: "center" }}>
          <button
            onClick={() => setSelectedCity("all")}
            style={{
              padding: "8px 20px",
              fontSize: 13,
              fontWeight: selectedCity === "all" ? 700 : 400,
              background: selectedCity === "all" ? "#1a1a1a" : "#fff",
              color: selectedCity === "all" ? "#fff" : "#1a1a1a",
              border: "1px solid #ddd",
              borderRadius: 20,
              cursor: "pointer",
              transition: "all .2s",
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
                  padding: "8px 20px",
                  fontSize: 13,
                  fontWeight: selectedCity === city ? 700 : 400,
                  background: selectedCity === city ? "#1a1a1a" : "#fff",
                  color: selectedCity === city ? "#fff" : "#1a1a1a",
                  border: "1px solid #ddd",
                  borderRadius: 20,
                  cursor: "pointer",
                  transition: "all .2s",
                }}
              >
                {city} ({count})
              </button>
            );
          })}
        </div>

        {/* Count */}
        <p style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
          Hiển thị {filtered.length} cửa hàng
          {selectedCity !== "all" && ` tại ${selectedCity}`}
        </p>

        {/* Store cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
          {filtered.map((store) => (
            <div
              key={store.id}
              style={{
                background: "#fff",
                border: "1px solid #e8e0d8",
                borderRadius: 6,
                padding: 24,
                transition: "box-shadow .2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 10 }}>{store.name}</h3>
              <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6, marginBottom: 6 }}>
                📍 {store.address}
              </p>
              <p style={{ fontSize: 13, color: "#666", marginBottom: 6 }}>
                🏙️ {store.city}
              </p>
              <p style={{ fontSize: 13, marginBottom: store.description ? 6 : 0 }}>
                <a href={`tel:${store.phone.replace(/\s/g, "")}`} style={{ color: "#8B4513", fontWeight: 500 }}>
                  📞 {store.phone}
                </a>
              </p>
              {store.description && (
                <p style={{ fontSize: 12, color: "#999", fontStyle: "italic", marginTop: 8 }}>
                  {store.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
