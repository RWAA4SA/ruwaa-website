// === Homepage ===

function Home({ go, audience }) {
  const featured = window.PROJECTS.slice(0, 4);
  return (
    <main className="page-fade">
      {/* Hero */}
      <section className="shell">
        <div className="hero-grid">
          <div className="hero-text">
            <Eyebrow>استوديو تصميم داخلي · منذ ٢٠١٦</Eyebrow>
            <h1 className="h-display">
              مساحات<br/>
              <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 400 }}>تروى عنها</span> قصة.
            </h1>
            <p className="body-lg lede">
              نصمّم مساحات داخلية للمطورين، الشركات، والأفراد في جدة والمدينة المنورة —
              تصميم هادئ، خامة صادقة، ومخططات جاهزة لمقاولك.
            </p>
            <div className="hero-meta">
              <button className="btn btn-primary" onClick={() => go("brief")}>
                ابدأ مشروعك <IconArrow size={14} />
              </button>
              <button className="btn btn-ghost" onClick={() => go("portfolio")}>
                شاهد الأعمال
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img src="assets/portfolio/05.png" alt="فيلا المرمر" />
            <div className="hero-tag">
              <span>VILLA · RIYADH</span>
              <span>2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics strip */}
      <section className="shell">
        <div className="hero-strip">
          <div><div className="num">١٢٠+</div><div className="lab">مشروع مصمّم</div></div>
          <div><div className="num">٤٨</div><div className="lab">عميل مؤسسي</div></div>
          <div><div className="num">١٤٠ ألف</div><div className="lab">م² مصممة</div></div>
          <div><div className="num">٩</div><div className="lab">سنوات خبرة</div></div>
        </div>
      </section>

      {/* Marquee of project types */}
      <Marquee items={[
        "RESIDENTIAL · سكني",
        "HOSPITALITY · ضيافة",
        "COMMERCIAL · تجاري",
        "DEVELOPMENT · تطوير",
        "BOUTIQUE · بوتيك",
        "MASTERPLAN · تخطيط",
      ]} />

      {/* Audience split */}
      <section className="sec shell">
        <div className="section-head">
          <div>
            <Eyebrow>للمن نعمل</Eyebrow>
            <h2 className="h-1" style={{ marginTop: 16 }}>طريقان مختلفان<br/>تحت سقف واحد.</h2>
          </div>
          <p className="body-lg lead">
            نخدم المطورين والشركات بمشاريع كبرى تتطلب جدولاً صارماً وإدارة موردين، ونخدم الأفراد بمساحاتهم الشخصية بنفس الانتباه للتفصيل.
          </p>
        </div>
        <div className="audience-grid">
          <div className="aud-card" onClick={() => go("companies")}>
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
          </div>
          <div className="aud-card" onClick={() => go("individuals")}>
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
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="shell sec">
        <div className="section-head">
          <div>
            <Eyebrow>مختارات من الأعمال</Eyebrow>
            <h2 className="h-1" style={{ marginTop: 16 }}>مشاريع<br/>قريبة منا.</h2>
          </div>
          <div style={{ display: "grid", gap: 16, justifyItems: "start" }}>
            <p className="body-lg lead">
              ست عشرة سنة من التصميم — ست خامات تتكرر، ست قصص. هذه أربع منها.
            </p>
            <button className="btn-arrow" onClick={() => go("portfolio")}>
              كل الأعمال <IconArrow size={14} />
            </button>
          </div>
        </div>

        <div className="show-grid">
          {featured.map((p, i) => {
            const span = [7, 5, 5, 7][i] || 6;
            return (
              <a key={p.id} className="tile" style={{ gridColumn: `span ${span}` }} onClick={() => go("project", p.id)}>
                <div className="tile-img"><img src={p.cover} alt={p.title} /></div>
                <div className="tile-meta">
                  <div>
                    <div className="t-cat">{p.catEn}</div>
                    <div className="t-title" style={{ marginTop: 4 }}>{p.title}</div>
                  </div>
                  <div className="t-yr">{p.year} · {p.location}</div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="shell sec-tight" id="process">
        <div className="section-head">
          <div>
            <Eyebrow>كيف نعمل</Eyebrow>
            <h2 className="h-1" style={{ marginTop: 16 }}>أربع مراحل<br/>لا اختصار فيها.</h2>
          </div>
          <p className="body-lg lead">
            نعمل بإيقاع بطيء عند الاستماع، ودقيق عند التصميم. كل مرحلة لها مخرجاتها الواضحة قبل الانتقال للتالية.
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
            <Eyebrow>كلمة عميل</Eyebrow>
            <div style={{ marginTop: 32, color: "var(--accent)" }}><IconQuote size={36} /></div>
            <div style={{ marginTop: 56 }}>
              <div className="name">المهندس عبد الله الراشد</div>
              <div className="role">مدير تطوير، شركة المركز للتطوير</div>
            </div>
          </div>
          <div className="pull-quote">
            «سلّمت رُواء أربعة أبراج سكنية بنفس الجودة التي تسلّم بها فيلا واحدة. هذا تحديداً ما يصعب إيجاده في السوق.»
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="shell sec-tight">
        <div className="section-head">
          <div>
            <Eyebrow>شركاء وعملاء</Eyebrow>
            <h2 className="h-2" style={{ marginTop: 16 }}>نعمل مع من يبني المدينة.</h2>
          </div>
        </div>
        <div className="logos">
          {["AL MARKAZ", "DAR AL ARKAN", "ROSHN", "ALMOND RESORT", "RED SEA CO.", "DIRIYAH GATE", "KHOZAM", "AMAALA", "NEOM", "RUA AL MADINAH", "SOLIDERE", "KAFD"].map(n => (
            <div className="logo-cell" key={n}>{n}</div>
          ))}
        </div>
      </section>

      {/* Closer CTA */}
      <section className="shell sec">
        <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
          <Eyebrow>هل لديك مشروع؟</Eyebrow>
          <h2 className="h-1" style={{ margin: "20px 0 28px" }}>
            نحب الحديث عن<br/>
            <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 400 }}>المشاريع المبكرة.</span>
          </h2>
          <p className="body-lg" style={{ margin: "0 auto 36px", maxWidth: 540 }}>
            احكِ لنا عن فكرتك في أربع دقائق — سنرسل لك تصوراً مبدئياً خلال ثلاثة أيام.
          </p>
          <button className="btn btn-primary" onClick={() => go("brief")}>
            احجز استشارة <IconArrow size={14} />
          </button>
        </div>
      </section>
    </main>
  );
}

window.Home = Home;
