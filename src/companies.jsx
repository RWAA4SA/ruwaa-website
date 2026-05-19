// === Companies service page ===

function Companies({ go }) {
  return (
    <main className="page-fade">
      <section className="shell">
        <div className="sv-hero">
          <div>
            <Eyebrow>للشركات والمطورين</Eyebrow>
            <h1 className="h-1" style={{ marginTop: 16 }}>
              مشاريعك الكبرى<br/>
              <span style={{ fontFamily: "var(--serif)", fontStyle: "italic" }}>تستحق شريكاً يعرف الجداول.</span>
            </h1>
            <p className="body-lg" style={{ marginTop: 28, maxWidth: 56 + "ch" }}>
              نشتغل مع المطورين والمقاولين والشركات في تصميم مشاريع متعددة الوحدات — من المخطط الرئيسي حتى تسليم آخر شقة. حوكمة، شفافية، وتسليم في الموعد.
            </p>
            <div className="hero-meta">
              <button className="btn btn-primary" onClick={() => go("brief", null, "company")}>
                احكِ لنا عن المشروع <IconArrow size={14} />
              </button>
              <button className="btn btn-ghost" onClick={() => go("portfolio")}>
                مشاريع شركات منفذة
              </button>
            </div>
          </div>
          <div className="pic">
            <img src="assets/portfolio/shot-04.png" alt="مشروع تجاري" />
          </div>
        </div>
      </section>

      {/* Capabilities table */}
      <section className="shell sec-tight">
        <div className="section-head">
          <div>
            <Eyebrow>القدرات التشغيلية</Eyebrow>
            <h2 className="h-1" style={{ marginTop: 16 }}>كل ما يحتاجه المشروع<br/>في فريق واحد.</h2>
          </div>
          <p className="body-lg lead">
            من الخرائط الأولية حتى التسليم، نتولى ما يخصّ التصميم الداخلي ونعمل بانسيابية مع الاستشاري، المقاول، والمطور.
          </p>
        </div>

        <div className="cap-table">
          {window.COMPANY_CAPABILITIES.map(c => (
            <div className="cap-row" key={c.n}>
              <div className="n">{c.n}</div>
              <div className="t">{c.t}</div>
              <div className="d">{c.d}</div>
              <div className="meta">{c.meta}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Service grid */}
      <section className="shell sec-tight">
        <div className="section-head">
          <div>
            <Eyebrow>قطاعات نخدمها</Eyebrow>
            <h2 className="h-2" style={{ marginTop: 16 }}>ست قطاعات رئيسية</h2>
          </div>
        </div>
        <div className="svc-grid">
          {window.COMPANY_SERVICES.map(s => (
            <div className="svc-cell" key={s.n}>
              <div className="n">{s.n}</div>
              <div className="t">{s.t}</div>
              <div className="d">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Showcase pair */}
      <section className="shell sec-tight">
        <div className="show-grid">
          <div style={{ gridColumn: "span 7" }}>
            <div className="tile-img" style={{ aspectRatio: "16/10" }}>
              <img src="assets/portfolio/01.png" alt="" />
            </div>
            <div className="tile-meta">
              <div>
                <div className="t-cat">RESIDENTIAL TOWER</div>
                <div className="t-title" style={{ marginTop: 4 }}>برج سكني — لوبي وممرات</div>
              </div>
              <div className="t-yr">2024 · جدة</div>
            </div>
          </div>
          <div style={{ gridColumn: "span 5" }}>
            <div className="tile-img" style={{ aspectRatio: "4/5" }}>
              <img src="assets/portfolio/07.png" alt="" />
            </div>
            <div className="tile-meta">
              <div>
                <div className="t-cat">HOSPITALITY</div>
                <div className="t-title" style={{ marginTop: 4 }}>منتجع اللوز</div>
              </div>
              <div className="t-yr">2024</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process for companies */}
      <section className="shell sec-tight">
        <div className="section-head">
          <div>
            <Eyebrow>كيف نعمل مع الشركات</Eyebrow>
            <h2 className="h-1" style={{ marginTop: 16 }}>أربع مراحل بحوكمة كاملة.</h2>
          </div>
          <p className="body-lg lead">
            تقارير شهرية، اجتماعات أسبوعية، ولجنة توجيه مشتركة. لا مفاجآت في الفاتورة ولا في الجدول.
          </p>
        </div>
        <div className="steps">
          {window.PROCESS_STEPS.map(s => (
            <div className="step" key={s.n}>
              <div className="num">{s.n}</div>
              <div className="title">{s.t}</div>
              <div className="desc">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="shell">
        <div className="pull">
          <div className="pull-side">
            <Eyebrow>شريك تطوير</Eyebrow>
            <div style={{ marginTop: 32, color: "var(--accent)" }}><IconQuote size={36} /></div>
            <div style={{ marginTop: 56 }}>
              <div className="name">المهندسة لينا الحربي</div>
              <div className="role">مدير مشاريع، شركة تطوير عقاري</div>
            </div>
          </div>
          <div className="pull-quote">
            «فريق رُواء سلّموا ملف التصميم في الموعد وبدقة عالية، وتوفروا مع مقاولنا لحل تفاصيل التنفيذ أولاً بأول. هذا الانضباط نادر في السوق.»
          </div>
        </div>
      </section>

      <section className="shell sec">
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <h2 className="h-1" style={{ margin: "0 0 28px" }}>
            هل لديك مشروع<br/>
            <span style={{ fontFamily: "var(--serif)", fontStyle: "italic" }}>بحجم كبير؟</span>
          </h2>
          <p className="body-lg" style={{ margin: "0 auto 36px", maxWidth: 540 }}>
            ابعث لنا الإحداثيات، عدد الوحدات، والمرحلة الحالية — نرتّب اجتماعاً تعريفياً خلال أسبوع.
          </p>
          <button className="btn btn-primary" onClick={() => go("brief", null, "company")}>
            اطلب اجتماعاً <IconArrow size={14} />
          </button>
        </div>
      </section>
    </main>
  );
}

window.Companies = Companies;
