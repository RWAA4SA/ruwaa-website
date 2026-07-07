"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wordmark } from "./ui";
import { IconArrow, IconMenu, IconClose } from "./icons";

const LINKS = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "عن رُواء" },
  { href: "/services", label: "خدماتنا" },
  { href: "/portfolio", label: "الأعمال" },
  { href: "/companies", label: "للشركات" },
  { href: "/individuals", label: "للأفراد" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <nav className="nav" aria-label="التنقل الرئيسي">
      <div className="shell nav-inner">
        <Link href="/" aria-label="رُواء — الصفحة الرئيسية" style={{ cursor: "pointer" }}>
          <Wordmark />
        </Link>

        <div className="nav-links">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={"nav-link " + (isActive(l.href) ? "active" : "")}
              aria-current={isActive(l.href) ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link href="/brief" className="btn btn-primary nav-desktop-cta">
            ابدأ مشروعاً <IconArrow size={14} />
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose size={20} /> : <IconMenu size={20} />}
          </button>
        </div>
      </div>

      <div className={"nav-mobile " + (open ? "open" : "")}>
        <div className="nav-mobile-inner">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={isActive(l.href) ? "active" : ""}
              aria-current={isActive(l.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="cta-row">
            <Link href="/brief" className="btn btn-primary" onClick={() => setOpen(false)}>
              ابدأ مشروعاً <IconArrow size={14} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
