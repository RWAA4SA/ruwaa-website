// === Reusable UI bits ===

const { useEffect, useRef, useState } = React;

function Wordmark({ light }) {
  return (
    <span className="wordmark" style={light ? { color: "var(--white)" } : {}}>
      <span>رُواء</span>
      <span className="latin" style={light ? { color: "rgba(255,255,255,0.5)" } : {}}>RUWA'A · STUDIO</span>
    </span>
  );
}

function Eyebrow({ children, latin }) {
  return <span className={latin ? "eyebrow" : "eyebrow-ar"}>{children}</span>;
}

// Lift on scroll
function Lift({ children, delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => el.classList.add("in"), delay);
        io.disconnect();
      }
    }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return <div ref={ref} className="lift">{children}</div>;
}

// Marquee strip
function Marquee({ items }) {
  const content = (
    <div className="marquee-track">
      {items.concat(items).map((it, i) => (
        <span className="marquee-item" key={i}>{it}</span>
      ))}
    </div>
  );
  return <div className="marquee">{content}</div>;
}

// Footer
function Footer({ go }) {
  return (
    <footer className="foot">
      <div className="row">
        <div>
          <div className="foot-mark">رُواء</div>
          <p className="foot-blurb">
            استوديو تصميم داخلي يبني مساحات تروى عنها قصة — للأفراد، وللشركات، وللمشاريع الكبرى.
          </p>
        </div>
        <div>
          <h4>الاستوديو</h4>
          <a onClick={() => go("home")}>الرئيسية</a>
          <a onClick={() => go("portfolio")}>الأعمال</a>
          <a onClick={() => go("companies")}>للشركات</a>
          <a onClick={() => go("individuals")}>للأفراد</a>
        </div>
        <div>
          <h4>التواصل</h4>
          <a onClick={() => go("brief")}>ابدأ مشروعاً</a>
          <a>hello@ruwaa.studio</a>
          <a>+966 11 000 0000</a>
          <a>جدة · المدينة المنورة</a>
        </div>
        <div>
          <h4>تابعنا</h4>
          <a>Instagram</a>
          <a>Behance</a>
          <a>LinkedIn</a>
          <a>Pinterest</a>
        </div>
      </div>
      <div className="end">
        <span>© 2026 RUWA'A INTERIORS</span>
        <span>BUILT IN RIYADH · مصمم بحب</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Wordmark, Eyebrow, Lift, Marquee, Footer });
