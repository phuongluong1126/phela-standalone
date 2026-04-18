import Image from "next/image";
import { Product, formatPrice } from "@/lib/data";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        cursor: "pointer",
      }}
    >
      {/* Product image */}
      <div
        style={{
          width: "100%",
          aspectRatio: "1",
          background: "#f0ebe4",
          borderRadius: 4,
          overflow: "hidden",
          transition: "transform .3s",
          position: "relative",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "scale(1.02)")
        }
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 50vw, 220px"
          />
        ) : (
          <span
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#a08060",
              fontSize: 13,
              textAlign: "center",
              padding: 16,
              fontStyle: "italic",
            }}
          >
            {product.name}
          </span>
        )}
      </div>

      {/* Name */}
      <h3
        style={{
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: 0.5,
          lineHeight: 1.4,
          margin: 0,
          minHeight: 36,
        }}
      >
        {product.name}
      </h3>

      {/* Price */}
      <p
        style={{
          fontSize: 14,
          fontWeight: 500,
          color: product.price === 0 ? "#999" : "#1a1a1a",
          margin: 0,
        }}
      >
        {formatPrice(product.price)}
      </p>

      {/* Buy button */}
      <button
        style={{
          background: "#1a1a1a",
          color: "#fff",
          border: "none",
          padding: "10px 0",
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: 1.5,
          cursor: "pointer",
          borderRadius: 2,
          transition: "background .2s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "#8B4513")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "#1a1a1a")
        }
      >
        MUA NGAY
      </button>
    </div>
  );
}
