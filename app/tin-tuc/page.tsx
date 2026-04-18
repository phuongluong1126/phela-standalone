"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { newsArticles, type Article, type ArticleCategory } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";

const ALL_CATS: { id: ArticleCategory | "all"; label: string }[] = [
  { id: "all",                    label: "Tất cả" },
  { id: "Chiến Dịch",             label: "Chiến Dịch 30/4" },
  { id: "Văn Hoá Cà Phê & Trà",  label: "Văn Hoá & Pha Chế" },
  { id: "Lifestyle",              label: "Lifestyle" },
  { id: "Khuyến Mãi",            label: "Khuyến Mãi" },
  { id: "Tin tức",               label: "Tin tức" },
];

const catColors: Record<string, string> = {
  "Chiến Dịch":            "var(--vn-red)",
  "Văn Hoá Cà Phê & Trà": "var(--green-mid)",
  "Lifestyle":             "var(--brown-mid)",
  "Khuyến Mãi":           "var(--vn-red)",
  "Tin tức":              "var(--green-light)",
  "Câu Chuyện":           "var(--brown-mid)",
  "Sự Kiện":              "var(--brown-mid)",
  "Mùa Hè":               "var(--summer-teal)",
};

type A = Article & { image?: string };
const allArticles = newsArticles as A[];
const featuredArticles = allArticles.filter((a) => a.featured);

export default function StoriesPage() {
  const [activeCat, setActiveCat] = useState<ArticleCategory | "all">("all");

  const filtered = activeCat === "all"
    ? allArticles
    : allArticles.filter((a) => a.category === activeCat);

  return (
    <div>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(160deg, var(--green-deep) 0%, #1A3D28 60%, #0E2A1A 100%)",
        padding: "88px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 50% 0%, rgba(196,154,108,.15) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        <div style={{ position: "relative" }}>
          <span className="badge badge-yellow" style={{ display: "inline-flex", marginBottom: 18, fontSize: 11 }}>
            THÁNG 4 · 2026
          </span>
          <h1 style={{
            fontSize: "clamp(30px, 5vw, 56px)",
            fontWeight: 900, color: "#fff",
            marginBottom: 14, lineHeight: 1.1,
            animation: "fadeInUp .9s both",
          }}>
            Câu Chuyện Phê La
          </h1>
          <p style={{
            fontSize: "clamp(14px, 1.8vw, 17px)",
            color: "rgba(255,255,255,.65)",
            maxWidth: 500, margin: "0 auto",
            lineHeight: 1.8, animation: "fadeInUp .9s .15s both",
          }}>
            Văn hoá cà phê & trà, lifestyle tháng 4 và những câu chuyện
            về nông sản đặc sản Việt Nam.
          </p>
        </div>
      </section>

      {/* Featured — top 3 big cards */}
      <section style={{ background: "var(--beige-pale)", padding: "72px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ScrollReveal>
            <h2 style={{
              fontSize: "clamp(18px, 2.5vw, 26px)",
              fontWeight: 800, color: "var(--green-deep)", marginBottom: 32,
              paddingBottom: 14, borderBottom: "2px solid var(--green-pale)",
              display: "flex", alignItems: "center", gap: 10,
            }}>
              <span style={{ color: "var(--vn-red)" }}>★</span> Nổi bật tháng 4
            </h2>
          </ScrollReveal>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 26,
          }}>
            {featuredArticles.map((article, i) => (
              <ScrollReveal key={article.id} delay={i * 90}>
                <article className="card-hover" style={{
                  background: "#fff", borderRadius: 18, overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(31,77,46,.07)",
                  cursor: "pointer",
                }}>
                  <div className="img-zoom" style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
                    {article.image ? (
                      <Image src={article.image} alt={article.title} fill className="img-zoom-inner"
                        style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, 400px" />
                    ) : (
                      <div style={{ width: "100%", height: "100%", background: "var(--beige-warm)" }} />
                    )}
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,.35) 0%, transparent 60%)" }} />
                    <span className="badge" style={{
                      position: "absolute", top: 12, left: 12, fontSize: 9,
                      background: catColors[article.category] || "var(--green-mid)",
                      color: "#fff", backdropFilter: "blur(4px)",
                    }}>
                      {article.category.toUpperCase()}
                    </span>
                  </div>
                  <div style={{ padding: "20px 22px 24px" }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8 }}>
                      <span style={{ fontSize: 11, color: "var(--text-light)" }}>
                        {new Date(article.date).toLocaleDateString("vi-VN", { day: "numeric", month: "long", year: "numeric" })}
                      </span>
                      {article.readTime && (
                        <span style={{ fontSize: 11, color: "var(--text-light)" }}>· {article.readTime} phút</span>
                      )}
                    </div>
                    <h3 style={{ fontSize: "clamp(15px, 1.8vw, 19px)", fontWeight: 700, lineHeight: 1.4, marginBottom: 10, color: "var(--green-deep)" }}>
                      {article.title}
                    </h3>
                    <p style={{
                      fontSize: 13, color: "var(--text-body)", lineHeight: 1.75, marginBottom: 16,
                      display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden",
                    }}>
                      {article.excerpt}
                    </p>
                    <span style={{ fontSize: 12, fontWeight: 700, color: "var(--green-mid)" }}>Đọc tiếp →</span>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Category filter + all articles */}
      <section style={{ padding: "64px 24px 80px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Filter pills */}
          <ScrollReveal>
            <div style={{
              display: "flex", flexWrap: "wrap", gap: 8,
              marginBottom: 44, justifyContent: "center",
            }}>
              {ALL_CATS.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCat(cat.id as ArticleCategory | "all")}
                  style={{
                    padding: "9px 22px", fontSize: 12, fontWeight: 600,
                    borderRadius: 100, border: "none", cursor: "pointer",
                    transition: "all .25s ease",
                    background: activeCat === cat.id ? "var(--green-mid)" : "var(--beige-pale)",
                    color: activeCat === cat.id ? "#fff" : "var(--text-body)",
                    boxShadow: activeCat === cat.id ? "0 4px 14px rgba(46,107,69,.3)" : "none",
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <p style={{ fontSize: 13, color: "var(--text-light)", marginBottom: 28, textAlign: "center" }}>
            {filtered.length} bài viết
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {filtered.map((article, i) => (
              <ScrollReveal key={article.id} delay={i * 60}>
                <article
                  className="card-hover"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "clamp(200px, 30%, 280px) 1fr",
                    gap: 24,
                    background: "#fff",
                    borderRadius: 16,
                    overflow: "hidden",
                    border: "1px solid var(--beige-warm)",
                    cursor: "pointer",
                    padding: 0,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--green-pale)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--beige-warm)";
                  }}
                >
                  <div className="img-zoom" style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                    {article.image ? (
                      <Image src={article.image} alt={article.title} fill className="img-zoom-inner"
                        style={{ objectFit: "cover" }} sizes="280px" />
                    ) : (
                      <div style={{
                        width: "100%", height: "100%", background: "var(--beige-warm)",
                        display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36,
                      }}>📖</div>
                    )}
                  </div>
                  <div style={{ padding: "20px 24px 20px 0" }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                      <span style={{
                        fontSize: 10, fontWeight: 800, letterSpacing: 1,
                        padding: "3px 10px", borderRadius: 100,
                        background: catColors[article.category] || "var(--green-mid)",
                        color: "#fff",
                      }}>
                        {article.category.toUpperCase()}
                      </span>
                      <span style={{ fontSize: 12, color: "var(--text-light)" }}>
                        {new Date(article.date).toLocaleDateString("vi-VN", { day: "numeric", month: "long" })}
                      </span>
                      {article.readTime && (
                        <span style={{ fontSize: 12, color: "var(--text-light)" }}>· {article.readTime} phút</span>
                      )}
                    </div>
                    <h3 style={{ fontSize: "clamp(14px, 1.8vw, 18px)", fontWeight: 700, lineHeight: 1.4, marginBottom: 10, color: "var(--green-deep)" }}>
                      {article.title}
                    </h3>
                    <p style={{
                      fontSize: 13, color: "var(--text-body)", lineHeight: 1.75, marginBottom: 14,
                      display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
                    }}>
                      {article.excerpt}
                    </p>
                    <span style={{ fontSize: 12, fontWeight: 700, color: "var(--green-mid)" }}>Đọc tiếp →</span>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: "linear-gradient(135deg, var(--vn-red), var(--vn-red-dark))",
        padding: "64px 24px", textAlign: "center",
      }}>
        <ScrollReveal>
          <div style={{ fontSize: 40, marginBottom: 14 }}>🇻🇳</div>
          <h2 style={{ fontSize: "clamp(20px, 3vw, 34px)", fontWeight: 900, color: "#fff", marginBottom: 12 }}>
            FREE Topping — Mừng 30/4!
          </h2>
          <p style={{
            fontSize: 15, color: "rgba(255,255,255,.8)", maxWidth: 420,
            margin: "0 auto 24px", lineHeight: 1.7,
          }}>
            Gọi ngay bất kỳ thức uống tại Phê La và nhận 1 topping miễn phí ngày 30/4 – 1/5.
          </p>
          <Link href="/khuyen-mai" className="btn btn-yellow" style={{ textDecoration: "none" }}>
            XEM ƯU ĐÃI NGAY →
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
