// === Portfolio index ===

function Portfolio({ go }) {
  const [filter, setFilter] = React.useState("all");
  const cats = [
    { id: "all", label: "الكل" },
    { id: "Residential", label: "سكني" },
    { id: "Hospitality", label: "ضيافة" },
    { id: "Commercial", label: "تجاري" },
  ];
  const list = filter === "all" ? window.PROJECTS : window.PROJECTS.filter(p => p.catEn === filter);

  return (
    <main className="page-fade">
      <section className="shell sec-tight">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "end", marginBottom: 56 }}>
          <div>
            <Eyebrow>الأعمال · ٢٠١٦ — ٢٠٢٦</Eyebrow>
            <h1 className="h-1" style={{ marginTop: 16 }}>
              ست عشرة قصة<br/>
              <span style={{ fontFamily: "var(--serif)", fontStyle: "italic" }}>عن المساحة.</span>
            </h1>
          </div>
          <div className="choice-row" style={{ justifyContent: "flex-end" }}>
            {cats.map(c => (
              <button key={c.id} className={"choice " + (filter === c.id ? "on" : "")} onClick={() => setFilter(c.id)}>
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="show-grid">
          {list.map((p, i) => {
            const spans = [7, 5, 6, 6, 5, 7];
            const span = spans[i % spans.length];
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
    </main>
  );
}

window.Portfolio = Portfolio;
