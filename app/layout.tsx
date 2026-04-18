import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingSplash from "@/components/LoadingSplash";
import WelcomePopup from "@/components/WelcomePopup";
import StickyOrder from "@/components/StickyOrder";

export const metadata: Metadata = {
  title: "Phê La – Specialty Coffee & Oolong Tea | Chiến dịch 30/4",
  description: "Trải nghiệm cà phê đặc sản và trà Oolong Việt Nam. Ưu đãi đặc biệt dịp 30/4 – 1/5: FREE topping khi gọi bất kỳ thức uống.",
  keywords: "Phê La, cà phê đặc sản, trà Oolong, Cold Brew, Syphon, 30/4, Việt Nam",
  openGraph: {
    title: "Phê La – Nốt Hương Đặc Sản",
    description: "Free topping dịp 30/4 – 1/5. Đồ uống đặc sản Việt Nam.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LoadingSplash />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WelcomePopup />
        <StickyOrder />
      </body>
    </html>
  );
}
