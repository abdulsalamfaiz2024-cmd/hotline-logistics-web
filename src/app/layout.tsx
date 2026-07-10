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
  metadataBase: new URL("https://www.hotline-int-ye.com"),
  title: {
    default: "شركة هوت لاين انترناشيونال للشحن والتفريغ والخدمات الملاحية | الشريك اللوجستي الموثوق",
    template: "%s | شركة هوت لاين انترناشيونال للشحن والتفريغ والخدمات الملاحية",
  },
  description: "شريكك اللوجستي لنقل البضائع عبر كافة المنافذ البحرية والبرية والجوية. خدمات استيراد وتصدير متكاملة بأعلى معايير الأمان والسرعة.",
  keywords: ["شحن", "تفريغ", "خدمات ملاحية", "لوجستيك", "استيراد", "تصدير", "شحن بحري", "شحن جوي", "شحن بري", "نقل بضائع", "اليمن", "صنعاء", "هوت لاين", "Hotline international for shipping, stevedoring and maritime services", "stevedoring", "maritime services", "logistics", "shipping", "Yemen"],
  authors: [{ name: "Hotline international for shipping, stevedoring and maritime services", url: "https://www.hotline-int-ye.com" }],
  creator: "Hotline international for shipping, stevedoring and maritime services",
  publisher: "Hotline international for shipping, stevedoring and maritime services",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    url: "https://www.hotline-int-ye.com/",
    title: "شركة هوت لاين انترناشيونال للشحن والتفريغ والخدمات الملاحية | الشريك اللوجستي الموثوق",
    description: "شريكك اللوجستي لنقل البضائع عبر كافة المنافذ البحرية والبرية والجوية. خدمات استيراد وتصدير متكاملة بأعلى معايير الأمان والسرعة.",
    siteName: "شركة هوت لاين انترناشيونال للشحن والتفريغ والخدمات الملاحية",
    locale: "ar_YE",
  },
  twitter: {
    card: "summary_large_image",
    title: "شركة هوت لاين انترناشيونال للشحن والتفريغ والخدمات الملاحية | الشريك اللوجستي الموثوق",
    description: "شريكك اللوجستي لنقل البضائع عبر كافة المنافذ البحرية والبرية والجوية. خدمات استيراد وتصدير متكاملة بأعلى معايير الأمان والسرعة.",
  },
  other: {
    "theme-color": "#0a1628",
    "apple-mobile-web-app-title": "هوت لاين انترناشيونال",
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
