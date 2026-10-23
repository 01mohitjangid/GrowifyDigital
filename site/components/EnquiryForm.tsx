"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { MAX } from "@/lib/enquiry";
import { track } from "./Analytics";

const field = "mt-2 w-full rounded-xl border border-ink/55 bg-white px-4 py-3";

export default function EnquiryForm({ topics }: { topics: { value: string; label: string }[] }) {
  const preset = useSearchParams().get("service") ?? "";
  const [state, setState] = useState<{ status: "idle" | "sending" | "sent" | "error"; message?: string }>({ status: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState({ status: "sending" });
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const body = await res.json();
      if (!res.ok) return setState({ status: "error", message: body.error });
      track("enquiry_submit", { service: String(data.service || "none") });
      setState({ status: "sent" });
    } catch {
      setState({ status: "error", message: "We couldn't send that. Please try WhatsApp or email instead." });
    }
  }

  if (state.status === "sent") {
    return (
      <div role="status" tabIndex={-1} ref={(el) => el?.focus()} className="rounded-2xl bg-white p-10">
        <p className="font-display text-4xl">Thank you.</p>
        <p className="mt-3 text-muted">Your enquiry passed validation. In this prototype it is not sent anywhere yet; at launch it goes straight to the growth team.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-2xl bg-white p-6 md:p-10">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm">
          Your name
          <input name="name" required minLength={2} maxLength={MAX.name} autoComplete="name" className={field} />
        </label>
        <label className="block text-sm">
          Work email
          <input name="email" type="email" required maxLength={MAX.email} autoComplete="email" className={field} />
        </label>
      </div>
      <label className="block text-sm">
        Brand or website <span className="text-muted">(optional)</span>
        <input name="brand" maxLength={MAX.brand} autoComplete="organization" className={field} />
      </label>
      <label className="block text-sm">
        What can we help with?
        <select name="service" defaultValue={topics.some((t) => t.value === preset) ? preset : ""} className={field}>
          <option value="">Choose a topic</option>
          {topics.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-sm">
        Anything else? <span className="text-muted">(optional)</span>
        <textarea name="message" rows={4} maxLength={MAX.message} className={field} />
      </label>
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" />
      {state.status === "error" && (
        <p role="alert" className="text-sm text-red-700">
          {state.message}
        </p>
      )}
      <button type="submit" disabled={state.status === "sending"} className="btn w-full bg-ink text-ivory hover:bg-plum disabled:opacity-60 md:w-auto">
        {state.status === "sending" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
