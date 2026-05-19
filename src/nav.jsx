// === Top navigation ===

function Nav({ current, go, audience }) {
  const links = [
    { id: "home", label: "الرئيسية" },
    { id: "portfolio", label: "الأعمال" },
    { id: "companies", label: "للشركات" },
    { id: "individuals", label: "للأفراد" },
    { id: "process", label: "كيف نعمل" },
  ];
  return (
    <nav className="nav">
      <div className="shell nav-inner">
        <a onClick={() => go("home")} style={{ cursor: "pointer" }}>
          <Wordmark />
        </a>
        <div className="nav-links">
          {links.map(l => (
            <a key={l.id} className={"nav-link " + (current === l.id ? "active" : "")} onClick={() => go(l.id)}>{l.label}</a>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {audience && (
            <span className="nav-pill">
              <span className="dot">{audience === "companies" ? "C" : "I"}</span>
              {audience === "companies" ? "شركة" : "فرد"}
            </span>
          )}
          <button className="btn btn-primary" onClick={() => go("brief")}>
            ابدأ مشروعاً <IconArrow size={14} />
          </button>
        </div>
      </div>
    </nav>
  );
}

window.Nav = Nav;
