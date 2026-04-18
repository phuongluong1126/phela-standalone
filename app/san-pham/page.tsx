"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import {
  categories, products, formatPrice,
  getProductsByCategory, bestSellerIds, summerIds, oolongIds, coffeeIds,
  type Product,
} from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";

/* ─── Tab definitions ─── */
type TabId = "best-seller" | "oolong" | "ca-phe" | "mua-he" | "all";
const tabs: { id: TabId; label: string; emoji: string }[] = [
  { id: "best-seller", label: "Best Seller",   emoji: "🔥" },
  { id: "oolong",      label: "Trà Oolong",    emoji: "🍵" },
  { id: "ca-phe",      label: "Cà phê",        emoji: "☕" },
  { id: "mua-he",      label: "Mùa hè",        emoji: "☀️" },
  { id: "all",         label: "Tất cả",        emoji: "📋" },
];

function getTabProducts(tab: TabId): Product[] {
  switch (tab) {
    case "best-seller": return products.filter((p) => bestSellerIds.includes(p.id));
    case "oolong":      return products.filter((p) => oolongIds.includes(p.id));
    case "ca-phe":      return products.filter((p) => coffeeIds.includes(p.id));
    case "mua-he":      return products.filter((p) => summerIds.includes(p.id));
    default:            return [];
  }
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="drink-card" style={{
      borderRadius: 16, overflow: "hidden",
      background: "#fff",
      boxShadow: "0 2px 14px rgba(31,77,46,.06)",
      cursor: "pointer",
      display: "flex", flexDirection: "column",
    }}>
      <div className="img-zoom" style={{ position: "relative", width: "100%", aspectRatio: "3/4" }}>
        {product.image ? (
          <Image src={product.image} alt={product.name} fill className="img-zoom-inner"
            style={{ objectFit: "cover" }} sizes="(max-width:768px) 50vw, 200px" />
        ) : (
          <div style={{
            width: "100%", height: "100%",
            background: "var(--beige-warm)", display: "flex",
            alignItems: "center", justifyContent: "center", fontSize: 36,
          }}>🧋</div>
        )}
        <div style={{ position: "absolute", top: 8, left: 8, display: "flex", gap: 4, flexWrap: "wrap" }}>
          {product.hot     && <span className="tag-hot">🔥 Hot</span>}
          {product.holiday && <span className="tag-vn">🇻🇳 Dịp lễ</span>}
          {product.summer  && <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 4, background: "rgba(0,168,150,.15)", color: "var(--summer-teal)" }}>☀️ Hè</span>}
        </div>
      </div>
      <div style={{ padding: "13px 15px 17px", flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
        <h3 style={{ fontSize: 13, fontWeight: 700, margin: 0, lineHeight: 1.4 }}>{product.name}</h3>
        {product.desc && <p style={{ fontSize: 11, color: "var(--text-light)", margin: 0, lineHeight: 1.5 }}>{product.desc}</p>}
        <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 8 }}>
          <span style={{ fontSize: 14, fontWeight: 800, color: "var(--green-mid)" }}>{formatPrice(product.price)}</span>
          <Link href="#" style={{ fontSize: 11, color: "var(--vn-red)", fontWeight: 700 }}>Đặt ngay</Link>
        </div>
      </div>
    </div>
  );
}

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState<TabId>("best-seller");
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const tabProducts = activeTab !== "all" ? getTabProducts(activeTab) : [];

  function scrollToCategory(catId: string) {
    setActiveCategory(catId);
    const el = sectionRefs.current[catId];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div>
      {/* Campaign banner */}
      <section style={{
        background: "linear-gradient(135deg, var(--vn-red), var(--vn-red-dark))",
        padding: "40px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", right: "-20px", top: "50%", transform: "translateY(-50%)",
          fontSize: 160, color: "rgba(255,205,0,.07)", lineHeight: 1, pointerEvents: "none",
        }}>★</div>
        <div style={{ position: "relative" }}>
          <span className="badge badge-yellow" style={{ fontSize: 11, marginBottom: 12, display: "inline-flex" }}>
            ★ &nbsp;30.4 — 1.5 · ƯU ĐÃI ĐẶC BIỆT
          </span>
          <h1 style={{ fontSize: "clamp(22px, 4vw, 38px)", fontWeight: 900, color: "#fff", marginBottom: 8, lineHeight: 1.2 }}>
            Menu Phê La
          </h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,.8)", maxWidth: 460, margin: "0 auto 18px", lineHeight: 1.7 }}>
            Ngày 30/4 – 1/5: <strong style={{ color: "var(--vn-yellow)" }}>FREE 1 TOPPING</strong> khi gọi bất kỳ thức uống
          </p>
          <Link href="/khuyen-mai" className="btn btn-yellow" style={{ textDecoration: "none", fontSize: 12 }}>
            XEM CHI TIẾT ƯU ĐÃI →
          </Link>
        </div>
      </section>

      {/* Category tabs */}
      <div style={{
        background: "#fff",
        borderBottom: "1px solid var(--beige-warm)",
        position: "sticky", top: 96, zIndex: 40,
        padding: "0 24px",
      }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto",
          display: "flex", gap: 4,
          overflowX: "auto", scrollbarWidth: "none",
          padding: "12px 0",
        }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                flexShrink: 0,
                padding: "9px 20px",
                fontSize: 13, fontWeight: activeTab === tab.id ? 700 : 500,
                borderRadius: 100, border: "none", cursor: "pointer",
                transition: "all .25s ease",
                background: activeTab === tab.id ? "var(--green-mid)" : "transparent",
                color: activeTab === tab.id ? "#fff" : "var(--text-body)",
                boxShadow: activeTab === tab.id ? "0 4px 14px rgba(46,107,69,.3)" : "none",
              }}
            >
              {tab.emoji} &nbsp;{tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab: Best Seller / Oolong / Cà phê / Mùa hè */}
      {activeTab !== "all" && (
        <section style={{ background: "var(--beige-pale)", padding: "52px 24px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <ScrollReveal>
              <div style={{ marginBottom: 36 }}>
                <h2 style={{ fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 800, color: "var(--green-deep)", marginBottom: 6 }}>
                  {tabs.find((t) => t.id === activeTab)?.emoji}&nbsp;
                  {tabs.find((t) => t.id === activeTab)?.label}
                </h2>
                <p style={{ fontSize: 14, color: "var(--text-light)" }}>
                  {tabProducts.length} món · Cập nhật tháng 4/2026
                </p>
              </div>
            </ScrollReveal>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
              gap: 20,
            }}>
              {tabProducts.map((product, i) => (
                <ScrollReveal key={product.id} delay={i * 55}>
                  <ProductCard product={product} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tab: Tất cả — full category list */}
      {activeTab === "all" && (
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", gap: 40, padding: "48px 24px" }}>
          {/* Sidebar */}
          <aside className="hidden md:block" style={{
            width: 200, flexShrink: 0,
            position: "sticky", top: 145, alignSelf: "flex-start",
          }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, color: "var(--green-mid)", marginBottom: 12 }}>
              DANH MỤC
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToCategory(cat.id)}
                  style={{
                    background: activeCategory === cat.id ? "var(--green-pale)" : "transparent",
                    border: "none",
                    textAlign: "left",
                    padding: "10px 14px",
                    fontSize: 12,
                    fontWeight: activeCategory === cat.id ? 700 : 400,
                    color: activeCategory === cat.id ? "var(--green-deep)" : "var(--text-body)",
                    cursor: "pointer",
                    borderRadius: 8,
                    transition: "all .2s",
                    borderLeft: activeCategory === cat.id ? "3px solid var(--green-mid)" : "3px solid transparent",
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </nav>
            {/* Promo card */}
            <div style={{
              marginTop: 24, padding: 16,
              background: "linear-gradient(135deg, var(--vn-red), var(--vn-red-dark))",
              borderRadius: 14, color: "#fff",
            }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1, opacity: .75, marginBottom: 6 }}>🇻🇳 30/4 – 1/5</p>
              <p style={{ fontSize: 13, fontWeight: 800, marginBottom: 6, lineHeight: 1.4 }}>FREE 1 Topping</p>
              <p style={{ fontSize: 11, opacity: .8, marginBottom: 10, lineHeight: 1.5 }}>Khi gọi bất kỳ thức uống</p>
              <Link href="/khuyen-mai" style={{
                display: "block", textAlign: "center",
                background: "var(--vn-yellow)", color: "#1a0a00",
                padding: 8, borderRadius: 6,
                fontSize: 11, fontWeight: 800,
              }}>
                Chi tiết →
              </Link>
            </div>
          </aside>

          {/* Mobile select */}
          <div className="md:hidden" style={{ width: "100%" }}>
            <select
              value={activeCategory}
              onChange={(e) => scrollToCategory(e.target.value)}
              style={{
                width: "100%", padding: "12px 16px", fontSize: 14, fontWeight: 600,
                border: "1.5px solid var(--beige-warm)", borderRadius: 10,
                marginBottom: 28, background: "#fff",
              }}
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>

          {/* All product sections */}
          <div style={{ flex: 1 }}>
            {categories.map((cat) => {
              const catProds = getProductsByCategory(cat.id);
              const isSummer = ["cold-brew", "french-press", "syphon"].includes(cat.id);
              return (
                <section
                  key={cat.id}
                  ref={(el) => { sectionRefs.current[cat.id] = el; }}
                  style={{ marginBottom: 60, scrollMarginTop: 150 }}
                >
                  <div style={{
                    display: "flex", alignItems: "center", gap: 12,
                    marginBottom: 24, paddingBottom: 14,
                    borderBottom: "2px solid var(--beige-warm)",
                  }}>
                    <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--green-deep)", margin: 0, letterSpacing: 1 }}>
                      {cat.name}
                    </h2>
                    {isSummer && (
                      <span className="badge badge-teal" style={{ fontSize: 9 }}>☀️ MÙA HÈ</span>
                    )}
                  </div>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
                    gap: 20,
                  }}>
                    {catProds.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
