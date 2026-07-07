// مصدر واحد لبيانات الهوية والتواصل — تُستخدم عبر الموقع وفي بيانات SEO.

export const SITE = {
  name: "رُواء",
  nameLatin: "RUWA'A STUDIO",
  tagline: "استوديو تصميم داخلي",
  url: "https://ruwaa-website.vercel.app",
  cities: "جدة · المدينة المنورة",
  // التواصل الرسمي
  phone: "0535043173",
  phoneIntl: "+966535043173",
  whatsapp: "966535043173",
  // لا يوجد بريد رسمي بعد — يُترك null حتى يُعتمد بريد حقيقي.
  email: null as string | null,
  social: {
    instagram: "#",
    behance: "#",
    linkedin: "#",
    pinterest: "#",
  },
} as const;

export const whatsappLink = (text?: string) =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
