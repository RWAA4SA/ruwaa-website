"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wordmark } from "./ui";
import { IconArrow } from "./icons";

const LINKS = [
  { href: "/", label: "الرئيسية" },
  { href: "/portfolio", label: "الأعمال" },
  { href: "/companies", label: "للشركات" },
  { href: "/individuals", label: "للأفراد" },
  { href: "/#process", label: "كيف نعمل" },
];

export function Nav() {
  const pathname = usePathname();
  return (
    <nav className="nav">
      <div className="shell nav-inner">
        <Link href="/" style={{ cursor: "pointer" }}>
          <Wordmark />
        </Link>
        <div className="nav-links">
          {LINKS.map((l) => {
            const isActive =
              l.href === "/"
                ? pathname === "/"
                : pathname === l.href || pathname.startsWith(l.href.split("#")[0] + "/");
            return (
              <Link key={l.href} href={l.href} className={"nav-link " + (isActive ? "active" : "")}>
                {l.label}
              </Link>
            );
          })}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Link href="/brief" className="btn btn-primary">
            ابدأ مشروعاً <IconArrow size={14} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
