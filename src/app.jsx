// === Root app: routing + tweaks ===

const { useState, useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "warm",
  "arabicFont": "tajawal",
  "showSplash": true
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [route, setRoute] = useState({ page: tweaks.showSplash ? "splash" : "home", projectId: null });
  const [audience, setAudience] = useState(null);
  const [audienceHint, setAudienceHint] = useState(null);

  // apply theme + font tweaks to body
  useEffect(() => {
    document.body.dataset.theme = tweaks.theme || "warm";
    document.body.dataset.arabicFont = tweaks.arabicFont || "tajawal";
  }, [tweaks.theme, tweaks.arabicFont]);

  const go = (page, projectId, hint) => {
    if (page === "companies" || page === "individuals") {
      setAudience(page);
      setAudienceHint(page === "companies" ? "company" : "individual");
    }
    if (hint) setAudienceHint(hint);
    setRoute({ page, projectId: projectId || null });
    if (page !== "splash") window.scrollTo(0, 0);
  };

  if (route.page === "splash") {
    return (
      <>
        <Splash onChoose={(choice) => {
          if (choice === "home") { go("home"); return; }
          go(choice);
        }} />
        <TweaksUI tweaks={tweaks} setTweak={setTweak} />
      </>
    );
  }

  let body = null;
  switch (route.page) {
    case "home":         body = <Home go={go} audience={audience} />; break;
    case "portfolio":    body = <Portfolio go={go} />; break;
    case "project":      body = <Project go={go} id={route.projectId || window.PROJECTS[0].id} />; break;
    case "companies":    body = <Companies go={go} />; break;
    case "individuals":  body = <Individuals go={go} />; break;
    case "brief":        body = <Brief go={go} audienceHint={audienceHint} />; break;
    case "process":      body = <Home go={go} audience={audience} />; break;
    default:             body = <Home go={go} audience={audience} />;
  }

  return (
    <div className="page">
      <Nav current={route.page} go={go} audience={audience} />
      {body}
      <Footer go={go} />
      <TweaksUI tweaks={tweaks} setTweak={setTweak} />
    </div>
  );
}

// === Tweaks panel ===
function TweaksUI({ tweaks, setTweak }) {
  return (
    <TweaksPanel title="Tweaks · رُواء">
      <TweakSection label="Theme">
        <TweakRadio
          label="Palette"
          value={tweaks.theme}
          onChange={(v) => setTweak("theme", v)}
          options={[
            { value: "warm", label: "Warm" },
            { value: "stone", label: "Stone" },
            { value: "dark", label: "Dark" },
          ]}
        />
        <TweakRadio
          label="Arabic font"
          value={tweaks.arabicFont}
          onChange={(v) => setTweak("arabicFont", v)}
          options={[
            { value: "tajawal", label: "Tajawal" },
            { value: "reem", label: "Reem" },
            { value: "amiri", label: "Amiri" },
            { value: "naskh", label: "Naskh" },
          ]}
        />
      </TweakSection>

      <TweakSection label="Splash">
        <TweakToggle
          label="إظهار شاشة البداية"
          value={tweaks.showSplash}
          onChange={(v) => setTweak("showSplash", v)}
        />
        <p style={{ fontSize: 12, color: "var(--muted, #888)", margin: "4px 0 0", lineHeight: 1.5 }}>
          أعد تحميل الصفحة لإظهارها.
        </p>
      </TweakSection>
    </TweaksPanel>
  );
}

// Mount
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
