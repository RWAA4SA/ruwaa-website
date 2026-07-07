import Link from "next/link";
import { Eyebrow, Italic } from "@/components/ui";
import { IconArrow } from "@/components/icons";
import { SERVICES } from "@/lib/data";

export const metadata = {
  title: "خدماتنا — رُواء للتصميم الداخلي",
  description:
    "خدمات رُواء: تصميم الفلل والشقق والمجالس والمطابخ وغرف الملابس، تصميم الضيافة والتجاري والمكاتب، التخطيط المعماري، تخطيط المساحات، التصور ثلاثي الأبعاد، المخططات التنفيذية، والاستشارات التصميمية.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main className="page-fade">
      <section className="shell sec-tight">
        <div className="section-head">
          <div>
            <Eyebrow>خدماتنا</Eyebrow>
            <h1 className="h-1" style={{ marginTop: 16 }}>
              خدمة كاملة<br />
              <Italic>تحت سقف واحد.</Italic>
            </h1>
          </div>
          <p className="body-lg lead">
            من التصميم الداخلي للمساحات السكنية والتجارية، إلى التخطيط والتصور والمخططات
            التنفيذية — فريق واحد يرافق مشروعك من الفكرة حتى التسليم.
          </p>
        </div>

        <div className="svc-groups">
          {SERVICES.map((g) => (
            <div key={g.groupEn}>
              <div className="svc-group-head">
                <h2 className="h-2" style={{ fontSize: 28 }}>{g.group}</h2>
                <span className="tag-latin">{g.groupEn}</span>
              </div>
              <div className="svc-list-grid">
                {g.items.map((it) => (
                  <div className="svc-item" key={it.en}>
                    <div className="t">{it.t}</div>
                    <div className="en">{it.en}</div>
                    <div className="d">{it.d}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="shell sec">
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <Eyebrow>هل لديك مشروع؟</Eyebrow>
          <h2 className="h-1" style={{ margin: "20px 0 28px" }}>
            نصمّم ما يناسب<br />
            <Italic>مساحتك وميزانيتك.</Italic>
          </h2>
          <p className="body-lg" style={{ margin: "0 auto 36px", maxWidth: 520 }}>
            احكِ لنا عن فكرتك، ونرسل لك تصوراً مبدئياً وخطة عمل واضحة.
          </p>
          <Link href="/brief" className="btn btn-primary">
            ابدأ مشروعاً <IconArrow size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}
