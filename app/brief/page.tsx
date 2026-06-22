"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Eyebrow } from "@/components/ui";
import { IconArrow, IconCheck } from "@/components/icons";
import { submitRequest } from "@/lib/supabase";
import { CONTACT } from "@/lib/contact";

type AudienceType = "company" | "individual" | "";

type FormState = {
  type: AudienceType;
  project: string[];
  area: string;
  timeline: string;
  name: string;
  org: string;
  email: string;
  phone: string;
  location: string;
  note: string;
};

const PROJECTS_COMPANY = ["برج سكني", "فندق / منتجع", "مكاتب", "مجمع تجاري", "وحدات نموذجية", "إعادة تأهيل"];
const PROJECTS_INDIVIDUAL = ["شقة", "فيلا", "غرفة واحدة", "مجلس", "مطبخ", "تجديد كامل"];
const TIMELINES = ["خلال شهر", "١–٣ أشهر", "٣–٦ أشهر", "أكثر من ٦ أشهر", "مرن"];
const AREAS_COMPANY = ["تحت ١٠٠٠ م²", "١٠٠٠–٥٠٠٠ م²", "٥٠٠٠–٢٠٠٠٠ م²", "أكبر من ٢٠٠٠٠ م²"];
const AREAS_INDIVIDUAL = ["تحت ١٠٠ م²", "١٠٠–٢٥٠ م²", "٢٥٠–٥٠٠ م²", "أكبر من ٥٠٠ م²"];
const STAGES = ["النوع", "المشروع", "أنت"];

function BriefForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const hint = searchParams.get("type");

  const initialType: AudienceType = hint === "company" || hint === "individual" ? hint : "";

  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>({
    type: initialType,
    project: [],
    area: "",
    timeline: "",
    name: "",
    org: "",
    email: "",
    phone: "",
    location: "",
    note: "",
  });
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const buildServiceType = (f: FormState) => {
    const audience = f.type === "company" ? "شركة / مطوّر" : f.type === "individual" ? "فرد / عائلة" : "";
    const projects = f.project.join("، ");
    return [audience, projects].filter(Boolean).join(" — ");
  };

  const buildMessage = (f: FormState) => {
    const parts: string[] = [];
    if (f.org) parts.push(`الجهة: ${f.org}`);
    if (f.location) parts.push(`الموقع: ${f.location}`);
    if (f.area) parts.push(`المساحة: ${f.area}`);
    if (f.timeline) parts.push(`الجدول الزمني: ${f.timeline}`);
    if (f.note) parts.push(`ملاحظات: ${f.note}`);
    return parts.join("\n");
  };

  const handleSubmit = async () => {
    if (!canNext() || submitting) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      await submitRequest({
        name: form.name,
        phone: form.phone,
        email: form.email,
        service_type: buildServiceType(form),
        message: buildMessage(form),
      });
      setDone(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "تعذر إرسال النموذج، حاول مرة أخرى.");
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (hint === "company" || hint === "individual") {
      setForm((f) => ({ ...f, type: hint }));
    }
  }, [hint]);

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));
  const toggleProject = (v: string) =>
    setForm((f) => ({
      ...f,
      project: f.project.includes(v) ? f.project.filter((x) => x !== v) : [...f.project, v],
    }));

  const projectsList = form.type === "company" ? PROJECTS_COMPANY : PROJECTS_INDIVIDUAL;
  const areas = form.type === "company" ? AREAS_COMPANY : AREAS_INDIVIDUAL;

  const progress = (step + 1) / STAGES.length;

  const canNext = () => {
    if (step === 0) return !!form.type;
    if (step === 1) return form.project.length > 0 && !!form.area && !!form.timeline;
    return !!form.name && !!form.email;
  };

  if (done) {
    return (
      <main className="page-fade shell sec">
        <div className="confirm">
          <div className="check"><IconCheck size={26} /></div>
          <h2 className="h-1" style={{ margin: 0 }}>وصلتنا رسالتك.</h2>
          <p className="body-lg" style={{ margin: 0, maxWidth: 480 }}>
            سنرد خلال يومي عمل على {form.email}. لو الموضوع عاجل، تواصل عبر واتساب: <a href={CONTACT.whatsappLink} dir="ltr" style={{ color: "var(--accent-deep)" }}>{CONTACT.phoneDisplay}</a>.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
            <Link href="/" className="btn btn-primary">الرئيسية</Link>
            <Link href="/portfolio" className="btn btn-ghost">تصفح الأعمال</Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="page-fade">
      <section className="shell">
        <div className="brief-grid">
          <div className="brief-side">
            <Eyebrow>ابدأ مشروعاً</Eyebrow>
            <h1 className="h-1" style={{ marginTop: 16 }}>
              أربع دقائق<br />
              <span style={{ fontFamily: "var(--serif)", fontStyle: "italic" }}>تكفي.</span>
            </h1>
            <p className="body-lg" style={{ marginTop: 24 }}>
              املأ النموذج وسنرسل لك تصوراً مبدئياً وميزانية أولية خلال ثلاثة أيام عمل.
            </p>
            <div className="pic">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/portfolio/03.png" alt="" />
            </div>
          </div>

          <div className="brief-form">
            <div className="brief-stage">
              <span>الخطوة {step + 1} من {STAGES.length}</span>
              <div className="bar"><span style={{ transform: `scaleX(${1 - progress})` }} /></div>
              <span>{STAGES[step]}</span>
            </div>

            {step === 0 && (
              <>
                <div className="field">
                  <label>أنت...</label>
                  <div className="choice-row">
                    <button
                      type="button"
                      className={"choice " + (form.type === "company" ? "on" : "")}
                      onClick={() => set("type", "company")}
                    >
                      شركة / مطوّر
                    </button>
                    <button
                      type="button"
                      className={"choice " + (form.type === "individual" ? "on" : "")}
                      onClick={() => set("type", "individual")}
                    >
                      فرد / عائلة
                    </button>
                  </div>
                  <span className="hint">سنخصص الأسئلة بناءً على اختيارك.</span>
                </div>

                {form.type && (
                  <div className="field">
                    <label>أين موقع المشروع؟</label>
                    <input
                      value={form.location}
                      onChange={(e) => set("location", e.target.value)}
                      placeholder="جدة، حي الزهراء..."
                    />
                  </div>
                )}
              </>
            )}

            {step === 1 && (
              <>
                <div className="field">
                  <label>نوع المشروع</label>
                  <div className="choice-row">
                    {projectsList.map((p) => (
                      <button
                        type="button"
                        key={p}
                        className={"choice " + (form.project.includes(p) ? "on" : "")}
                        onClick={() => toggleProject(p)}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                  <span className="hint">يمكن اختيار أكثر من نوع.</span>
                </div>

                <div className="field">
                  <label>المساحة التقريبية</label>
                  <div className="choice-row">
                    {areas.map((a) => (
                      <button
                        type="button"
                        key={a}
                        className={"choice " + (form.area === a ? "on" : "")}
                        onClick={() => set("area", a)}
                      >
                        {a}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="field">
                  <label>الجدول الزمني المرغوب</label>
                  <div className="choice-row">
                    {TIMELINES.map((t) => (
                      <button
                        type="button"
                        key={t}
                        className={"choice " + (form.timeline === t ? "on" : "")}
                        onClick={() => set("timeline", t)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="field">
                  <label>
                    أي تفاصيل إضافية؟{" "}
                    <span style={{ color: "var(--muted)", fontWeight: 400 }}>(اختياري)</span>
                  </label>
                  <textarea
                    value={form.note}
                    onChange={(e) => set("note", e.target.value)}
                    placeholder="حدثنا عن الميزانية، الذوق، الإلهام، أو أي شيء يساعدنا."
                  />
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="field">
                  <label>الاسم الكامل</label>
                  <input
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder="عبد الله الراشد"
                  />
                </div>
                {form.type === "company" && (
                  <div className="field">
                    <label>الجهة</label>
                    <input
                      value={form.org}
                      onChange={(e) => set("org", e.target.value)}
                      placeholder="شركة..."
                    />
                  </div>
                )}
                <div className="field">
                  <label>البريد الإلكتروني</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="name@company.com"
                  />
                </div>
                <div className="field">
                  <label>الجوال</label>
                  <input
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    placeholder="+966 5x xxx xxxx"
                  />
                </div>
              </>
            )}

            <div className="brief-actions">
              <button
                type="button"
                className="btn-arrow"
                onClick={() => (step === 0 ? router.push("/") : setStep(step - 1))}
              >
                <IconArrow size={14} /> {step === 0 ? "رجوع للرئيسية" : "السابق"}
              </button>
              {step < 2 ? (
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={!canNext()}
                  style={{ opacity: canNext() ? 1 : 0.4 }}
                  onClick={() => canNext() && setStep(step + 1)}
                >
                  التالي <IconArrow size={14} />
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={!canNext() || submitting}
                  style={{ opacity: canNext() && !submitting ? 1 : 0.4 }}
                  onClick={handleSubmit}
                >
                  {submitting ? "جارٍ الإرسال..." : "أرسل البريف"} <IconArrow size={14} />
                </button>
              )}
            </div>
            {submitError && (
              <p className="hint" style={{ color: "#c0392b", marginTop: 12 }}>
                {submitError}
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default function BriefPage() {
  return (
    <Suspense fallback={<main className="page-fade shell sec" />}>
      <BriefForm />
    </Suspense>
  );
}
