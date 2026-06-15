import Link from "next/link";

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
          <a href="mailto:hello@ruwaa.studio">hello@ruwaa.studio</a>
          <a href="tel:+966110000000">+966 11 000 0000</a>
          <span style={{ display: "block", color: "rgba(255,255,255,0.78)", fontSize: 14, paddingBlock: 6 }}>
            جدة · المدينة المنورة
          </span>
        </div>
        <div>
          <h4>تابعنا</h4>
          <a href="#">Instagram</a>
          <a href="#">Behance</a>
          <a href="#">LinkedIn</a>
          <a href="#">Pinterest</a>
        </div>
      </div>
      <div className="end">
        <span>© 2026 RUWA&apos;A INTERIORS</span>
        <span>BUILT IN RIYADH · مصمم بحب</span>
      </div>
    </footer>
  );
}
