import { newsArticles } from "@/lib/data";

export default function NewsPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #f5ebe0 0%, #e8d5c0 100%)", padding: "60px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, letterSpacing: 4, marginBottom: 12 }}>
          TIN TỨC
        </h1>
        <p style={{ fontSize: 14, color: "#666" }}>Cập nhật mới nhất từ Phê La</p>
      </section>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "48px 24px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {newsArticles.map((article) => (
            <article
              key={article.id}
              style={{
                display: "grid",
                gridTemplateColumns: "280px 1fr",
                gap: 24,
                borderBottom: "1px solid #e5e5e5",
                paddingBottom: 40,
              }}
            >
              {/* Image placeholder */}
              <div style={{ width: "100%", aspectRatio: "16/10", background: "#f0ebe4", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 12, color: "#a08060", fontStyle: "italic" }}>{article.category}</span>
              </div>

              {/* Content */}
              <div>
                <div style={{ display: "flex", gap: 12, marginBottom: 10 }}>
                  <span style={{ fontSize: 11, color: "#8B4513", fontWeight: 600, letterSpacing: 1, background: "#f5ebe0", padding: "3px 10px", borderRadius: 10 }}>
                    {article.category}
                  </span>
                  <span style={{ fontSize: 12, color: "#999" }}>{article.date}</span>
                </div>
                <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12, lineHeight: 1.4 }}>
                  {article.title}
                </h2>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8, marginBottom: 16 }}>
                  {article.excerpt}
                </p>
                <span style={{ fontSize: 13, color: "#8B4513", fontWeight: 600, letterSpacing: 0.5, cursor: "pointer" }}>
                  Đọc tiếp →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
