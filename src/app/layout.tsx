import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "700", "800"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: "هوت لاين للخدمات الملاحية | Hotline International",
  description: "الشريك اللوجستي الرائد الذي يربط خطوط التجارة العالمية بكافة موانئ اليمن بسلامة مطلقة. قوة في الشحن والتخليص والتخزين.",
  openGraph: {
    title: "هوت لاين ماتركس للخدمات اللوجستية والملاحية",
    description: "تأمين سلاسل الإمداد العالمية إلى الشرق الأوسط واليمن وتتبع البضائع لحظياً. نحن نهندس وصول تجارتك في أحلك الظروف.",
    url: "https://hotline-int.com",
    siteName: "Hotline International",
    images: [
      {
        url: "/images/logo_with_text.png", // Will appear automatically in WhatsApp/Viber
        width: 800,
        height: 600,
        alt: "شعار هوت لاين الرسمي",
      },
      {
        url: "/images/shipping.jpeg", // Fallback rich image banner
        width: 1200,
        height: 630,
        alt: "سفن شحن عملاقة",
      }
    ],
    locale: "ar_YE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "هوت لاين للخدمات الملاحية | Hotline International",
    description: "تأمين سلاسل الإمداد العالمية إلى الشرق الأوسط واليمن وتتبع البضائع لحظياً.",
    images: ["/images/logo_with_text.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className={`${tajawal.variable} font-sans antialiased text-gray-800 flex min-h-screen flex-col pt-[72px] md:pt-[110px]`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
