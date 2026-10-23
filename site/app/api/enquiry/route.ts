import { enquiryTopics } from "@/content/site";
import { validateEnquiry } from "@/lib/enquiry";

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) return Response.json({ error: "Unsupported content type." }, { status: 415 });
  const raw = await request.text();
  if (raw.length > 10_000) return Response.json({ error: "Enquiry too long." }, { status: 413 });

  let body: unknown = null;
  try {
    body = JSON.parse(raw);
  } catch {
  }
  const result = validateEnquiry(
    body,
    enquiryTopics.map((t) => t.value),
  );
  if (!result.ok && result.spam) return Response.json({ ok: true });
  if (!result.ok) return Response.json({ error: result.error }, { status: 400 });

  return Response.json({ ok: true });
}
