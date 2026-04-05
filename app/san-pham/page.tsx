"use client";

import { categories, getProductsByCategory } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { useState, useRef } from "react";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  function scrollToCategory(catId: string) {
    setActiveCategory(catId);
    const el = sectionRefs.current[catId];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        gap: 40,
        padding: "40px 24px",
      }}
    >
      {/* Sidebar */}
      <aside
        className="hidden md:block"
        style={{
          width: 200,
          flexShrink: 0,
          position: "sticky",
          top: 104,
          alignSelf: "flex-start",
        }}
      >
        <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollToCategory(cat.id)}
              style={{
                background:
                  activeCategory === cat.id ? "#f5f0eb" : "transparent",
                border: "none",
                textAlign: "left",
                padding: "10px 14px",
                fontSize: 13,
                fontWeight: activeCategory === cat.id ? 700 : 400,
                color: "#1a1a1a",
                cursor: "pointer",
                borderRadius: 4,
                transition: "all .2s",
                letterSpacing: 0.3,
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== cat.id)
                  e.currentTarget.style.background = "#faf7f4";
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat.id)
                  e.currentTarget.style.background = "transparent";
              }}
            >
              {cat.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile category dropdown */}
      <div className="md:hidden" style={{ width: "100%" }}>
        <select
          value={activeCategory}
          onChange={(e) => scrollToCategory(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 16px",
            fontSize: 14,
            fontWeight: 600,
            border: "1px solid #ddd",
            borderRadius: 4,
            marginBottom: 24,
            background: "#fff",
          }}
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Product sections */}
      <div style={{ flex: 1 }}>
        {categories.map((cat) => {
          const catProducts = getProductsByCategory(cat.id);
          return (
            <section
              key={cat.id}
              ref={(el) => { sectionRefs.current[cat.id] = el; }}
              style={{ marginBottom: 56, scrollMarginTop: 104 }}
            >
              <h2
                style={{
                  fontSize: 24,
                  fontWeight: 300,
                  letterSpacing: 2,
                  marginBottom: 28,
                  paddingBottom: 16,
                  borderBottom: "1px solid #e5e5e5",
                }}
              >
                {cat.name}
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fill, minmax(200px, 1fr))",
                  gap: 28,
                }}
              >
                {catProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
