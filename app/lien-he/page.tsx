"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const socials = [
  { icon: "📘", label: "Facebook", handle: "Phê La",     url: "https://facebook.com/phela.vn", color: "#1877F2" },
  { icon: "📸", label: "Instagram", handle: "@phela.vn",  url: "https://instagram.com/phela.vn", color: "#E1306C" },
  { icon: "🎵", label: "TikTok",    handle: "@phela.vn",  url: "https://tiktok.com/@phela.vn",  color: "#010101" },
  { icon: "▶️", label: "YouTube",   handle: "Phê La",     url: "https://youtube.com/@phela",    color: "#FF0000" },
];

const info = [
  { icon: "📧", label: "Email hỗ trợ",   value: "cskh@phela.vn",          href: "mailto:cskh@phela.vn" },
  { icon: "📞", label: "Hotline",         value: "1900 3013",               href: "tel:19003013" },
  { icon: "🕐", label: "Giờ hỗ trợ",     value: "8:30 – 22:00 hàng ngày", href: null },
  { icon: "🏢", label: "Trụ sở chính",   value: "289 Đinh Bộ Lĩnh, Bình Thạnh, TP.HCM", href: null },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(160deg, var(--green-deep) 0%, #1A3D28 60%, var(--green-deep) 100%)",
        padding: "88px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 50% 0%, rgba(196,154,108,.14) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        <div style={{ position: "relative" }}>
          <span className="badge badge-yellow" style={{ display: "inline-flex", marginBottom: 16, fontSize: 11 }}>
            KẾT NỐI VỚI PHÊ LA
          </span>
          <h1 style={{
            fontSize: "clamp(28px, 5vw, 52px)",
            fontWeight: 900, color: "#fff",
            marginBottom: 14, lineHeight: 1.1,
          }}>
            Xin chào! 👋<br />Chúng tôi luôn ở đây
          </h1>
          <p style={{
            fontSize: "clamp(14px, 1.8vw, 17px)",
            color: "rgba(255,255,255,.65)",
            maxWidth: 480, margin: "0 auto", lineHeight: 1.8,
          }}>
            Có câu hỏi, góp ý hay muốn hợp tác? Phê La luôn lắng nghe và phản hồi trong vòng 24 giờ.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ background: "var(--beige-pale)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: 60,
            alignItems: "start",
          }}
            className="contact-grid"
          >

            {/* Left — info */}
            <div>
              <ScrollReveal direction="left">
                <h2 style={{
                  fontSize: "clamp(20px, 2.5vw, 28px)",
                  fontWeight: 800, color: "var(--green-deep)",
                  marginBottom: 28,
                }}>
                  Thông tin liên hệ
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
                  {info.map((item) => (
                    <div key={item.label} style={{
                      display: "flex", alignItems: "flex-start", gap: 14,
                      padding: "16px 18px",
                      background: "#fff", borderRadius: 12,
                      border: "1px solid var(--beige-warm)",
                    }}>
                      <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                      <div>
                        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: "var(--text-light)", margin: "0 0 4px" }}>
                          {item.label.toUpperCase()}
                        </p>
                        {item.href ? (
                          <a href={item.href} style={{ fontSize: 15, fontWeight: 600, color: "var(--green-mid)" }}>
                            {item.value}
                          </a>
                        ) : (
                          <p style={{ fontSize: 14, color: "var(--text-primary)", margin: 0, lineHeight: 1.5 }}>
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Social links */}
              <ScrollReveal direction="left" delay={100}>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: "var(--green-deep)", marginBottom: 16 }}>
                  Theo dõi Phê La
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex", alignItems: "center", gap: 10,
                        padding: "12px 14px",
                        background: "#fff", borderRadius: 10,
                        border: "1px solid var(--beige-warm)",
                        transition: "transform .2s ease, box-shadow .2s ease",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
                        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 20px rgba(0,0,0,.1)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                      }}
                    >
                      <span style={{ fontSize: 20 }}>{s.icon}</span>
                      <div>
                        <p style={{ fontSize: 12, fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>{s.label}</p>
                        <p style={{ fontSize: 11, color: "var(--text-light)", margin: 0 }}>{s.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </ScrollReveal>

              {/* Campaign teaser */}
              <ScrollReveal direction="left" delay={150}>
                <div style={{
                  marginTop: 28, padding: "16px 20px",
                  background: "linear-gradient(135deg, var(--vn-red), var(--vn-red-dark))",
                  borderRadius: 14, color: "#fff",
                  display: "flex", alignItems: "center", gap: 14,
                }}>
                  <span style={{ fontSize: 32 }}>🇻🇳</span>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 800, margin: "0 0 4px" }}>
                      Ưu đãi 30/4 – 1/5
                    </p>
                    <p style={{ fontSize: 12, opacity: .85, margin: "0 0 8px" }}>
                      FREE TOPPING cho tất cả thức uống
                    </p>
                    <Link href="/khuyen-mai" style={{
                      fontSize: 11, fontWeight: 800, color: "var(--vn-yellow)",
                      textDecoration: "underline",
                    }}>
                      Xem ngay →
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — contact form */}
            <ScrollReveal direction="right">
              <div style={{
                background: "#fff",
                borderRadius: 20,
                padding: "36px 36px",
                boxShadow: "0 8px 40px rgba(31,77,46,.08)",
                border: "1px solid var(--beige-warm)",
              }}>
                {sent ? (
                  <div style={{ textAlign: "center", padding: "40px 20px" }}>
                    <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
                    <h3 style={{ fontSize: 22, fontWeight: 800, color: "var(--green-deep)", marginBottom: 10 }}>
                      Cảm ơn bạn!
                    </h3>
                    <p style={{ fontSize: 15, color: "var(--text-body)", lineHeight: 1.7, maxWidth: 320, margin: "0 auto 24px" }}>
                      Phê La đã nhận được tin nhắn của bạn và sẽ phản hồi trong vòng <strong>24 giờ</strong>.
                    </p>
                    <button
                      onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                      className="btn btn-green"
                      style={{ margin: "0 auto" }}
                    >
                      Gửi tin nhắn khác
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--green-deep)", marginBottom: 6 }}>
                      Gửi tin nhắn cho chúng tôi
                    </h2>
                    <p style={{ fontSize: 14, color: "var(--text-light)", marginBottom: 28 }}>
                      Phản hồi trong vòng 24 giờ làm việc
                    </p>
                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                        <div>
                          <label style={{ fontSize: 12, fontWeight: 700, color: "var(--text-body)", display: "block", marginBottom: 6 }}>
                            Họ và tên *
                          </label>
                          <input
                            type="text" required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="Nguyễn Văn A"
                            style={inputStyle}
                            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--green-mid)")}
                            onBlur={(e) => (e.currentTarget.style.borderColor = "var(--beige-warm)")}
                          />
                        </div>
                        <div>
                          <label style={{ fontSize: 12, fontWeight: 700, color: "var(--text-body)", display: "block", marginBottom: 6 }}>
                            Email *
                          </label>
                          <input
                            type="email" required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="email@example.com"
                            style={inputStyle}
                            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--green-mid)")}
                            onBlur={(e) => (e.currentTarget.style.borderColor = "var(--beige-warm)")}
                          />
                        </div>
                      </div>
                      <div>
                        <label style={{ fontSize: 12, fontWeight: 700, color: "var(--text-body)", display: "block", marginBottom: 6 }}>
                          Chủ đề
                        </label>
                        <select
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          style={{ ...inputStyle, background: "#fff" }}
                        >
                          <option value="">Chọn chủ đề...</option>
                          <option>Phản hồi về sản phẩm</option>
                          <option>Hỏi về ưu đãi 30/4</option>
                          <option>Tìm cửa hàng</option>
                          <option>Hợp tác / Media</option>
                          <option>Khiếu nại</option>
                          <option>Khác</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ fontSize: 12, fontWeight: 700, color: "var(--text-body)", display: "block", marginBottom: 6 }}>
                          Nội dung *
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Nhập nội dung tin nhắn của bạn..."
                          style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
                          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--green-mid)")}
                          onBlur={(e) => (e.currentTarget.style.borderColor = "var(--beige-warm)")}
                        />
                      </div>
                      <button type="submit" className="btn btn-green" style={{ justifyContent: "center" }}>
                        📨 &nbsp;Gửi tin nhắn
                      </button>
                    </form>
                  </>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  fontSize: 14,
  border: "1.5px solid var(--beige-warm)",
  borderRadius: 10,
  outline: "none",
  transition: "border-color .2s",
  fontFamily: "inherit",
  color: "var(--text-primary)",
  background: "#FAFAFA",
};
