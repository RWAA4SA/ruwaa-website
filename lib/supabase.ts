export const SUPABASE_URL = "https://heqvqqvncejtjonknidd.supabase.co/rest/v1/";
export const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhlcXZxcXZuY2VqdGpvbmtuaWRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE0NjIyOTIsImV4cCI6MjA5NzAzODI5Mn0.C5z0wuWE_Q_NvazKTmArPbAnE33cIt_rgqEYMDQi_W0";

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

export async function submitRequest(row: RequestRow) {
  const res = await fetch(`${SUPABASE_URL}requests`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      Prefer: "return=minimal",
    },
    body: JSON.stringify(row),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Supabase request failed (${res.status}): ${text}`);
  }
}

export async function listRequests(): Promise<StoredRequest[]> {
  const res = await fetch(
    `${SUPABASE_URL}requests?select=*&order=created_at.desc`,
    {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
      cache: "no-store",
    },
  );

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Supabase fetch failed (${res.status}): ${text}`);
  }

  return res.json();
}
