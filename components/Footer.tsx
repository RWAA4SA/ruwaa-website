import Link from "next/link";
import { SITE, whatsappLink } from "@/lib/site";

export function Footer() {
  const year = 2026;
  return (
    <footer className="foot">
      <div className="row">
        <div>
          <div className="foot-mark">رُواء</div>
          <p className="foot-blurb">
            استوديو تصميم داخلي يبني مساحات تُروى عنها قصة — للأفراد، وللشركات، وللمشاريع الكبرى.
          </p>
        </div>
        <div>
          <h4>الاستوديو</h4>
          <Link href="/">الرئيسية</Link>
          <Link href="/about">عن رُواء</Link>
          <Link href="/services">خدماتنا</Link>
          <Link href="/portfolio">الأعمال</Link>
        </div>
        <div>
          <h4>للعملاء</h4>
          <Link href="/companies">للشركات والمطورين</Link>
          <Link href="/individuals">للأفراد</Link>
          <Link href="/brief">ابدأ مشروعاً</Link>
        </div>
        <div>
          <h4>التواصل</h4>
          <a href={whatsappLink("السلام عليكم، أرغب في الاستفسار عن خدمات رُواء.")} target="_blank" rel="noopener noreferrer">
            واتساب · {SITE.phone}
          </a>
          <a href={`tel:${SITE.phoneIntl}`}>{SITE.phone}</a>
          {SITE.email ? (
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          ) : (
            <span style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: 13, paddingBlock: 6 }}>
              البريد الإلكتروني — قريباً
            </span>
          )}
          <span style={{ display: "block", color: "rgba(255,255,255,0.78)", fontSize: 14, paddingBlock: 6 }}>
            {SITE.cities}
          </span>
        </div>
      </div>
      <div className="end">
        <span>© {year} {SITE.nameLatin} — جميع الحقوق محفوظة</span>
        <span>{SITE.cities}</span>
      </div>
    </footer>
  );
}
