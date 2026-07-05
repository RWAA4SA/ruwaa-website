import Image from "next/image";
import Link from "next/link";
import { Eyebrow, Italic } from "@/components/ui";
import { IconArrow } from "@/components/icons";
import { PROCESS_STEPS } from "@/lib/data";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "عن رُواء — استوديو تصميم داخلي",
  description:
    "رُواء استوديو تصميم داخلي في جدة والمدينة المنورة، يصمّم مساحات سكنية وتجارية للأفراد والمطورين والمقاولين بلغة هادئة وخامة صادقة وتنفيذ واقعي.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="page-fade">
      <section className="shell">
        <div className="about-hero">
          <div>
            <Eyebrow>عن رُواء</Eyebrow>
            <h1 className="h-1" style={{ marginTop: 16 }}>
              نصمّم المكان<br />
              <Italic>ليُروى</Italic>، لا ليُملأ.
            </h1>
            <p className="body-lg" style={{ marginTop: 28, maxWidth: "52ch" }}>
              رُواء استوديو تصميم داخلي سعودي مقرّه جدة والمدينة المنورة. نعمل مع الأفراد
              والمطورين والمقاولين لتحويل المساحات إلى تجارب مكانية متكاملة — من أول فكرة
              حتى آخر تفصيل تنفيذي.
            </p>
            <p className="body-lg" style={{ marginTop: 20, maxWidth: "52ch", color: "var(--muted)" }}>
              نؤمن أن التصميم الجيّد يبدأ من الإنصات، ويُقاس بما يبقى منه بعد سنوات — لا
              بما يلفت النظر في أول لحظة.
            </p>
          </div>
          <div className="pic">
            <Image
              src="/assets/portfolio/exterior-01.png"
              alt="فريق رُواء أثناء العمل على مخططات التصميم"
              fill
              className="fill-img"
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      <section className="shell sec-tight">
        <div className="about-values">
          <div>
            <div className="vt">الإنصات أولاً</div>
            <p className="vd">نبدأ بفهم حياتك أو مشروعك قبل أن نرسم خطاً واحداً. المكان الجيّد يبدأ من سؤال جيّد.</p>
          </div>
          <div>
            <div className="vt">خامة صادقة</div>
            <p className="vd">حجر طبيعي، خشب، ونحاس مطفي — مواد تكبر في العين مع الوقت بدل أن تبهت.</p>
          </div>
          <div>
            <div className="vt">تنفيذ واقعي</div>
            <p className="vd">نسلّم ملفاً يفهمه مقاولك من أول نظرة — أقل أخطاء، وتنفيذ أقرب للتصميم.</p>
          </div>
        </div>
      </section>

      <section className="shell sec-tight">
        <div className="section-head">
          <div>
            <Eyebrow>كيف نعمل</Eyebrow>
            <h2 className="h-1" style={{ marginTop: 16 }}>من الفكرة<br />إلى التسليم.</h2>
          </div>
          <p className="body-lg lead">
            منهجية واضحة، لكل مرحلة مخرجاتها المحددة قبل الانتقال للتالية — بلا مفاجآت في الجدول أو الفاتورة.
          </p>
        </div>
        <div className="steps">
          {PROCESS_STEPS.map((s) => (
            <div className="step" key={s.n}>
              <div className="num">{s.n}</div>
              <div className="title">{s.t}</div>
              <div className="desc">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="shell sec">
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <Eyebrow>لنبدأ</Eyebrow>
          <h2 className="h-1" style={{ margin: "20px 0 28px" }}>
            حدّثنا عن<br />
            <Italic>مساحتك.</Italic>
          </h2>
          <p className="body-lg" style={{ margin: "0 auto 36px", maxWidth: 520 }}>
            استشارة أولى تعرّفنا على مشروعك — في {SITE.cities} أو عبر الإنترنت.
          </p>
          <Link href="/brief" className="btn btn-primary">
            ابدأ مشروعاً <IconArrow size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}
