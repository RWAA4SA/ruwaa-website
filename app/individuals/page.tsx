import Image from "next/image";
import Link from "next/link";
import { Eyebrow, Italic } from "@/components/ui";
import { IconArrow, IconQuote } from "@/components/icons";
import { INDIVIDUAL_PACKAGES, PROCESS_STEPS } from "@/lib/data";

export const metadata = {
  title: "للأفراد وبيوتهم — رُواء",
  description:
    "باقات تصميم داخلي مرنة لشقق، فلل، وغرف. تبدأ من ٤٫٥٠٠ ر.س مع زيارة موقع ولوحات خامات.",
};

export default function IndividualsPage() {
  return (
    <main className="page-fade">
      <section className="shell">
        <div className="sv-hero">
          <div>
            <Eyebrow>للأفراد وبيوتهم</Eyebrow>
            <h1 className="h-1" style={{ marginTop: 16 }}>
              بيت يشبهك،<br />
              <Italic>لا غيرك.</Italic>
            </h1>
            <p className="body-lg" style={{ marginTop: 28 }}>
              لشقق، فلل، غرف بعينها، أو تجديد كامل — باقات تصميم مرنة بأسعار شفافة، وزيارة موقع أولى في جدة والمدينة المنورة.
            </p>
            <div className="hero-meta">
              <Link href="/brief?type=individual" className="btn btn-primary">
                ابدأ مشروعك <IconArrow size={14} />
              </Link>
              <Link href="/portfolio" className="btn btn-ghost">
                أمثلة سكنية
              </Link>
            </div>
          </div>
          <div className="pic">
            <Image
              src="/assets/portfolio/02.png"
              alt="تصميم داخلي لمساحة سكنية"
              fill
              priority
              className="fill-img"
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </div>
        </div>
      </section>

      <section className="shell sec-tight">
        <div className="section-head">
          <div>
            <Eyebrow>الباقات</Eyebrow>
            <h2 className="h-1" style={{ marginTop: 16 }}>
              ابدأ من غرفة،<br />أو من بيت كامل.
            </h2>
          </div>
          <p className="body-lg lead">
            ثلاث باقات تغطي ٩٥٪ من المشاريع السكنية. لو احتجت ترتيباً مخصصاً — احكِ لنا.
          </p>
        </div>
        <div className="pkg-grid">
          {INDIVIDUAL_PACKAGES.map((pk, i) => (
            <div key={i} className={"pkg" + (pk.featured ? " featured" : "")}>
              {pk.badge && <div className="badge">{pk.badge}</div>}
              <div className="pkg-title">{pk.title}</div>
              <div className="pkg-price">
                {pk.price} <small>{pk.unit}</small>
              </div>
              <div className="pkg-desc">{pk.desc}</div>
              <ul className="pkg-list">
                {pk.list.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
              <div className="pkg-cta">
                <Link
                  href="/brief?type=individual"
                  className={"btn " + (pk.featured ? "btn-light" : "btn-ghost")}
                >
                  ابدأ بهذه الباقة <IconArrow size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="shell sec-tight">
        <div className="show-grid">
          <div style={{ gridColumn: "span 6" }}>
            <div className="tile-img" style={{ aspectRatio: "4/5" }}>
              <Image src="/assets/portfolio/05.png" alt="تصميم صالة سكنية" fill className="fill-img" sizes="(max-width: 800px) 100vw, 50vw" />
            </div>
          </div>
          <div style={{ gridColumn: "span 6" }}>
            <div className="tile-img" style={{ aspectRatio: "4/5" }}>
              <Image src="/assets/portfolio/02.png" alt="تصميم غرفة معيشة" fill className="fill-img" sizes="(max-width: 800px) 100vw, 50vw" />
            </div>
          </div>
          <div style={{ gridColumn: "span 12" }}>
            <div className="tile-img" style={{ aspectRatio: "21/9" }}>
              <Image src="/assets/portfolio/06.png" alt="تفاصيل تصميم داخلي" fill className="fill-img" sizes="100vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="shell sec-tight">
        <div className="section-head">
          <div>
            <Eyebrow>كيف نعمل معك</Eyebrow>
            <h2 className="h-1" style={{ marginTop: 16 }}>
              من المكالمة الأولى<br />حتى مفتاح الباب.
            </h2>
          </div>
          <p className="body-lg lead">
            متابعة شخصية على واتساب أثناء التصميم، ثم تسليم ملف تصميم نهائي جاهز لمقاولك مع دعم استشاري بعد التسليم.
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

      <section className="shell">
        <div className="pull">
          <div className="pull-side">
            <Eyebrow>وعدنا لك</Eyebrow>
            <div style={{ marginTop: 32, color: "var(--accent)" }}><IconQuote size={36} /></div>
            <div style={{ marginTop: 56 }}>
              <div className="name">منهجية رُواء</div>
              <div className="role">في العمل مع الأفراد</div>
            </div>
          </div>
          <div className="pull-quote">
            «نصمّم بيتاً يشبهك أنت، لا يشبه ذوقنا. نُنصت أولاً، ثم نترجم أسلوب حياتك إلى مساحة تشعر فيها أنك في مكانك.»
          </div>
        </div>
      </section>

      <section className="shell sec">
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <h2 className="h-1" style={{ margin: "0 0 28px" }}>
            استشارة أولى<br />
            <Italic>مجانية.</Italic>
          </h2>
          <p className="body-lg" style={{ margin: "0 auto 36px", maxWidth: 540 }}>
            ثلاثون دقيقة عبر زووم أو زيارة موقع داخل جدة والمدينة المنورة. بدون التزام.
          </p>
          <Link href="/brief?type=individual" className="btn btn-primary">
            احجز موعداً <IconArrow size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}
