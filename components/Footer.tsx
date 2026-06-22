import Link from "next/link";
import { CONTACT } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="foot">
      <div className="row">
        <div>
          <div className="foot-mark">رُواء</div>
          <p className="foot-blurb">
            استوديو تصميم داخلي يبني مساحات تروى عنها قصة — للأفراد، وللشركات، وللمشاريع الكبرى.
          </p>
        </div>
        <div>
          <h4>الاستوديو</h4>
          <Link href="/">الرئيسية</Link>
          <Link href="/portfolio">الأعمال</Link>
          <Link href="/companies">للشركات</Link>
          <Link href="/individuals">للأفراد</Link>
        </div>
        <div>
          <h4>التواصل</h4>
          <Link href="/brief">ابدأ مشروعاً</Link>
          <a href={`tel:${CONTACT.phoneTel}`} dir="ltr" style={{ display: "block" }}>
            {CONTACT.phoneDisplay}
          </a>
          <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer">
            واتساب
          </a>
          <a href="/ruwaa-company-profile.pdf" target="_blank" rel="noopener noreferrer">
            ملف تعريفي (PDF)
          </a>
          <span style={{ display: "block", color: "rgba(255,255,255,0.78)", fontSize: 14, paddingBlock: 6 }}>
            {CONTACT.locations}
          </span>
        </div>
        <div>
          <h4>تابعنا</h4>
          <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
      <div className="end">
        <span>© 2026 RUWA&apos;A INTERIORS</span>
        <span>BUILT IN RIYADH · مصمم بحب</span>
      </div>
    </footer>
  );
}
