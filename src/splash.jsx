// === Splash audience selector ===

function Splash({ onChoose }) {
  return (
    <div className="splash page-fade">
      <div className="splash-top">
        <Wordmark light />
        <div style={{ fontFamily: "var(--latin)", fontSize: 11, letterSpacing: "0.24em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>
          MMXXVI · EST.
        </div>
      </div>

      <div className="splash-stage">
        <div className="splash-side" onClick={() => onChoose("companies")}>
          <div className="bg" style={{ backgroundImage: "url(assets/portfolio/shot-04.png)" }} />
          <div className="scrim" />
          <div className="content">
            <span className="label-num">٠١ — FOR ENTERPRISE</span>
            <h2>للشركات<br/>والمطورين</h2>
            <p>
              مشاريع كبيرة الحجم، أبراج، فنادق، ومجمعات. شراكة طويلة في التصميم من المخطط الأول حتى ملف التسليم النهائي.
            </p>
            <span className="arrow">
              ابدأ تجربة الشركات <IconArrow />
            </span>
          </div>
        </div>

        <div className="divider" />

        <div className="splash-side" onClick={() => onChoose("individuals")}>
          <div className="bg" style={{ backgroundImage: "url(assets/portfolio/05.png)" }} />
          <div className="scrim" />
          <div className="content">
            <span className="label-num">٠٢ — FOR YOU</span>
            <h2>للأفراد<br/>وبيوتهم</h2>
            <p>
              شقق، فلل، غرف، ومساحات شخصية. تصميم مفصّل لذوقك ولحياتك اليومية، بميزانيات مرنة.
            </p>
            <span className="arrow">
              ابدأ تجربة الأفراد <IconArrow />
            </span>
          </div>
        </div>

        <div className="center-mark">من أنت اليوم؟</div>
      </div>

      <div className="splash-bottom">
        <span>RUWA'A · INTERIOR DESIGN</span>
        <span className="splash-skip" onClick={() => onChoose("home")}>تخطي → الرئيسية</span>
        <span>RIYADH · JEDDAH</span>
      </div>
    </div>
  );
}

window.Splash = Splash;
