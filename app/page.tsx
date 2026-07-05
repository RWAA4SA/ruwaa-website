import Image from "next/image";
import Link from "next/link";
import { Eyebrow, Italic, Marquee } from "@/components/ui";
import { IconArrow, IconQuote } from "@/components/icons";
import { PROCESS_STEPS, PROJECTS, SERVICES } from "@/lib/data";

const TILE_SPANS = [7, 5, 5, 7];

const DISCIPLINES = [
  "التصميم الداخلي",
  "التخطيط المعماري",
  "التصور ثلاثي الأبعاد",
  "الإشراف التنفيذي",
];

export default function HomePage() {
  const featured = PROJECTS.slice(0, 4);

  return (
    <main className="page-fade">
      {/* Hero */}
      <section className="shell">
        <div className="hero-grid">
          <div className="hero-text">
            <Eyebrow>استوديو تصميم داخلي · جدة والمدينة المنورة</Eyebrow>
            <h1 className="h-display">
              مساحات<br />
              <Italic>تُروى عنها</Italic> قصة.
            </h1>
            <p className="body-lg lede">
              نصمّم مساحات داخلية للمطورين، الشركات، والأفراد في جدة والمدينة المنورة —
              تصميم هادئ، خامة صادقة، ومخططات جاهزة لمقاولك.
            </p>
            <div className="hero-meta">
              <Link href="/brief" className="btn btn-primary">
                ابدأ مشروعك <IconArrow size={14} />
              </Link>
              <Link href="/portfolio" className="btn btn-ghost">
                شاهد الأعمال
              </Link>
            </div>
          </div>
          <Link href="/portfolio/villa-marble" className="hero-image" aria-label="فيلا المرمر — جدة">
            <Image
              src="/assets/portfolio/05.png"
              alt="تصميم داخلي لصالة فيلا المرمر في جدة"
              fill
              priority
              className="fill-img"
              sizes="(max-width: 900px) 100vw, 48vw"
            />
            <div className="hero-tag">
              <span>MARBLE VILLA · JEDDAH</span>
              <span>2025</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Disciplines strip */}
      <section className="shell">
        <div className="hero-strip">
          {DISCIPLINES.map((d) => (
            <div key={d}><div className="num" style={{ fontSize: 20 }}>{d}</div></div>
          ))}
        </div>
      </section>

      {/* Marquee */}
      <Marquee
        items={[
          "RESIDENTIAL · سكني",
          "HOSPITALITY · ضيافة",
          "COMMERCIAL · تجاري",
          "DEVELOPMENT · تطوير",
          "BOUTIQUE · بوتيك",
          "MASTERPLAN · تخطيط",
        ]}
      />

      {/* Audience split */}
      <section className="sec shell">
        <div className="section-head">
          <div>
            <Eyebrow>لمن نعمل</Eyebrow>
            <h2 className="h-1" style={{ marginTop: 16 }}>
              طريقان مختلفان<br />تحت سقف واحد.
            </h2>
          </div>
          <p className="body-lg lead">
            نخدم المطورين والشركات بمشاريع كبرى تتطلب جدولاً صارماً وإدارة موردين، ونخدم الأفراد بمساحاتهم الشخصية بنفس الانتباه للتفصيل.
          </p>
        </div>
        <div className="audience-grid">
          <Link href="/companies" className="aud-card">
            <span className="aud-num">٠١ · FOR ENTERPRISE</span>
            <div>
              <div className="aud-title" style={{ marginBottom: 18 }}>للشركات والمطورين</div>
              <p className="aud-body">
                أبراج، مجمعات سكنية، فنادق، مكاتب. نعمل بفلسفة الشراكة طويلة الأمد ونتعامل مع الجداول والميزانيات الكبرى باحترافية.
              </p>
            </div>
            <ul className="aud-list">
              <li>تخطيط مساحات متعددة الوحدات</li>
              <li>تصميم وحدات نموذجية قابلة للتكرار</li>
              <li>حزم تصميم تنفيذية متكاملة</li>
              <li>قوائم موردين محلية موصى بها</li>
            </ul>
            <span className="btn-arrow" style={{ width: "max-content" }}>
              تجربة الشركات <IconArrow size={14} />
            </span>
          </Link>
          <Link href="/individuals" className="aud-card">
            <span className="aud-num">٠٢ · FOR YOU</span>
            <div>
              <div className="aud-title" style={{ marginBottom: 18 }}>للأفراد وبيوتهم</div>
              <p className="aud-body">
                شقق، فلل، غرف. نصمّم لأسلوب حياتك بدقّة، بميزانيات شفافة وباقات مرنة تبدأ من غرفة واحدة.
              </p>
            </div>
            <ul className="aud-list">
              <li>باقات تبدأ من ٤٫٥٠٠ ر.س</li>
              <li>زيارات موقع ولوحات خامات</li>
              <li>تصور ثلاثي الأبعاد لكل مساحة</li>
              <li>تسليم ملف تصميم خلال ٤–١٢ أسبوعاً</li>
            </ul>
            <span className="btn-arrow" style={{ width: "max-content" }}>
              تجربة الأفراد <IconArrow size={14} />
            </span>
          </Link>
        </div>
      </section>

      {/* Featured projects */}
      <section className="shell sec">
        <div className="section-head">
          <div>
            <Eyebrow>مختارات من الأعمال</Eyebrow>
            <h2 className="h-1" style={{ marginTop: 16 }}>
              مشاريع<br />قريبة منا.
            </h2>
          </div>
          <div style={{ display: "grid", gap: 16, justifyItems: "start" }}>
            <p className="body-lg lead">
              مساحات سكنية وضيافة وتجارية، تجمعها لغة واحدة: الهدوء، والخامة، والتفصيل.
            </p>
            <Link href="/portfolio" className="btn-arrow">
              كل الأعمال <IconArrow size={14} />
            </Link>
          </div>
        </div>

        <div className="show-grid">
          {featured.map((p, i) => (
            <Link
              key={p.id}
              href={`/portfolio/${p.id}`}
              className="tile"
              style={{ gridColumn: `span ${TILE_SPANS[i] || 6}` }}
            >
              <div className="tile-img">
                <Image
                  src={p.cover}
                  alt={`${p.title} — ${p.catEn}`}
                  fill
                  className="fill-img"
                  sizes="(max-width: 800px) 100vw, 50vw"
                />
              </div>
              <div className="tile-meta">
                <div>
                  <div className="t-cat">{p.catEn}</div>
                  <div className="t-title" style={{ marginTop: 4 }}>{p.title}</div>
                </div>
                <div className="t-yr">{p.year} · {p.location}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Services teaser */}
      <section className="shell sec-tight">
        <div className="section-head">
          <div>
            <Eyebrow>خدماتنا</Eyebrow>
            <h2 className="h-1" style={{ marginTop: 16 }}>خدمة كاملة<br />من الفكرة للتسليم.</h2>
          </div>
          <div style={{ display: "grid", gap: 16, justifyItems: "start" }}>
            <p className="body-lg lead">
              تصميم داخلي، تخطيط معماري، تصور ثلاثي الأبعاد، ومخططات تنفيذية — كل ما يحتاجه مشروعك في فريق واحد.
            </p>
            <Link href="/services" className="btn-arrow">
              كل الخدمات <IconArrow size={14} />
            </Link>
          </div>
        </div>
        <div className="svc-list-grid">
          {SERVICES.flatMap((g) => g.items).slice(0, 9).map((it) => (
            <div className="svc-item" key={it.en}>
              <div className="t">{it.t}</div>
              <div className="en">{it.en}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="shell sec-tight" id="process">
        <div className="section-head">
          <div>
            <Eyebrow>كيف نعمل</Eyebrow>
            <h2 className="h-1" style={{ marginTop: 16 }}>
              أربع مراحل<br />لا اختصار فيها.
            </h2>
          </div>
          <p className="body-lg lead">
            نعمل بإيقاع بطيء عند الاستماع، ودقيق عند التصميم. كل مرحلة لها مخرجاتها الواضحة قبل الانتقال للتالية.
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

      {/* Brand statement */}
      <section className="shell">
        <div className="pull">
          <div className="pull-side">
            <Eyebrow>فلسفتنا</Eyebrow>
            <div style={{ marginTop: 32, color: "var(--accent)" }}><IconQuote size={36} /></div>
            <div style={{ marginTop: 56 }}>
              <div className="name">رُواء</div>
              <div className="role">استوديو تصميم داخلي</div>
            </div>
          </div>
          <div className="pull-quote">
            «نصمّم المكان ليُروى، لا ليُملأ. الفخامة الحقيقية هدوء، وتفصيل، وخامة تصدق مع الزمن.»
          </div>
        </div>
      </section>

      {/* Closer CTA */}
      <section className="shell sec">
        <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
          <Eyebrow>هل لديك مشروع؟</Eyebrow>
          <h2 className="h-1" style={{ margin: "20px 0 28px" }}>
            نحب الحديث عن<br />
            <Italic>المشاريع المبكرة.</Italic>
          </h2>
          <p className="body-lg" style={{ margin: "0 auto 36px", maxWidth: 540 }}>
            احكِ لنا عن فكرتك في أربع دقائق — سنرسل لك تصوراً مبدئياً خلال ثلاثة أيام.
          </p>
          <Link href="/brief" className="btn btn-primary">
            احجز استشارة <IconArrow size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}
