// === Brief / contact form ===

function Brief({ go, audienceHint }) {
  const [step, setStep] = React.useState(0);
  const [form, setForm] = React.useState({
    type: audienceHint || "",
    project: [],
    area: "",
    timeline: "",
    name: "",
    org: "",
    email: "",
    phone: "",
    location: "",
    note: "",
  });
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    if (audienceHint) setForm(f => ({ ...f, type: audienceHint }));
  }, [audienceHint]);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const toggle = (k, v) => setForm(f => {
    const arr = f[k];
    return { ...f, [k]: arr.includes(v) ? arr.filter(x => x !== v) : [...arr, v] };
  });

  const projectsCompany = ["برج سكني", "فندق / منتجع", "مكاتب", "مجمع تجاري", "وحدات نموذجية", "إعادة تأهيل"];
  const projectsIndividual = ["شقة", "فيلا", "غرفة واحدة", "مجلس", "مطبخ", "تجديد كامل"];
  const projectsList = form.type === "company" ? projectsCompany : projectsIndividual;

  const timelines = ["خلال شهر", "١–٣ أشهر", "٣–٦ أشهر", "أكثر من ٦ أشهر", "مرن"];
  const areas = form.type === "company"
    ? ["تحت ١٠٠٠ م²", "١٠٠٠–٥٠٠٠ م²", "٥٠٠٠–٢٠٠٠٠ م²", "أكبر من ٢٠٠٠٠ م²"]
    : ["تحت ١٠٠ م²", "١٠٠–٢٥٠ م²", "٢٥٠–٥٠٠ م²", "أكبر من ٥٠٠ م²"];

  const stages = ["النوع", "المشروع", "أنت"];
  const progress = (step + 1) / stages.length;

  const canNext = () => {
    if (step === 0) return !!form.type;
    if (step === 1) return form.project.length > 0 && form.area && form.timeline;
    return form.name && form.email;
  };

  if (done) {
    return (
      <main className="page-fade shell sec">
        <div className="confirm">
          <div className="check"><IconCheck size={26} /></div>
          <h2 className="h-1" style={{ margin: 0 }}>وصلتنا رسالتك.</h2>
          <p className="body-lg" style={{ margin: 0, maxWidth: 480 }}>
            سنرد خلال يومي عمل على {form.email}. لو الموضوع عاجل، اتصل على +966 11 000 0000.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
            <button className="btn btn-primary" onClick={() => go("home")}>الرئيسية</button>
            <button className="btn btn-ghost" onClick={() => go("portfolio")}>تصفح الأعمال</button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="page-fade">
      <section className="shell">
        <div className="brief-grid">
          <div className="brief-side">
            <Eyebrow>ابدأ مشروعاً</Eyebrow>
            <h1 className="h-1" style={{ marginTop: 16 }}>
              أربع دقائق<br/>
              <span style={{ fontFamily: "var(--serif)", fontStyle: "italic" }}>تكفي.</span>
            </h1>
            <p className="body-lg" style={{ marginTop: 24 }}>
              املأ النموذج وسنرسل لك تصوراً مبدئياً وميزانية أولية خلال ثلاثة أيام عمل.
            </p>
            <div className="pic">
              <img src="assets/portfolio/03.png" alt="" />
            </div>
          </div>

          <div className="brief-form">
            <div className="brief-stage">
              <span>الخطوة {step + 1} من {stages.length}</span>
              <div className="bar"><span style={{ transform: `scaleX(${1 - progress})` }} /></div>
              <span>{stages[step]}</span>
            </div>

            {step === 0 && (
              <>
                <div className="field">
                  <label>أنت...</label>
                  <div className="choice-row">
                    <button className={"choice " + (form.type === "company" ? "on" : "")} onClick={() => set("type", "company")}>
                      شركة / مطوّر
                    </button>
                    <button className={"choice " + (form.type === "individual" ? "on" : "")} onClick={() => set("type", "individual")}>
                      فرد / عائلة
                    </button>
                  </div>
                  <span className="hint">سنخصص الأسئلة بناءً على اختيارك.</span>
                </div>

                {form.type && (
                  <div className="field">
                    <label>أين موقع المشروع؟</label>
                    <input value={form.location} onChange={e => set("location", e.target.value)} placeholder="جدة، حي الزهراء..." />
                  </div>
                )}
              </>
            )}

            {step === 1 && (
              <>
                <div className="field">
                  <label>نوع المشروع</label>
                  <div className="choice-row">
                    {projectsList.map(p => (
                      <button key={p} className={"choice " + (form.project.includes(p) ? "on" : "")} onClick={() => toggle("project", p)}>
                        {p}
                      </button>
                    ))}
                  </div>
                  <span className="hint">يمكن اختيار أكثر من نوع.</span>
                </div>

                <div className="field">
                  <label>المساحة التقريبية</label>
                  <div className="choice-row">
                    {areas.map(a => (
                      <button key={a} className={"choice " + (form.area === a ? "on" : "")} onClick={() => set("area", a)}>{a}</button>
                    ))}
                  </div>
                </div>

                <div className="field">
                  <label>الجدول الزمني المرغوب</label>
                  <div className="choice-row">
                    {timelines.map(t => (
                      <button key={t} className={"choice " + (form.timeline === t ? "on" : "")} onClick={() => set("timeline", t)}>{t}</button>
                    ))}
                  </div>
                </div>

                <div className="field">
                  <label>أي تفاصيل إضافية؟ <span style={{ color: "var(--muted)", fontWeight: 400 }}>(اختياري)</span></label>
                  <textarea value={form.note} onChange={e => set("note", e.target.value)} placeholder="حدثنا عن الميزانية، الذوق، الإلهام، أو أي شيء يساعدنا." />
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="field">
                  <label>الاسم الكامل</label>
                  <input value={form.name} onChange={e => set("name", e.target.value)} placeholder="عبد الله الراشد" />
                </div>
                {form.type === "company" && (
                  <div className="field">
                    <label>الجهة</label>
                    <input value={form.org} onChange={e => set("org", e.target.value)} placeholder="شركة..." />
                  </div>
                )}
                <div className="field">
                  <label>البريد الإلكتروني</label>
                  <input type="email" value={form.email} onChange={e => set("email", e.target.value)} placeholder="name@company.com" />
                </div>
                <div className="field">
                  <label>الجوال</label>
                  <input value={form.phone} onChange={e => set("phone", e.target.value)} placeholder="+966 5x xxx xxxx" />
                </div>
              </>
            )}

            <div className="brief-actions">
              <button className="btn-arrow" onClick={() => step === 0 ? go("home") : setStep(step - 1)}>
                <IconArrow size={14} /> {step === 0 ? "رجوع للرئيسية" : "السابق"}
              </button>
              {step < 2 ? (
                <button className="btn btn-primary" disabled={!canNext()} style={{ opacity: canNext() ? 1 : 0.4 }} onClick={() => canNext() && setStep(step + 1)}>
                  التالي <IconArrow size={14} />
                </button>
              ) : (
                <button className="btn btn-primary" disabled={!canNext()} style={{ opacity: canNext() ? 1 : 0.4 }} onClick={() => canNext() && setDone(true)}>
                  أرسل البريف <IconArrow size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

window.Brief = Brief;
