"use client";

import { useEffect, useMemo, useState } from "react";
import { Eyebrow } from "@/components/ui";
import { IconArrow } from "@/components/icons";
import { listRequests, type StoredRequest } from "@/lib/supabase";

const ADMIN_PASSWORD = "ruwaa-admin-2026";
const UNLOCK_KEY = "ruwaa-admin-unlocked";

function formatDate(value?: string) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString("ar-SA", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default function AdminPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);

  const [rows, setRows] = useState<StoredRequest[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setHydrated(true);
    if (typeof window !== "undefined" && sessionStorage.getItem(UNLOCK_KEY) === "1") {
      setUnlocked(true);
    }
  }, []);

  const load = async () => {
    setLoading(true);
    setFetchError(null);
    try {
      const data = await listRequests();
      setRows(data);
    } catch (err) {
      setFetchError(err instanceof Error ? err.message : "تعذر تحميل الطلبات.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (unlocked) {
      load();
    }
  }, [unlocked]);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(UNLOCK_KEY, "1");
      setUnlocked(true);
      setAuthError(null);
    } else {
      setAuthError("كلمة المرور غير صحيحة.");
    }
  };

  const handleLock = () => {
    sessionStorage.removeItem(UNLOCK_KEY);
    setUnlocked(false);
    setPassword("");
    setRows([]);
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((r) =>
      [r.name, r.email, r.phone, r.service_type, r.message]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q)),
    );
  }, [rows, query]);

  if (!hydrated) {
    return <main className="page-fade shell sec" />;
  }

  if (!unlocked) {
    return (
      <main className="page-fade">
        <section className="shell sec">
          <div style={{ maxWidth: 420, margin: "0 auto" }}>
            <Eyebrow>لوحة التحكم</Eyebrow>
            <h1 className="h-1" style={{ marginTop: 16 }}>دخول الإدارة</h1>
            <p className="body-lg" style={{ marginTop: 16, marginBottom: 32 }}>
              أدخل كلمة المرور لعرض طلبات العملاء.
            </p>
            <form onSubmit={handleUnlock} style={{ display: "grid", gap: 16 }}>
              <div className="field">
                <label htmlFor="admin-password">كلمة المرور</label>
                <input
                  id="admin-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoFocus
                />
                {authError && (
                  <span className="hint" style={{ color: "#c0392b" }}>{authError}</span>
                )}
              </div>
              <button type="submit" className="btn btn-primary">
                دخول <IconArrow size={14} />
              </button>
            </form>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="page-fade">
      <section className="shell sec">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: 32,
          }}
        >
          <div>
            <Eyebrow>لوحة التحكم</Eyebrow>
            <h1 className="h-1" style={{ marginTop: 16 }}>طلبات العملاء</h1>
            <p className="body-lg" style={{ marginTop: 12 }}>
              {loading ? "جارٍ التحميل..." : `${filtered.length} من ${rows.length} طلب`}
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button className="btn btn-ghost" onClick={load} disabled={loading}>
              تحديث
            </button>
            <button className="btn btn-light" onClick={handleLock}>
              خروج
            </button>
          </div>
        </div>

        <div className="field" style={{ maxWidth: 360, marginBottom: 24 }}>
          <label htmlFor="admin-search">بحث</label>
          <input
            id="admin-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث بالاسم، البريد، الجوال..."
          />
        </div>

        {fetchError && (
          <div
            style={{
              padding: 16,
              border: "1px solid #c0392b",
              borderRadius: 8,
              color: "#c0392b",
              marginBottom: 24,
              fontFamily: "var(--arabic)",
            }}
          >
            {fetchError}
          </div>
        )}

        {!fetchError && !loading && filtered.length === 0 && (
          <p className="body-lg" style={{ color: "var(--muted)" }}>
            لا توجد طلبات حتى الآن.
          </p>
        )}

        {filtered.length > 0 && (
          <div style={{ overflowX: "auto", border: "1px solid var(--line)", borderRadius: 12 }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontFamily: "var(--arabic)",
                fontSize: 14,
                minWidth: 880,
              }}
            >
              <thead>
                <tr style={{ background: "var(--paper)", textAlign: "right" }}>
                  <Th>التاريخ</Th>
                  <Th>الاسم</Th>
                  <Th>الجوال</Th>
                  <Th>البريد</Th>
                  <Th>نوع الخدمة</Th>
                  <Th>الرسالة</Th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((row, idx) => (
                  <tr
                    key={row.id ?? `${row.email}-${row.created_at}-${idx}`}
                    style={{ borderTop: "1px solid var(--line)" }}
                  >
                    <Td>{formatDate(row.created_at)}</Td>
                    <Td>{row.name || "—"}</Td>
                    <Td dir="ltr" style={{ textAlign: "right" }}>{row.phone || "—"}</Td>
                    <Td dir="ltr" style={{ textAlign: "right" }}>
                      {row.email ? (
                        <a href={`mailto:${row.email}`} style={{ color: "var(--ink)" }}>
                          {row.email}
                        </a>
                      ) : (
                        "—"
                      )}
                    </Td>
                    <Td>{row.service_type || "—"}</Td>
                    <Td style={{ whiteSpace: "pre-wrap", maxWidth: 360 }}>
                      {row.message || "—"}
                    </Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th
      style={{
        padding: "14px 16px",
        fontWeight: 600,
        fontSize: 13,
        color: "var(--muted)",
        textAlign: "right",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </th>
  );
}

function Td({
  children,
  style,
  dir,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  dir?: "ltr" | "rtl";
}) {
  return (
    <td
      dir={dir}
      style={{
        padding: "14px 16px",
        verticalAlign: "top",
        color: "var(--ink)",
        ...style,
      }}
    >
      {children}
    </td>
  );
}
