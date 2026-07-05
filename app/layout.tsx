import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "رُواء — استوديو تصميم داخلي | جدة والمدينة المنورة",
    template: "%s",
  },
  description:
    "استوديو تصميم داخلي يبني مساحات تُروى عنها قصة — للأفراد، وللشركات، وللمشاريع الكبرى في جدة والمدينة المنورة. تصميم فلل وشقق ومجالس وضيافة وتجاري، تخطيط، تصور ثلاثي الأبعاد، ومخططات تنفيذية.",
  keywords: [
    "تصميم داخلي",
    "تصميم داخلي جدة",
    "تصميم داخلي المدينة المنورة",
    "تصميم فلل",
    "تصميم مجالس",
    "تصميم ضيافة",
    "رُواء",
    "interior design Jeddah",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "رُواء — استوديو تصميم داخلي",
    description:
      "نصمّم مساحات داخلية للمطورين، الشركات، والأفراد في جدة والمدينة المنورة.",
    url: SITE.url,
    siteName: "رُواء",
    locale: "ar_SA",
    type: "website",
    images: [{ url: "/assets/portfolio/05.png", width: 1200, height: 675, alt: "من أعمال رُواء" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Fonts live in the root layout head, so they load globally (not per-page). The
            no-page-custom-font rule targets the pages/ router and is a false positive here. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;900&family=Reem+Kufi:wght@400;500;600;700&family=Amiri:wght@400;700&family=Noto+Naskh+Arabic:wght@400;500;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body data-theme="warm" data-arabic-font="tajawal">
        <a href="#main-content" className="skip-link">تخطّي إلى المحتوى</a>
        <div className="page">
          <Nav />
          <div id="main-content">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
