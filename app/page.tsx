import Link from "next/link";
import { products, formatPrice, newsArticles, stores } from "@/lib/data";

const featuredProducts = products.filter((p) =>
  [
    "phe-xiu-vani",
    "o-long-sua",
    "lua-dao",
    "matcha-phan-xi-pang",
    "khoi-blao",
    "lang-biang",
  ].includes(p.id)
);

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #f5ebe0 0%, #e8d5c0 100%)",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 300,
            letterSpacing: 6,
            marginBottom: 16,
            color: "#1a1a1a",
          }}
        >
          PHÊ LA
        </h1>
        <p
          style={{
            fontSize: "clamp(14px, 2vw, 18px)",
            color: "#666",
            maxWidth: 600,
            margin: "0 auto 12px",
            lineHeight: 1.7,
          }}
        >
          Nốt Hương Đặc Sản
        </p>
        <p
          style={{
            fontSize: 14,
            color: "#888",
            maxWidth: 640,
            margin: "0 auto 32px",
            lineHeight: 1.8,
          }}
        >
          Đánh thức những nốt hương đặc sản của nông sản Việt Nam
        </p>
        <Link
          href="/san-pham"
          style={{
            display: "inline-block",
            background: "#1a1a1a",
            color: "#fff",
            padding: "14px 40px",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 2,
            borderRadius: 2,
            transition: "background .2s",
          }}
        >
          XEM SẢN PHẨM
        </Link>
      </section>

      {/* Brand story teaser */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "64px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, color: "#8B4513", marginBottom: 12 }}>
          CÂU CHUYỆN THƯƠNG HIỆU
        </h2>
        <h3 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 300, letterSpacing: 1.5, marginBottom: 20 }}>
          PHÊ LA VÀ NHỮNG ĐIỀU KHÁC BIỆT
        </h3>
        <p style={{ fontSize: 15, color: "#666", lineHeight: 1.9, maxWidth: 700, margin: "0 auto 28px" }}>
          Phê La luôn trân quý, nâng niu những giá trị Nguyên Bản ở mỗi vùng đất,
          nơi tâm hồn được đồng điệu với thiên nhiên, với nỗi vất vả nhọc nhằn của người nông dân;
          cảm nhận được hết thảy những tầng hương ẩn sâu trong từng nguyên liệu.
        </p>
        <Link href="/ve-chung-toi" style={{ fontSize: 13, fontWeight: 600, color: "#8B4513", letterSpacing: 1, borderBottom: "1px solid #8B4513", paddingBottom: 2 }}>
          Xem thêm →
        </Link>
      </section>

      {/* Featured products */}
      <section style={{ background: "#faf7f4", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, color: "#8B4513", marginBottom: 8, textAlign: "center" }}>
            SẢN PHẨM
          </h2>
          <h3 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 300, letterSpacing: 1.5, marginBottom: 40, textAlign: "center" }}>
            CÁC DÒNG SẢN PHẨM NỔI BẬT
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 28 }}>
            {featuredProducts.map((p) => (
              <div key={p.id} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ width: "100%", aspectRatio: "1", background: "#e8ddd0", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "#a08060", fontSize: 12, textAlign: "center", padding: 12, fontStyle: "italic" }}>{p.name}</span>
                </div>
                <h4 style={{ fontSize: 13, fontWeight: 600, margin: 0, letterSpacing: 0.3, lineHeight: 1.4 }}>{p.name}</h4>
                <p style={{ fontSize: 14, margin: 0, color: p.price === 0 ? "#999" : "#1a1a1a" }}>{formatPrice(p.price)}</p>
                <Link href="/san-pham" style={{ fontSize: 11, color: "#8B4513", fontWeight: 600, letterSpacing: 1 }}>
                  Xem thêm →
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/san-pham" style={{ display: "inline-block", background: "#1a1a1a", color: "#fff", padding: "12px 36px", fontSize: 12, fontWeight: 600, letterSpacing: 2, borderRadius: 2 }}>
              XEM TẤT CẢ
            </Link>
          </div>
        </div>
      </section>

      {/* News */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 24px" }}>
        <h2 style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, color: "#8B4513", marginBottom: 8, textAlign: "center" }}>
          TIN TỨC
        </h2>
        <h3 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 300, letterSpacing: 1.5, marginBottom: 40, textAlign: "center" }}>
          TIN TỨC NỔI BẬT
        </h3>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 28 }}>
          {newsArticles.slice(0, 3).map((article) => (
            <Link href="/tin-tuc" key={article.id} style={{ display: "flex", flexDirection: "column", gap: 14, borderRadius: 4, overflow: "hidden" }}>
              <div style={{ width: "100%", aspectRatio: "16/9", background: "#f0ebe4", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 12, color: "#a08060", fontStyle: "italic" }}>{article.category}</span>
              </div>
              <h4 style={{ fontSize: 15, fontWeight: 600, margin: 0, lineHeight: 1.5 }}>{article.title}</h4>
              <p style={{ fontSize: 13, color: "#666", margin: 0, lineHeight: 1.7 }}>{article.excerpt}</p>
              <span style={{ fontSize: 12, color: "#8B4513", fontWeight: 600, letterSpacing: 0.5 }}>Đọc tiếp →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Stores preview */}
      <section style={{ background: "#faf7f4", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, color: "#8B4513", marginBottom: 8, textAlign: "center" }}>
            CỬA HÀNG
          </h2>
          <h3 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 300, letterSpacing: 1.5, marginBottom: 40, textAlign: "center" }}>
            HỆ THỐNG CỬA HÀNG
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
            {stores.slice(0, 6).map((store) => (
              <div key={store.id} style={{ background: "#fff", padding: 20, borderRadius: 4, border: "1px solid #e8e0d8" }}>
                <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>{store.name}</h4>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6, marginBottom: 8 }}>{store.address}</p>
                <p style={{ fontSize: 13, color: "#8B4513" }}>📞 {store.phone}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/cua-hang" style={{ display: "inline-block", background: "#1a1a1a", color: "#fff", padding: "12px 36px", fontSize: 12, fontWeight: 600, letterSpacing: 2, borderRadius: 2 }}>
              XEM TẤT CẢ CỬA HÀNG
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
