// === Individuals service page ===

function Individuals({ go }) {
  return (
    <main className="page-fade">
      <section className="shell">
        <div className="sv-hero">
          <div>
            <Eyebrow>للأفراد وبيوتهم</Eyebrow>
            <h1 className="h-1" style={{ marginTop: 16 }}>
              بيت يشبهك،<br/>
              <span style={{ fontFamily: "var(--serif)", fontStyle: "italic" }}>لا غيرك.</span>
            </h1>
            <p className="body-lg" style={{ marginTop: 28 }}>
              لشقق، فلل، غرف بعينها، أو تجديد كامل — باقات تصميم مرنة بأسعار شفافة، وزيارة موقع أولى في جدة والمدينة المنورةة.
            </p>
            <div className="hero-meta">
              <button className="btn btn-primary" onClick={() => go("brief", null, "individual")}>
                ابدأ مشروعك <IconArrow size={14} />
              </button>
              <button className="btn btn-ghost" onClick={() => go("portfolio")}>
                أمثلة سكنية
              </button>
            </div>
          </div>
          <div className="pic">
            <img src="assets/portfolio/02.png" alt="مساحة سكنية" />
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="shell sec-tight">
        <div className="section-head">
          <div>
            <Eyebrow>الباقات</Eyebrow>
            <h2 className="h-1" style={{ marginTop: 16 }}>ابدأ من غرفة،<br/>أو من بيت كامل.</h2>
          </div>
          <p className="body-lg lead">
            ثلاث باقات تغطي ٩٥٪ من المشاريع السكنية. لو احتجت ترتيباً مخصصاً — احكِ لنا.
          </p>
        </div>
        <div className="pkg-grid">
          {window.INDIVIDUAL_PACKAGES.map((pk, i) => (
            <div key={i} className={"pkg" + (pk.featured ? " featured" : "")}>
              {pk.badge && <div className="badge">{pk.badge}</div>}
              <div className="pkg-title">{pk.title}</div>
              <div className="pkg-price">{pk.price} <small>{pk.unit}</small></div>
              <div className="pkg-desc">{pk.desc}</div>
              <ul className="pkg-list">
                {pk.list.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
              <div className="pkg-cta">
                <button
                  className={"btn " + (pk.featured ? "btn-light" : "btn-ghost")}
                  onClick={() => go("brief", null, "individual")}
                >
                  ابدأ بهذه الباقة <IconArrow size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visual showcase */}
      <section className="shell sec-tight">
        <div className="show-grid">
          <div style={{ gridColumn: "span 6" }}>
            <div className="tile-img" style={{ aspectRatio: "4/5" }}>
              <img src="assets/portfolio/05.png" alt="" />
            </div>
          </div>
          <div style={{ gridColumn: "span 6" }}>
            <div className="tile-img" style={{ aspectRatio: "4/5" }}>
              <img src="assets/portfolio/02.png" alt="" />
            </div>
          </div>
          <div style={{ gridColumn: "span 12" }}>
            <div className="tile-img" style={{ aspectRatio: "21/9" }}>
              <img src="assets/portfolio/06.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="shell sec-tight">
        <div className="section-head">
          <div>
            <Eyebrow>كيف نعمل معك</Eyebrow>
            <h2 className="h-1" style={{ marginTop: 16 }}>من المكالمة الأولى<br/>حتى مفتاح الباب.</h2>
          </div>
          <p className="body-lg lead">
            متابعة شخصية على واتساب أثناء التصميم، ثم تسليم ملف تصميم نهائي جاهز لمقاولك مع دعم استشاري بعد التسليم.
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
            <Eyebrow>تجربة شخصية</Eyebrow>
            <div style={{ marginTop: 32, color: "var(--accent)" }}><IconQuote size={36} /></div>
            <div style={{ marginTop: 56 }}>
              <div className="name">د. سارة العتيبي</div>
              <div className="role">عميلة — فيلا في حي الياسمين</div>
            </div>
          </div>
          <div className="pull-quote">
            «شعرت طوال المشروع أنّي أشتغل مع صديقة لها ذوقي، لا مع استوديو يحاول إقناعي بذوقه.»
          </div>
        </div>
      </section>

      <section className="shell sec">
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <h2 className="h-1" style={{ margin: "0 0 28px" }}>
            استشارة أولى<br/>
            <span style={{ fontFamily: "var(--serif)", fontStyle: "italic" }}>مجانية.</span>
          </h2>
          <p className="body-lg" style={{ margin: "0 auto 36px", maxWidth: 540 }}>
            ثلاثون دقيقة عبر زووم أو زيارة موقع داخل جدة والمدينة المنورة. بدون التزام.
          </p>
          <button className="btn btn-primary" onClick={() => go("brief", null, "individual")}>
            احجز موعداً <IconArrow size={14} />
          </button>
        </div>
      </section>
    </main>
  );
}

window.Individuals = Individuals;
