import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "رُواء — استوديو تصميم داخلي",
  description:
    "استوديو تصميم داخلي يبني مساحات تروى عنها قصة — للأفراد، وللشركات، وللمشاريع الكبرى. جدة والمدينة المنورة.",
  metadataBase: new URL("https://ruwaa.studio"),
  openGraph: {
    title: "رُواء — استوديو تصميم داخلي",
    description:
      "نصمّم مساحات داخلية للمطورين، الشركات، والأفراد في جدة والمدينة المنورة.",
    locale: "ar_SA",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests"
        />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;900&family=Reem+Kufi:wght@400;500;600;700&family=Amiri:wght@400;700&family=Noto+Naskh+Arabic:wght@400;500;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body data-theme="warm" data-arabic-font="tajawal">
        <div className="page">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
