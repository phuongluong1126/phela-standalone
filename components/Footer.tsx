import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#1a1a1a",
        color: "#999",
        padding: "48px 24px",
        marginTop: 64,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 40,
        }}
      >
        {/* About */}
        <div>
          <h3
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: 600,
              marginBottom: 16,
            }}
          >
            Về chúng tôi
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 14 }}>
            <Link href="/san-pham" style={{ transition: "color .2s" }}>
              Sản phẩm
            </Link>
            <Link href="/ve-chung-toi">Về Phê La</Link>
            <Link href="/cua-hang">Hệ thống cửa hàng</Link>
          </div>
        </div>

        {/* Company info */}
        <div>
          <h3
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: 600,
              marginBottom: 16,
            }}
          >
            Công Ty Cổ Phần Phê La
          </h3>
          <p style={{ fontSize: 13, lineHeight: 1.7 }}>
            Trụ sở chính: 289 Đinh Bộ Lĩnh, Phường Bình Thạnh, TP Hồ Chí
            Minh
            <br />
            Chi nhánh Hà Nội: Lô 04-9A KCN Vĩnh Hoàng, Hoàng Mai, Hà Nội
            <br />
            GPKD: 0317601095 - cấp ngày 09/12/2022
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: 600,
              marginBottom: 16,
            }}
          >
            Liên hệ
          </h3>
          <p style={{ fontSize: 13, lineHeight: 1.7 }}>
            Email: cskh@phela.vn
            <br />
            Hotline: 1900 3013 (8h30 – 22h)
          </p>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: "32px auto 0",
          borderTop: "1px solid #333",
          paddingTop: 24,
          textAlign: "center",
          fontSize: 12,
          color: "#666",
        }}
      >
        © 2024 Bản quyền thuộc về Công Ty Cổ Phần Phê La
      </div>
    </footer>
  );
}
