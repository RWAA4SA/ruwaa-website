"use client";

import { useState } from "react";
import Link from "next/link";
import { Eyebrow } from "@/components/ui";
import { PROJECTS } from "@/lib/data";

const CATS = [
  { id: "all", label: "الكل" },
  { id: "Residential", label: "سكني" },
  { id: "Hospitality", label: "ضيافة" },
  { id: "Commercial", label: "تجاري" },
] as const;

const SPANS = [7, 5, 6, 6, 5, 7];

export default function PortfolioPage() {
  const [filter, setFilter] = useState<string>("all");
  const list = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.catEn === filter);

  return (
    <main className="page-fade">
      <section className="shell sec-tight">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "end",
            marginBottom: 56,
          }}
        >
          <div>
            <Eyebrow>الأعمال · ٢٠١٦ — ٢٠٢٦</Eyebrow>
            <h1 className="h-1" style={{ marginTop: 16 }}>
              ست عشرة قصة<br />
              <span style={{ fontFamily: "var(--serif)", fontStyle: "italic" }}>عن المساحة.</span>
            </h1>
          </div>
          <div className="choice-row" style={{ justifyContent: "flex-end" }}>
            {CATS.map((c) => (
              <button
                key={c.id}
                className={"choice " + (filter === c.id ? "on" : "")}
                onClick={() => setFilter(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="show-grid">
          {list.map((p, i) => (
            <Link
              key={p.id}
              href={`/portfolio/${p.id}`}
              className="tile"
              style={{ gridColumn: `span ${SPANS[i % SPANS.length]}` }}
            >
              <div className="tile-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.cover} alt={p.title} />
              </div>
              <div className="tile-meta">
                <div>
                  <div className="t-cat">{p.catEn}</div>
                  <div className="t-title" style={{ marginTop: 4 }}>{p.title}</div>
                </div>
                <div className="t-yr">{p.year} · {p.location}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
