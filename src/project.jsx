// === Single project case study ===

function Project({ id, go }) {
  const p = window.PROJECTS.find(x => x.id === id) || window.PROJECTS[0];
  const next = window.PROJECTS[(window.PROJECTS.indexOf(p) + 1) % window.PROJECTS.length];

  return (
    <main className="page-fade">
      <div className="cs-hero">
        <img src={p.cover} alt={p.title} />
        <div className="overlay" />
        <div className="cs-cap">
          <h1>{p.title}</h1>
          <div className="meta">
            <div>{p.catEn}</div>
            <div>{p.location}</div>
            <div>{p.year}</div>
          </div>
        </div>
      </div>

      <section className="shell">
        <div className="cs-facts">
          <div><div className="l">Category</div><div className="v">{p.cat}</div></div>
          <div><div className="l">Location</div><div className="v">{p.location}</div></div>
          <div><div className="l">Area</div><div className="v">{p.area}</div></div>
          <div><div className="l">Scope</div><div className="v">{p.units}</div></div>
        </div>

        <div className="cs-narrative">
          <h2>عن المشروع</h2>
          <div>
            <p>{p.summary}</p>
            <p style={{ color: "var(--muted)", fontSize: 14, marginTop: 24 }}>
              <strong style={{ color: "var(--ink)", fontWeight: 500 }}>دور الاستوديو:</strong> {p.role}
            </p>
          </div>
        </div>

        <div className="cs-gallery">
          {p.images.map((g, i) => (
            <div key={i} className={"g span-" + g.span}>
              <img src={g.src} alt="" />
            </div>
          ))}
        </div>

        <div className="cs-narrative" style={{ borderTop: "1px solid var(--line)" }}>
          <h2>التفاصيل</h2>
          <div>
            <p>
              عملنا على تصميم هذا المشروع بتعاون قريب مع المالك على مدى ستة أشهر، من المخططات الأولية حتى تسليم ملف التصميم النهائي. اخترنا أن نعتمد على لوحة خامات مقتصدة — حجر طبيعي، خشب أبيض، ولمسات بنحاس مطفي — لتُعطي المساحة هوية موحدة دون أن تثقلها.
            </p>
            <p>
              من أبرز التحديات في هذا المشروع كان توحيد إيقاع الإضاءة عبر مساحات متفاوتة الأحجام، وحلّلنا ذلك بنظام إضاءة خطية مدمج في تفاصيل الأسقف والأرضيات، يعمل على ثلاث طبقات: عامة، وظيفية، وتمييزية.
            </p>
          </div>
        </div>

        {/* Next project */}
        <div style={{ borderTop: "1px solid var(--line)", padding: "48px 0", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
          <div>
            <Eyebrow>المشروع التالي</Eyebrow>
            <div className="h-2" style={{ marginTop: 8 }}>{next.title}</div>
          </div>
          <button className="btn btn-primary" onClick={() => go("project", next.id)}>
            اذهب إلى {next.title} <IconArrow size={14} />
          </button>
        </div>
      </section>
    </main>
  );
}

window.Project = Project;
