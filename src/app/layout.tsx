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
  metadataBase: new URL("https://www.hotline-int.com"),
  title: {
    default: "هوت لاين إنترناشيونال | الشريك اللوجستي الموثوق",
    template: "%s | هوت لاين إنترناشيونال",
  },
  description: "شريكك اللوجستي لنقل البضائع عبر كافة المنافذ البحرية والبرية والجوية. خدمات استيراد وتصدير متكاملة بأعلى معايير الأمان والسرعة.",
  keywords: ["شحن", "لوجستيك", "استيراد", "تصدير", "شحن بحري", "شحن جوي", "شحن بري", "نقل بضائع", "اليمن", "صنعاء", "هوت لاين", "Hotline International", "logistics", "shipping", "Yemen"],
  authors: [{ name: "Hotline International", url: "https://www.hotline-int.com" }],
  creator: "Hotline International",
  publisher: "Hotline International",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    url: "https://www.hotline-int.com/",
    title: "هوت لاين إنترناشيونال | الشريك اللوجستي الموثوق",
    description: "شريكك اللوجستي لنقل البضائع عبر كافة المنافذ البحرية والبرية والجوية. خدمات استيراد وتصدير متكاملة بأعلى معايير الأمان والسرعة.",
    siteName: "Hotline International",
    locale: "ar_YE",
  },
  twitter: {
    card: "summary_large_image",
    title: "هوت لاين إنترناشيونال | الشريك اللوجستي الموثوق",
    description: "شريكك اللوجستي لنقل البضائع عبر كافة المنافذ البحرية والبرية والجوية. خدمات استيراد وتصدير متكاملة بأعلى معايير الأمان والسرعة.",
  },
  other: {
    "theme-color": "#0a1628",
    "apple-mobile-web-app-title": "هوت لاين",
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
