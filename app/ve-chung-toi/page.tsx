import Link from "next/link";

const values = [
  { icon: "🌿", title: "Nốt Hương Đặc Sản", desc: "Trân quý và nâng niu những giá trị nguyên bản từ mỗi vùng đất" },
  { icon: "🍃", title: "Nguyên Liệu Đặc Sản", desc: "Tìm kiếm và lựa chọn những nguyên liệu đặc sản chất lượng cao nhất từ nông sản Việt Nam" },
  { icon: "✨", title: "Thủ Công", desc: "Tỉ mỉ chế biến từng sản phẩm với tâm huyết và kỹ thuật thủ công truyền thống" },
  { icon: "🌾", title: "Đồng Điệu Thiên Nhiên", desc: "Kết nối tâm hồn với thiên nhiên, đồng hành cùng người nông dân Việt Nam" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #f5ebe0 0%, #e8d5c0 100%)", padding: "80px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, letterSpacing: 4, marginBottom: 16 }}>
          CÂU CHUYỆN THƯƠNG HIỆU
        </h1>
        <p style={{ fontSize: 14, color: "#666", maxWidth: 500, margin: "0 auto" }}>
          Về Phê La và những điều khác biệt
        </p>
      </section>

      {/* Brand story */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "64px 24px" }}>
        <h2 style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, color: "#8B4513", marginBottom: 12, textAlign: "center" }}>
          VỀ PHÊ LA
        </h2>
        <h3 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 300, letterSpacing: 1.5, marginBottom: 28, textAlign: "center" }}>
          PHÊ LA VÀ NHỮNG ĐIỀU KHÁC BIỆT
        </h3>
        <p style={{ fontSize: 15, color: "#444", lineHeight: 2, textAlign: "center" }}>
          Nốt Hương Đặc Sản - Phê La luôn trân quý, nâng niu những giá trị Nguyên Bản ở mỗi vùng đất mà chúng tôi đi qua,
          nơi tâm hồn được đồng điệu với thiên nhiên, với nỗi vất vả nhọc nhằn của người nông dân;
          cảm nhận được hết thảy những tầng hương ẩn sâu trong từng nguyên liệu.
        </p>
        <p style={{ fontSize: 15, color: "#444", lineHeight: 2, textAlign: "center", marginTop: 20 }}>
          Một chặng đường dài đang chờ phía trước, Phê La đã sẵn sàng viết tiếp câu chuyện
          Nốt Hương Đặc Sản - Nguyên Bản - Thủ Công đầy cảm hứng và càng tự hào hơn khi được mang sứ mệnh:
        </p>
        <blockquote style={{ fontSize: 18, fontWeight: 500, color: "#8B4513", textAlign: "center", margin: "32px 0", fontStyle: "italic", borderLeft: "none" }}>
          &ldquo;Đánh thức những nốt hương đặc sản của nông sản Việt Nam&rdquo;
        </blockquote>
      </section>

      {/* Values */}
      <section style={{ background: "#faf7f4", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, color: "#8B4513", marginBottom: 8, textAlign: "center" }}>
            PHONG CÁCH KHÁC BIỆT
          </h2>
          <h3 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 300, letterSpacing: 1.5, marginBottom: 48, textAlign: "center" }}>
            GIÁ TRỊ CỐT LÕI
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 32 }}>
            {values.map((v) => (
              <div key={v.title} style={{ textAlign: "center", padding: 24 }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{v.icon}</div>
                <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 10, letterSpacing: 0.5 }}>{v.title}</h4>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty ingredients */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "64px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, color: "#8B4513", marginBottom: 12 }}>
          NGUYÊN LIỆU ĐẶC SẢN
        </h2>
        <p style={{ fontSize: 15, color: "#444", lineHeight: 2, maxWidth: 650, margin: "0 auto 32px" }}>
          Phê La tìm kiếm và lựa chọn những nguyên liệu đặc sản tốt nhất từ các vùng miền Việt Nam.
          Từ hạt cà phê Arabica Đà Lạt, trà Ô Long Mộc Châu, đến long nhãn Hưng Yên -
          mỗi nguyên liệu đều mang trong mình câu chuyện riêng.
        </p>
        <Link href="/san-pham" style={{ display: "inline-block", background: "#1a1a1a", color: "#fff", padding: "12px 36px", fontSize: 12, fontWeight: 600, letterSpacing: 2, borderRadius: 2 }}>
          KHÁM PHÁ SẢN PHẨM
        </Link>
      </section>
    </div>
  );
}
