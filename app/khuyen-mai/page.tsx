"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { products, formatPrice } from "@/lib/data";

const toppings = products.filter((p) => p.category === "topping");

const steps = [
  { num: "01", icon: "🧋", title: "Chọn thức uống bất kỳ", desc: "Từ Cold Brew, Ô Long, Matcha đến Cà Phê — toàn bộ thực đơn đều áp dụng." },
  { num: "02", icon: "🎁", title: "Chọn 1 topping miễn phí", desc: "Trân Châu, Thạch Trà, Thạch Ô Long — bạn chọn, Phê La tặng." },
  { num: "03", icon: "🇻🇳", title: "Chill cùng Phê La 30/4", desc: "Nâng ly mừng 50 năm ngày giải phóng. Tự do có vị thật ngon!" },
];

const summerHighlights = products.filter((p) =>
  ["bong-buoi-o-long", "lang-biang", "si-mo-la", "lua-dao", "o-long-sua", "matcha-phan-xi-pang"].includes(p.id)
);

function Countdown() {
  const target = new Date("2026-04-30T00:00:00");
  const [diff, setDiff] = useState(0);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const ms = target.getTime() - now.getTime();
      setDiff(Math.max(0, ms));
    };
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  const totalSecs = Math.floor(diff / 1000);
  const d = Math.floor(totalSecs / 86400);
  const h = Math.floor((totalSecs % 86400) / 3600);
  const m = Math.floor((totalSecs % 3600) / 60);
  const s = totalSecs % 60;

  const pad = (n: number) => String(n).padStart(2, "0");

  if (diff <= 0) {
    return (
      <div style={{ textAlign: "center", padding: "20px 0" }}>
        <p style={{ fontSize: 24, fontWeight: 800, color: "#FFCD00" }}>
          🎉 Ưu đãi đang diễn ra! Gọi ngay hôm nay!
        </p>
      </div>
    );
  }

  return (
    <div style={{
      display: "flex", gap: "clamp(12px, 3vw, 28px)",
      justifyContent: "center", alignItems: "center",
    }}>
      {[
        { val: d, label: "NGÀY" },
        { val: h, label: "GIỜ" },
        { val: m, label: "PHÚT" },
        { val: s, label: "GIÂY" },
      ].map(({ val, label }, i) => (
        <div key={label} style={{ textAlign: "center" }}>
          <div className="countdown-num">
            {pad(val)}
          </div>
          <div style={{
            fontSize: 10, fontWeight: 700, letterSpacing: 2,
            color: "rgba(255,255,255,0.5)", marginTop: 4,
          }}>
            {label}
          </div>
          {i < 3 && (
            <span style={{
              position: "absolute", marginLeft: "clamp(8px, 2vw, 16px)",
              marginTop: "-clamp(20px, 4vw, 36px)",
              fontSize: "clamp(20px, 4vw, 48px)",
              color: "rgba(255,205,0,0.4)", fontWeight: 800,
              lineHeight: 1,
            }}>:</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default function KhuyenMaiPage() {
  return (
    <div>
      {/* ==================== HERO ==================== */}
      <section style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(160deg, #0e0404 0%, #DA251D 45%, #8B0D09 100%)",
        overflow: "hidden",
        padding: "80px 24px",
        textAlign: "center",
      }}>
        {/* Large star background */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "min(80vw, 600px)",
          color: "rgba(255,205,0,0.05)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          fontWeight: 900,
        }}>
          ★
        </div>

        {/* Circles */}
        <div style={{
          position: "absolute", top: "-15%", right: "-10%",
          width: 500, height: 500, borderRadius: "50%",
          border: "1px solid rgba(255,205,0,0.1)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-20%", left: "-12%",
          width: 600, height: 600, borderRadius: "50%",
          border: "1px solid rgba(255,205,0,0.06)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", maxWidth: 800 }}>
          {/* Date badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#FFCD00", color: "#1a0a08",
            fontSize: 12, fontWeight: 800, letterSpacing: 2,
            padding: "7px 20px", borderRadius: 100,
            marginBottom: 24,
            animation: "fadeInDown 0.8s both",
          }}>
            🇻🇳 &nbsp;30 THÁNG 4 — 1 THÁNG 5 · 2026
          </div>

          <h1 style={{
            fontSize: "clamp(36px, 7vw, 88px)",
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1.0,
            marginBottom: 16,
            letterSpacing: -1,
            animation: "fadeInUp 1s 0.1s both",
          }}>
            FREE<br />
            <span style={{ color: "#FFCD00" }}>TOPPING</span>
          </h1>

          <h2 style={{
            fontSize: "clamp(18px, 3vw, 32px)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.85)",
            marginBottom: 12,
            letterSpacing: 0.5,
            animation: "fadeInUp 1s 0.2s both",
          }}>
            Mừng Ngày Giải Phóng Cùng Phê La
          </h2>

          <p style={{
            fontSize: "clamp(14px, 1.8vw, 18px)",
            color: "rgba(255,255,255,0.65)",
            maxWidth: 500, margin: "0 auto 36px",
            lineHeight: 1.8,
            animation: "fadeInUp 1s 0.3s both",
          }}>
            Gọi bất kỳ thức uống Phê La vào ngày 30/4 và 1/5 —
            được tặng kèm <strong style={{ color: "#FFCD00" }}>1 topping hoàn toàn miễn phí</strong>.
          </p>

          {/* Countdown */}
          <div style={{
            marginBottom: 40,
            animation: "fadeInUp 1s 0.4s both",
          }}>
            <p style={{
              fontSize: 11, fontWeight: 700, letterSpacing: 2,
              color: "rgba(255,255,255,0.4)", marginBottom: 16,
            }}>
              ĐẾM NGƯỢC ĐẾN NGÀY 30/4
            </p>
            <Countdown />
          </div>

          <div style={{
            display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap",
            animation: "fadeInUp 1s 0.5s both",
          }}>
            <Link href="/san-pham" className="btn-campaign btn-yellow" style={{ textDecoration: "none" }}>
              🧋 &nbsp;Đặt ngay
            </Link>
            <Link href="/cua-hang" className="btn-campaign" style={{
              textDecoration: "none",
              background: "transparent", color: "#fff",
              border: "2px solid rgba(255,255,255,0.4)",
            }}>
              📍 &nbsp;Tìm cửa hàng
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section style={{ background: "#FFF9F0", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <p className="section-label" style={{ justifyContent: "center" }}>
                CÁCH NHẬN ƯU ĐÃI
              </p>
              <h2 style={{
                fontSize: "clamp(24px, 4vw, 40px)",
                fontWeight: 700, marginBottom: 12,
              }}>
                Đơn Giản 3 Bước
              </h2>
              <p style={{ fontSize: 15, color: "#666", maxWidth: 440, margin: "0 auto" }}>
                Không cần mã giảm giá, không cần đăng ký. Chỉ cần đến Phê La và order!
              </p>
            </div>
          </ScrollReveal>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 28,
          }}>
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 120} direction="up">
                <div style={{
                  background: "#fff",
                  borderRadius: 20,
                  padding: "36px 32px",
                  position: "relative",
                  border: "1px solid rgba(218,37,29,0.08)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                  transition: "transform 0.35s ease, box-shadow 0.35s ease",
                  cursor: "default",
                }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-8px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 40px rgba(218,37,29,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.04)";
                  }}
                >
                  <div style={{
                    position: "absolute", top: -1, left: 32,
                    background: "linear-gradient(135deg, #DA251D, #A81B15)",
                    color: "#fff",
                    fontSize: 11, fontWeight: 800, letterSpacing: 1,
                    padding: "4px 14px", borderRadius: "0 0 10px 10px",
                  }}>
                    BƯỚC {step.num}
                  </div>
                  <div style={{ fontSize: 48, marginBottom: 16, marginTop: 16 }}>
                    {step.icon}
                  </div>
                  <h3 style={{
                    fontSize: 18, fontWeight: 700, marginBottom: 10, lineHeight: 1.3,
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontSize: 14, color: "#666", lineHeight: 1.7, margin: 0,
                  }}>
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FREE TOPPING CHOICES ==================== */}
      <section style={{ padding: "96px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <p className="section-label" style={{ justifyContent: "center" }}>
                TOPPING MIỄN PHÍ
              </p>
              <h2 style={{
                fontSize: "clamp(24px, 4vw, 40px)",
                fontWeight: 700, marginBottom: 12,
              }}>
                Chọn Topping Bạn Yêu Thích
              </h2>
              <p style={{ fontSize: 15, color: "#666", maxWidth: 440, margin: "0 auto" }}>
                Tất cả topping đều áp dụng — thêm 1 miễn phí bất kỳ khi gọi thức uống ngày 30/4 – 1/5.
              </p>
            </div>
          </ScrollReveal>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: 20,
          }}>
            {toppings.slice(0, 8).map((topping, i) => (
              <ScrollReveal key={topping.id} delay={i * 60} direction="scale">
                <div style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  background: "#FFF9F0",
                  border: "1px solid rgba(218,37,29,0.08)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 30px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  <div style={{ position: "relative", width: "100%", aspectRatio: "1" }}>
                    {topping.image ? (
                      <Image
                        src={topping.image}
                        alt={topping.name}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="180px"
                      />
                    ) : (
                      <div style={{
                        width: "100%", height: "100%",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        background: "#f0ebe4", fontSize: 32,
                      }}>
                        🧋
                      </div>
                    )}
                    <div style={{
                      position: "absolute", top: 10, right: 10,
                      background: "#DA251D",
                      color: "#fff", fontSize: 9, fontWeight: 800,
                      letterSpacing: 1, padding: "3px 8px", borderRadius: 4,
                    }}>
                      FREE
                    </div>
                  </div>
                  <div style={{ padding: "12px 14px 16px" }}>
                    <p style={{
                      fontSize: 12, fontWeight: 700, margin: "0 0 4px",
                      lineHeight: 1.4, color: "#1a1a1a",
                    }}>
                      {topping.name}
                    </p>
                    <p style={{
                      fontSize: 12, color: "#999", margin: 0,
                      textDecoration: "line-through",
                    }}>
                      {formatPrice(topping.price) === "Liên hệ" ? "" : formatPrice(topping.price)}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SUMMER DRINKS ==================== */}
      <section style={{
        background: "linear-gradient(135deg, #FFF3E0 0%, #FFF9F0 100%)",
        padding: "96px 24px",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <p className="section-label" style={{ justifyContent: "center" }}>
                GỌI KÈM ƯU ĐÃI
              </p>
              <h2 style={{
                fontSize: "clamp(24px, 4vw, 40px)",
                fontWeight: 700, marginBottom: 12,
              }}>
                ☀️ Đồ Uống Nổi Bật Mùa Hè
              </h2>
            </div>
          </ScrollReveal>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: 20,
          }}>
            {summerHighlights.map((drink, i) => (
              <ScrollReveal key={drink.id} delay={i * 70}>
                <div style={{
                  borderRadius: 16, overflow: "hidden",
                  background: "#fff",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-8px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.05)";
                  }}
                >
                  <div style={{ position: "relative", width: "100%", aspectRatio: "3/4" }}>
                    {drink.image ? (
                      <Image
                        src={drink.image}
                        alt={drink.name}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="180px"
                      />
                    ) : (
                      <div style={{
                        width: "100%", height: "100%",
                        background: "linear-gradient(135deg, #f5ebe0, #e8d5c0)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 32,
                      }}>🧋</div>
                    )}
                    <div style={{
                      position: "absolute", top: 10, left: 10,
                      background: "rgba(0,168,150,0.9)",
                      color: "#fff", fontSize: 9, fontWeight: 800,
                      letterSpacing: 1, padding: "3px 8px", borderRadius: 4,
                      backdropFilter: "blur(4px)",
                    }}>
                      MÙA HÈ
                    </div>
                  </div>
                  <div style={{ padding: "14px 16px 18px" }}>
                    <p style={{
                      fontSize: 12, fontWeight: 700, margin: "0 0 6px",
                      lineHeight: 1.4, color: "#1a1a1a",
                    }}>
                      {drink.name}
                    </p>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "#DA251D", margin: 0 }}>
                      {formatPrice(drink.price)}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div style={{ textAlign: "center", marginTop: 44 }}>
              <Link href="/san-pham" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#1a1a1a", color: "#fff",
                padding: "14px 40px",
                fontSize: 12, fontWeight: 700, letterSpacing: 2,
                borderRadius: 3, textDecoration: "none",
                transition: "background 0.2s ease",
              }}>
                XEM ĐẦY ĐỦ THỰC ĐƠN →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== T&C ==================== */}
      <section style={{
        background: "#1a1a1a", padding: "64px 24px",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <ScrollReveal>
            <h2 style={{
              fontSize: 18, fontWeight: 700, color: "#fff",
              marginBottom: 20,
            }}>
              📋 Điều Khoản Chương Trình
            </h2>
            <ul style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: 13,
              lineHeight: 2,
              paddingLeft: 20,
              margin: 0,
            }}>
              <li>Chương trình áp dụng từ 00:00 ngày 30/4/2026 đến 23:59 ngày 1/5/2026.</li>
              <li>Áp dụng tại tất cả cửa hàng Phê La trên toàn quốc.</li>
              <li>Mỗi hoá đơn được tặng tối đa 1 topping miễn phí.</li>
              <li>Topping miễn phí không quy đổi thành tiền mặt.</li>
              <li>Áp dụng cho tất cả sản phẩm trong thực đơn hiện hành.</li>
              <li>Phê La có quyền thay đổi điều khoản mà không cần báo trước.</li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section style={{
        position: "relative",
        background: "linear-gradient(135deg, #DA251D, #A81B15)",
        padding: "100px 24px",
        textAlign: "center",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse at 50% 120%, rgba(255,205,0,0.15) 0%, transparent 60%)",
        }} />
        <ScrollReveal>
          <div style={{ position: "relative" }}>
            <div className="heartbeat-anim" style={{ fontSize: 56, marginBottom: 16, display: "inline-block" }}>
              🇻🇳
            </div>
            <h2 style={{
              fontSize: "clamp(28px, 5vw, 60px)",
              fontWeight: 900, color: "#fff",
              marginBottom: 16, lineHeight: 1.1,
            }}>
              Đặt Ngay<br />
              <span style={{ color: "#FFCD00" }}>30/4 — 1/5</span>
            </h2>
            <p style={{
              fontSize: "clamp(14px, 1.8vw, 18px)",
              color: "rgba(255,255,255,0.75)",
              maxWidth: 480, margin: "0 auto 36px",
              lineHeight: 1.8,
            }}>
              Nâng ly Phê La, mừng 50 năm đất nước thống nhất.
              Tự do có vị thật ngọt ngào.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/san-pham" className="btn-campaign btn-yellow" style={{ textDecoration: "none" }}>
                🧋 &nbsp;Đặt đồ uống ngay
              </Link>
              <Link href="/cua-hang" className="btn-campaign" style={{
                textDecoration: "none",
                background: "transparent", color: "#fff",
                border: "2px solid rgba(255,255,255,0.4)",
              }}>
                📍 &nbsp;Hệ thống cửa hàng
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
