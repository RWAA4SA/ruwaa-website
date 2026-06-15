import type { CSSProperties, ReactNode } from "react";

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className="wordmark" style={light ? { color: "var(--white)" } : undefined}>
      <span>رُواء</span>
      <span className="latin" style={light ? { color: "rgba(255,255,255,0.5)" } : undefined}>
        RUWA&apos;A · STUDIO
      </span>
    </span>
  );
}

export function Eyebrow({ children, latin = false }: { children: ReactNode; latin?: boolean }) {
  return <span className={latin ? "eyebrow" : "eyebrow-ar"}>{children}</span>;
}

export function Marquee({ items }: { items: string[] }) {
  const doubled = items.concat(items);
  return (
    <div className="marquee">
      <div className="marquee-track">
        {doubled.map((it, i) => (
          <span className="marquee-item" key={i}>{it}</span>
        ))}
      </div>
    </div>
  );
}

export function Italic({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 400, ...style }}>
      {children}
    </span>
  );
}
