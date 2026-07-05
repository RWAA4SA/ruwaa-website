// إعدادات قاعدة البيانات تُقرأ من متغيّرات البيئة (env) — لا تُثبّت في الكود.
// اضبطها في .env.local محليًا وفي إعدادات Vercel، ثم أعد النشر.
//   NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
//   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

const RAW_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// يقبل الرابط مع أو بدون /rest/v1 في النهاية.
function restBase(): string {
  if (!RAW_URL) return "";
  const trimmed = RAW_URL.replace(/\/+$/, "");
  return trimmed.endsWith("/rest/v1") ? trimmed : `${trimmed}/rest/v1`;
}

function ensureConfigured(): void {
  if (!RAW_URL || !ANON_KEY) {
    throw new Error(
      "قاعدة البيانات غير مهيّأة بعد. يرجى ضبط متغيّرات البيئة NEXT_PUBLIC_SUPABASE_URL و NEXT_PUBLIC_SUPABASE_ANON_KEY.",
    );
  }
}

const NETWORK_ERROR = "تعذّر الاتصال بالخادم حاليًا. تحقّق من اتصالك بالإنترنت وحاول مرة أخرى.";

export type RequestRow = {
  name: string;
  phone: string;
  email: string;
  service_type: string;
  message: string;
};

export type StoredRequest = RequestRow & {
  id?: number | string;
  created_at?: string;
};

export async function submitRequest(row: RequestRow): Promise<void> {
  ensureConfigured();

  let res: Response;
  try {
    res = await fetch(`${restBase()}/requests`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: ANON_KEY as string,
        Authorization: `Bearer ${ANON_KEY}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify(row),
    });
  } catch {
    // fetch يرمي TypeError ("Failed to fetch") عند فشل الاتصال بالشبكة.
    throw new Error(NETWORK_ERROR);
  }

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`تعذّر إرسال الطلب (${res.status}). ${text}`.trim());
  }
}

export async function listRequests(): Promise<StoredRequest[]> {
  ensureConfigured();

  let res: Response;
  try {
    res = await fetch(`${restBase()}/requests?select=*&order=created_at.desc`, {
      headers: {
        apikey: ANON_KEY as string,
        Authorization: `Bearer ${ANON_KEY}`,
      },
      cache: "no-store",
    });
  } catch {
    throw new Error(NETWORK_ERROR);
  }

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`تعذّر تحميل الطلبات (${res.status}). ${text}`.trim());
  }

  return res.json();
}
