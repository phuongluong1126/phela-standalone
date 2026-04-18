"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { products, formatPrice, newsArticles } from "@/lib/data";

/* ─── Data selects ─── */
const summerDrinks = products.filter((p) =>
  ["bong-buoi-o-long", "lang-biang", "o-long-sua", "lua-dao", "si-mo-la", "matcha-phan-xi-pang"].includes(p.id)
);
const featuredArticles = newsArticles.filter((_, i) => i < 3);
type A = typeof newsArticles[0] & { image?: string };
const articles = featuredArticles as A[];

/* ─── UGC Moments ─── */
const ugc = [
  { img: "https://phela.vn/wp-content/uploads/2025/05/Bong-Buoi-scaled.jpg",   handle: "@minh.chill",   caption: "Bòng bưởi mát lạnh ngày hè 🌞 #PheLa304",       likes: "2.4k" },
  { img: "https://phela.vn/wp-content/uploads/2021/07/14265.jpg",              handle: "@linh.oolong",  caption: "Lang Biang buổi chiều tà ☁️ #PheLa",              likes: "1.8k" },
  { img: "https://phela.vn/wp-content/uploads/2024/10/Ver-03-Lua-Dao-Phien-ban-Dong-Chill-yeu-thich-size-Phe.jpg", handle: "@trang.aesthetic", caption: "Lụa Đào – vị hè 🍑 #PheLa", likes: "3.1k" },
  { img: "https://phela.vn/wp-content/uploads/2025/04/Matcha-Phan-Xi-Pang-da-xay-MOI-scaled.jpg", handle: "@hung.matcha", caption: "Matcha xanh tươi 🍵 #PheLa304",  likes: "2.9k" },
  { img: "https://phela.vn/wp-content/uploads/2024/07/4-Khoi-B_Lao.jpg",      handle: "@phuong.304",  caption: "30/4 tại Phê La 🇻🇳 #GiảiPhóng",                likes: "5.2k" },
  { img: "https://phela.vn/wp-content/uploads/2023/11/PHONG-LAN-scaled.jpg",  handle: "@ha.syphon",   caption: "Phong Lan – thanh, dịu, nhẹ 🌸 #Syphon",          likes: "1.5k" },
];

export default function HomePage() {
  return (
    <div style={{ overflowX: "hidden" }}>

      {/* ═══════════════════════════════════════════════════════════
          §1  HERO — Chào mừng đại lễ 30/4
      ═══════════════════════════════════════════════════════════ */}
      <section style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "100px 24px 80px",
        textAlign: "center",
        /* warm cream base with a red-gold wash */
        background: "linear-gradient(160deg, #FDF6EC 0%, #F7E8CC 40%, #F5D9C0 70%, #F0C8B4 100%)",
      }}>
        {/* Soft red glow backdrop */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(218,37,29,.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        {/* Green foliage shapes */}
        <div style={{
          position: "absolute", top: "-8%", left: "-6%", width: 400, height: 400,
          borderRadius: "60% 40% 50% 60%",
          background: "linear-gradient(135deg, rgba(31,77,46,.18), rgba(46,107,69,.10))",
          transform: "rotate(-15deg)", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-10%", right: "-8%", width: 500, height: 500,
          borderRadius: "40% 60% 40% 70%",
          background: "linear-gradient(135deg, rgba(31,77,46,.12), rgba(46,107,69,.07))",
          transform: "rotate(20deg)", pointerEvents: "none",
        }} />

        {/* Floating drink bubbles */}
        <div className="float-anim" style={{
          position: "absolute", top: "10%", right: "6%",
          width: "clamp(90px, 13vw, 170px)", aspectRatio: "1",
          borderRadius: "50%", overflow: "hidden",
          boxShadow: "0 16px 48px rgba(0,0,0,.18)",
          border: "3px solid rgba(255,255,255,.6)",
        }}>
          <Image src="https://phela.vn/wp-content/uploads/2025/05/Bong-Buoi-scaled.jpg" alt="" fill style={{ objectFit: "cover" }} />
        </div>
        <div className="float-slow" style={{
          position: "absolute", bottom: "12%", left: "4%",
          width: "clamp(70px, 10vw, 130px)", aspectRatio: "1",
          borderRadius: "50%", overflow: "hidden",
          boxShadow: "0 14px 40px rgba(0,0,0,.15)",
          border: "3px solid rgba(255,255,255,.5)",
        }}>
          <Image src="https://phela.vn/wp-content/uploads/2025/04/Matcha-Phan-Xi-Pang-da-xay-MOI-scaled.jpg" alt="" fill style={{ objectFit: "cover" }} />
        </div>
        <div className="float-anim" style={{
          position: "absolute", top: "52%", right: "3%",
          width: "clamp(55px, 7vw, 100px)", aspectRatio: "1",
          borderRadius: "50%", overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,.12)",
          border: "2px solid rgba(255,255,255,.5)",
          animationDelay: "1.8s",
        }}>
          <Image src="https://phela.vn/wp-content/uploads/2021/07/14265.jpg" alt="" fill style={{ objectFit: "cover" }} />
        </div>

        {/* Content */}
        <div style={{ position: "relative", maxWidth: 820 }}>
          <div className="hero-badge" style={{ marginBottom: 22 }}>
            <span className="badge badge-red" style={{ fontSize: 11, letterSpacing: 2, borderRadius: 100, padding: "6px 18px" }}>
              🇻🇳 &nbsp;30.4 — 1.5 · 2026
            </span>
          </div>

          <h1 className="hero-title" style={{
            fontSize: "clamp(34px, 6.5vw, 78px)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-1px",
            color: "var(--green-deep)",
            marginBottom: 18,
          }}>
            Chào mừng đại lễ<br />
            <span style={{
              background: "linear-gradient(90deg, var(--vn-red), #FF5A4A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              30/4
            </span>
            {" "}cùng Phê La 🇻🇳
          </h1>

          <p className="hero-sub" style={{
            fontSize: "clamp(15px, 2vw, 20px)",
            color: "var(--brown-dark)",
            maxWidth: 560, margin: "0 auto 14px",
            lineHeight: 1.75, fontWeight: 400,
          }}>
            Tận hưởng kỳ nghỉ với những ly Oolong và Cold Brew mát lạnh,
            được chắt lọc từ nông sản đặc sản Việt Nam.
          </p>

          <p className="hero-sub" style={{
            fontSize: "clamp(13px, 1.5vw, 16px)",
            fontWeight: 700, color: "var(--vn-red)",
            letterSpacing: 0.8, margin: "0 0 36px",
          }}>
            ★ FREE TOPPING ngày 30/4 – 1/5 tại tất cả cửa hàng
          </p>

          <div className="hero-cta" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/san-pham" className="btn btn-green" style={{ textDecoration: "none" }}>
              Khám phá menu mùa hè →
            </Link>
            <Link href="/khuyen-mai" className="btn btn-red" style={{ textDecoration: "none" }}>
              Đặt ngay
            </Link>
          </div>

          {/* Scroll indicator */}
          <div style={{
            marginTop: 56, display: "flex", flexDirection: "column",
            alignItems: "center", gap: 6, opacity: .5,
            animation: "fadeIn 1s 1.6s both",
          }}>
            <span style={{ fontSize: 10, letterSpacing: 2.5, color: "var(--brown-mid)", fontWeight: 600 }}>
              CUỘN XUỐNG
            </span>
            <div style={{
              width: 1, height: 36,
              background: "linear-gradient(to bottom, var(--brown-mid), transparent)",
            }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §2  SUMMER DRINKS
      ═══════════════════════════════════════════════════════════ */}
      <section style={{ background: "var(--beige-pale)", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <p className="section-label">GIẢI NHIỆT MÙA HÈ</p>
              <h2 style={{
                fontSize: "clamp(26px, 4vw, 48px)",
                fontWeight: 800, color: "var(--green-deep)",
                marginBottom: 14, lineHeight: 1.15,
              }}>
                Những ly thức uống hoàn hảo<br />cho ngày nắng nóng
              </h2>
              <p style={{ fontSize: 16, color: "var(--text-body)", maxWidth: 520, margin: "0 auto", lineHeight: 1.8 }}>
                Từ trà Oolong lạnh thanh nhẹ, Cold Brew đậm vị đến Matcha Đà Lạt — mỗi ly là một làn gió mát.
              </p>
            </div>
          </ScrollReveal>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 22,
          }}>
            {summerDrinks.map((drink, i) => (
              <ScrollReveal key={drink.id} delay={i * 75}>
                <div className="drink-card" style={{
                  borderRadius: 18, overflow: "hidden",
                  background: "#fff",
                  boxShadow: "0 2px 16px rgba(31,77,46,.07)",
                  cursor: "pointer",
                }}>
                  <div className="img-zoom" style={{ position: "relative", width: "100%", aspectRatio: "3/4" }}>
                    {drink.image ? (
                      <Image src={drink.image} alt={drink.name} fill className="img-zoom-inner"
                        style={{ objectFit: "cover" }} sizes="(max-width:768px) 50vw, 200px" />
                    ) : (
                      <div style={{ width: "100%", height: "100%", background: "var(--beige-warm)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36 }}>🧋</div>
                    )}
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,.45) 0%, transparent 55%)",
                    }} />
                    <span className="badge badge-teal" style={{
                      position: "absolute", top: 10, left: 10, fontSize: 9,
                      backdropFilter: "blur(6px)", background: "rgba(0,168,150,.85)",
                    }}>☀️ MÙA HÈ</span>
                  </div>
                  <div style={{ padding: "14px 16px 18px" }}>
                    <h3 style={{ fontSize: 13, fontWeight: 700, marginBottom: 4, lineHeight: 1.4 }}>
                      {drink.name}
                    </h3>
                    {drink.desc && (
                      <p style={{ fontSize: 12, color: "var(--text-light)", marginBottom: 8, lineHeight: 1.5 }}>
                        {drink.desc}
                      </p>
                    )}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ fontSize: 14, fontWeight: 800, color: "var(--green-mid)" }}>
                        {formatPrice(drink.price)}
                      </span>
                      <Link href="/san-pham" style={{ fontSize: 11, color: "var(--vn-red)", fontWeight: 700, opacity: .85 }}>
                        Đặt ngay
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div style={{ textAlign: "center", marginTop: 44 }}>
              <Link href="/san-pham" className="btn btn-outline-green" style={{ textDecoration: "none" }}>
                Tìm hiểu thêm →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §3  CULTURE — Nghệ thuật pha chế
      ═══════════════════════════════════════════════════════════ */}
      <section style={{
        background: "linear-gradient(160deg, var(--green-deep) 0%, #1A3D28 50%, var(--green-deep) 100%)",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 30% 60%, rgba(196,154,108,.12) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <p className="section-label" style={{ color: "rgba(196,154,108,.8)" }}>
                NGHỆ THUẬT PHA CHẾ
              </p>
              <h2 style={{
                fontSize: "clamp(26px, 4vw, 50px)",
                fontWeight: 800, color: "#fff",
                marginBottom: 14, lineHeight: 1.15,
              }}>
                Hương vị Việt Nam<br />qua từng phương pháp
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,.6)", maxWidth: 500, margin: "0 auto", lineHeight: 1.8 }}>
                Phê La không chỉ bán thức uống — mỗi phương pháp pha chế là một cuộc hành trình khám phá hương vị.
              </p>
            </div>
          </ScrollReveal>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 28,
          }}>
            {[
              {
                key: "syphon",
                icon: "⚗️",
                title: "Syphon",
                desc: "Phương pháp pha chế tinh tế nhất — dùng áp suất và nhiệt để chiết xuất từng tầng hương vị trong trà Oolong và cà phê đặc sản.",
                img: "https://phela.vn/wp-content/uploads/2021/07/14287.jpg",
                tag: "Tinh tế nhất",
                drinks: ["Ô Long Sữa", "Phong Lan", "Matcha Phan Xi Păng"],
              },
              {
                key: "french",
                icon: "☕",
                title: "French Press",
                desc: "Đơn giản nhưng đậm đà — French Press giải phóng hết tinh dầu và hương thơm, tạo ra những ly trà trái cây đầy sắc màu.",
                img: "https://phela.vn/wp-content/uploads/2024/10/Ver-03-Lua-Dao-Phien-ban-Dong-Chill-yeu-thich-size-Phe.jpg",
                tag: "Đậm vị nhất",
                drinks: ["Lụa Đào", "Ô Long Đào Hồng", "Gấm Vải"],
              },
              {
                key: "oolong",
                icon: "🍃",
                title: "Trà Oolong Đà Lạt",
                desc: "Nguyên liệu tuyển chọn từ cao nguyên Việt Nam, qua tay nghệ nhân Phê La tạo nên những ly trà mang đậm bản sắc quê hương.",
                img: "https://phela.vn/wp-content/uploads/2026/03/Phan-Xi-Pang-Long-Nhan-da-xay-scaled.jpg",
                tag: "Đặc sản VN",
                drinks: ["Phan Xi Păng Long Nhãn", "Mật Nhãn", "Ô Long Nhài Sữa"],
              },
            ].map((item, i) => (
              <ScrollReveal key={item.key} delay={i * 110}>
                <div style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  background: "rgba(255,255,255,.06)",
                  border: "1px solid rgba(255,255,255,.1)",
                  backdropFilter: "blur(10px)",
                  transition: "transform .35s ease, background .35s ease",
                  cursor: "pointer",
                }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-8px)";
                    (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,.06)";
                  }}
                >
                  <div className="img-zoom" style={{ position: "relative", width: "100%", aspectRatio: "16/10" }}>
                    <Image src={item.img} alt={item.title} fill className="img-zoom-inner"
                      style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, 380px" />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,.6) 0%, transparent 60%)" }} />
                    <span className="badge" style={{
                      position: "absolute", top: 14, left: 14,
                      background: "rgba(196,154,108,.9)", color: "#1a0a00",
                      backdropFilter: "blur(4px)", fontSize: 10,
                    }}>
                      {item.tag}
                    </span>
                  </div>
                  <div style={{ padding: "22px 24px 26px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                      <span style={{ fontSize: 26 }}>{item.icon}</span>
                      <h3 style={{ fontSize: 20, fontWeight: 800, color: "#fff", margin: 0 }}>{item.title}</h3>
                    </div>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,.65)", lineHeight: 1.75, marginBottom: 16 }}>
                      {item.desc}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
                      {item.drinks.map((d) => (
                        <span key={d} style={{
                          fontSize: 11, color: "rgba(196,154,108,.8)",
                          border: "1px solid rgba(196,154,108,.3)",
                          padding: "3px 10px", borderRadius: 100,
                        }}>{d}</span>
                      ))}
                    </div>
                    <Link href="/san-pham" style={{
                      fontSize: 12, fontWeight: 700, color: "rgba(196,154,108,.9)",
                      letterSpacing: 0.5, display: "inline-flex", alignItems: "center", gap: 6,
                    }}>
                      Xem thêm →
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §4  CAMPAIGN 30/4 — Khuyến mãi
      ═══════════════════════════════════════════════════════════ */}
      <section style={{
        background: "linear-gradient(135deg, var(--vn-red) 0%, var(--vn-red-dark) 100%)",
        padding: "96px 24px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "50%", right: "-5%",
          transform: "translateY(-50%)",
          fontSize: "min(70vw, 560px)", color: "rgba(255,205,0,.06)",
          lineHeight: 1, userSelect: "none", pointerEvents: "none", fontWeight: 900,
        }}>★</div>

        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <ScrollReveal>
            <div className="star-pulse" style={{ fontSize: 48, marginBottom: 16, display: "inline-block" }}>🇻🇳</div>
            <p style={{
              fontSize: 11, fontWeight: 700, letterSpacing: 3,
              color: "rgba(255,255,255,.6)", marginBottom: 12,
            }}>
              ƯU ĐÃI ĐẶC BIỆT DỊP 30/4 🇻🇳
            </p>
            <h2 style={{
              fontSize: "clamp(28px, 5vw, 60px)",
              fontWeight: 900, color: "#fff",
              lineHeight: 1.05, marginBottom: 16,
            }}>
              Mặc áo cờ đỏ sao vàng —<br />
              <span style={{ color: "var(--vn-yellow)" }}>Nhận ngay FREE topping!</span>
            </h2>
            <p style={{
              fontSize: "clamp(15px, 1.8vw, 19px)",
              color: "rgba(255,255,255,.8)",
              maxWidth: 560, margin: "0 auto 32px",
              lineHeight: 1.8,
            }}>
              Diện outfit yêu nước, ghé bất kỳ cửa hàng Phê La ngày 30/4 – 1/5 và
              nhận <strong style={{ color: "var(--vn-yellow)" }}>1 topping miễn phí</strong> hoặc
              giảm giá đặc biệt cho nhóm trên 4 người.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/khuyen-mai" className="btn btn-yellow" style={{ textDecoration: "none" }}>
                🎉 Xem chi tiết ưu đãi
              </Link>
              <Link href="/cua-hang" className="btn btn-outline-white" style={{ textDecoration: "none" }}>
                📍 Tìm cửa hàng gần nhất
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §5  STORE EXPERIENCE — Chill tại cửa hàng
      ═══════════════════════════════════════════════════════════ */}
      <section style={{ background: "var(--beige-warm)", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
            className="grid-2"
          >
            {/* Text */}
            <ScrollReveal direction="left">
              <p className="section-label" style={{ justifyContent: "flex-start" }}>
                TRẢI NGHIỆM CỬA HÀNG
              </p>
              <h2 style={{
                fontSize: "clamp(24px, 3.5vw, 44px)",
                fontWeight: 800, color: "var(--green-deep)",
                lineHeight: 1.2, marginBottom: 18,
              }}>
                Cùng Phê La<br />tận hưởng kỳ nghỉ
              </h2>
              <p style={{
                fontSize: 16, color: "var(--text-body)", lineHeight: 1.85, marginBottom: 28,
              }}>
                Ghé Phê La, tận hưởng không gian chill thoáng mát với âm nhạc nhẹ nhàng và
                không khí lễ hội 30/4. Đặc biệt: trang trí flag-theme, playlist đặc biệt và nhiều bất ngờ!
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
                {[
                  { icon: "🎵", text: "Nhạc chill tháng 4 — playlist đặc biệt" },
                  { icon: "📸", text: "Góc check-in flag-theme 30/4" },
                  { icon: "🎁", text: "Quà lưu niệm cho khách check-in sớm" },
                  { icon: "☕", text: "Menu đặc biệt chỉ có trong dịp lễ" },
                ].map((item) => (
                  <div key={item.text} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <span style={{ fontSize: 20, flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
                    <span style={{ fontSize: 14, color: "var(--text-body)", lineHeight: 1.6 }}>{item.text}</span>
                  </div>
                ))}
              </div>
              <Link href="/cua-hang" className="btn btn-green" style={{ textDecoration: "none" }}>
                Tìm cửa hàng →
              </Link>
            </ScrollReveal>

            {/* Photo grid */}
            <ScrollReveal direction="right">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {[
                  { img: "https://phela.vn/wp-content/uploads/2025/05/Bong-Buoi-scaled.jpg", span: "2" },
                  { img: "https://phela.vn/wp-content/uploads/2024/07/4-Khoi-B_Lao.jpg",    span: "1" },
                  { img: "https://phela.vn/wp-content/uploads/2023/11/PHONG-LAN-scaled.jpg", span: "1" },
                ].map((item, i) => (
                  <div key={i} className="img-zoom" style={{
                    position: "relative",
                    borderRadius: 14,
                    overflow: "hidden",
                    aspectRatio: item.span === "2" ? "16/9" : "1",
                    gridColumn: item.span === "2" ? "span 2" : "span 1",
                  }}>
                    <Image src={item.img} alt="" fill className="img-zoom-inner"
                      style={{ objectFit: "cover" }} sizes="300px" />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
        <style>{`@media(max-width:640px){.grid-2{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §6  COMMUNITY — #PheLa304
      ═══════════════════════════════════════════════════════════ */}
      <section style={{ background: "#fff", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <p className="section-label vn">KHOẢNH KHẮC PHÊ LA 🇻🇳</p>
              <h2 style={{
                fontSize: "clamp(24px, 4vw, 44px)",
                fontWeight: 800, color: "var(--green-deep)",
                marginBottom: 12,
              }}>
                Khách hàng đã trải nghiệm 30/4<br />tại Phê La như thế nào?
              </h2>
              <p style={{ fontSize: 15, color: "var(--text-body)", maxWidth: 440, margin: "0 auto", lineHeight: 1.7 }}>
                Tag <strong style={{ color: "var(--vn-red)" }}>#PheLa304</strong> để chia sẻ khoảnh khắc của bạn.
                Ảnh đẹp nhất sẽ được repost trên fanpage Phê La!
              </p>
            </div>
          </ScrollReveal>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 10,
          }}>
            {ugc.map((post, i) => (
              <ScrollReveal key={i} delay={i * 70} direction="scale">
                <div className="img-zoom" style={{
                  position: "relative",
                  borderRadius: 12, overflow: "hidden",
                  aspectRatio: i === 0 || i === 4 ? "3/4" : "1",
                  cursor: "pointer",
                  gridRow: i === 0 ? "span 2" : undefined,
                }}>
                  <Image src={post.img} alt={post.caption} fill className="img-zoom-inner"
                    style={{ objectFit: "cover" }} sizes="(max-width:768px) 33vw, 400px" />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,.72) 0%, transparent 55%)",
                    opacity: 0, transition: "opacity .3s ease",
                  }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.opacity = "1"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.opacity = "0"; }}
                  >
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px 14px" }}>
                      <p style={{ fontSize: 12, fontWeight: 600, color: "#fff", margin: "0 0 3px" }}>{post.handle}</p>
                      <p style={{ fontSize: 11, color: "rgba(255,255,255,.8)", margin: "0 0 5px", lineHeight: 1.4 }}>{post.caption}</p>
                      <span style={{ fontSize: 10, color: "var(--vn-yellow)" }}>❤ {post.likes}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <span style={{
                fontSize: "clamp(22px, 4vw, 36px)",
                fontWeight: 900, color: "var(--vn-red)", letterSpacing: -0.5,
              }}>
                #PheLa304 🇻🇳
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §7  BLOG — Bài viết nổi bật
      ═══════════════════════════════════════════════════════════ */}
      <section style={{ background: "var(--beige-pale)", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <p className="section-label">KHÁM PHÁ THÊM</p>
              <h2 style={{
                fontSize: "clamp(24px, 4vw, 42px)",
                fontWeight: 800, color: "var(--green-deep)", marginBottom: 12,
              }}>
                Đọc để hiểu hơn về Phê La
              </h2>
            </div>
          </ScrollReveal>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 26,
          }}>
            {articles.map((article, i) => (
              <ScrollReveal key={article.id} delay={i * 90}>
                <Link href="/tin-tuc" style={{ display: "block" }}>
                  <article className="card-hover" style={{
                    background: "#fff",
                    borderRadius: 18,
                    overflow: "hidden",
                    boxShadow: "0 2px 16px rgba(31,77,46,.06)",
                  }}>
                    <div className="img-zoom" style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
                      {article.image ? (
                        <Image src={article.image} alt={article.title} fill className="img-zoom-inner"
                          style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, 380px" />
                      ) : (
                        <div style={{ width: "100%", height: "100%", background: "var(--beige-warm)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36 }}>📖</div>
                      )}
                      <span className="badge badge-green" style={{
                        position: "absolute", top: 12, left: 12, fontSize: 9,
                        backdropFilter: "blur(4px)", background: "rgba(31,77,46,.85)",
                      }}>
                        {article.category}
                      </span>
                    </div>
                    <div style={{ padding: "20px 22px 24px" }}>
                      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
                        <span style={{ fontSize: 11, color: "var(--text-light)" }}>{article.date}</span>
                        {article.readTime && (
                          <span style={{ fontSize: 11, color: "var(--text-light)" }}>· {article.readTime} phút đọc</span>
                        )}
                      </div>
                      <h3 style={{ fontSize: "clamp(14px, 1.8vw, 17px)", fontWeight: 700, lineHeight: 1.45, marginBottom: 10, color: "var(--green-deep)" }}>
                        {article.title}
                      </h3>
                      <p style={{
                        fontSize: 13, color: "var(--text-body)", lineHeight: 1.7, marginBottom: 14,
                        display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
                      }}>
                        {article.excerpt}
                      </p>
                      <span style={{ fontSize: 12, fontWeight: 700, color: "var(--green-mid)" }}>Đọc tiếp →</span>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={280}>
            <div style={{ textAlign: "center", marginTop: 44 }}>
              <Link href="/tin-tuc" className="btn btn-green" style={{ textDecoration: "none" }}>
                Xem tất cả bài viết
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §8  CTA FINAL
      ═══════════════════════════════════════════════════════════ */}
      <section style={{
        background: "linear-gradient(160deg, var(--green-deep) 0%, #0E2A1A 100%)",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 50% 110%, rgba(196,154,108,.15) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        <ScrollReveal>
          <div style={{ position: "relative", maxWidth: 700, margin: "0 auto" }}>
            <div className="heartbeat" style={{ fontSize: 52, marginBottom: 18, display: "inline-block" }}>☕</div>
            <h2 style={{
              fontSize: "clamp(28px, 5vw, 58px)",
              fontWeight: 900, color: "#fff",
              lineHeight: 1.1, marginBottom: 16,
            }}>
              Thưởng thức Phê La<br />
              <span style={{ color: "var(--vn-yellow)" }}>ngay hôm nay</span>
            </h2>
            <p style={{
              fontSize: "clamp(14px, 1.8vw, 18px)",
              color: "rgba(255,255,255,.65)",
              maxWidth: 500, margin: "0 auto 36px",
              lineHeight: 1.8,
            }}>
              Hơn <strong style={{ color: "#fff" }}>25 cửa hàng</strong> toàn quốc, từ Hà Nội đến TP.HCM.
              Đặt ngay và trải nghiệm hương vị đặc sản Việt Nam.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/cua-hang" className="btn btn-yellow" style={{ textDecoration: "none" }}>
                📍 Tìm cửa hàng
              </Link>
              <Link href="/san-pham" className="btn btn-outline-white" style={{ textDecoration: "none" }}>
                🧋 Đặt ngay
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
