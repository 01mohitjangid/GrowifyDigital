export type Enquiry = { name: string; email: string; brand: string; service: string; message: string };

type Result = { ok: true; data: Enquiry } | { ok: false; error: string; spam?: true };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const MAX = { name: 100, email: 200, brand: 200, service: 60, message: 2000 };

export function validateEnquiry(input: unknown, topics: string[]): Result {
  if (!input || typeof input !== "object") return { ok: false, error: "Something went wrong. Please try again." };
  const fields = input as Record<string, unknown>;
  const text = (key: string) => {
    const value = fields[key];
    return typeof value === "string" ? value.trim() : "";
  };

  if (text("website")) return { ok: false, error: "Something went wrong. Please try again.", spam: true };

  const data = { name: text("name"), email: text("email"), brand: text("brand"), service: text("service"), message: text("message") };
  for (const [key, max] of Object.entries(MAX)) {
    if (data[key as keyof Enquiry].length > max) return { ok: false, error: `Please shorten the ${key} field.` };
  }
  if (data.name.length < 2) return { ok: false, error: "Please add your name." };
  if (!EMAIL.test(data.email)) return { ok: false, error: "Please add a valid email address." };
  if (data.service && !topics.includes(data.service)) return { ok: false, error: "Please choose a topic from the list." };
  return { ok: true, data };
}
