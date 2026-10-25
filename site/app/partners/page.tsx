import type { Metadata } from "next";
import { CtaBand, PageHeader } from "@/components/ui";
import { partnerGroups } from "@/content/site";

export const metadata: Metadata = {
  title: "Partners: Razorpay, LimeChat, QuickReply",
  description: "The commerce, payments, WhatsApp, advertising, CRM and logistics platforms Growify builds with, and what each one does for your customers.",
  alternates: { canonical: "/partners" },
};

export default function PartnersPage() {
  return (
    <>
      <PageHeader eyebrow="Partners and integrations" title="The stack behind the system.">
        <p>Every tool earns its place by doing something for your customers. We label each one honestly: a formal partnership, or a platform we integrate with.</p>
      </PageHeader>

      <div className="container-x pb-6">
        <ul className="flex flex-wrap gap-6 text-sm" aria-label="Legend">
          <li className="flex items-center gap-2">
            <span className="rounded-full bg-ink px-3 py-1 text-xs text-ivory">Partnership</span> commercial relationship
          </li>
          <li className="flex items-center gap-2">
            <span className="rounded-full border border-ink/25 px-3 py-1 text-xs">Integration</span> platform we build with
          </li>
          <li className="flex items-center gap-2">
            <span className="rounded-full bg-lilac/50 px-3 py-1 text-xs">To confirm</span> designation and logo pending sign-off
          </li>
        </ul>
      </div>

      <div className="container-x divide-y divide-line border-y border-line">
        {partnerGroups.map((g) => (
          <section key={g.category} data-reveal className="grid gap-8 py-12 md:grid-cols-[1fr_2fr]">
            <div>
              <h2 className="font-display text-3xl">{g.category}</h2>
              <p className="mt-3 text-muted">{g.value}</p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {g.partners.map((p) => (
                <li key={p.name} className="lift rounded-2xl border border-line bg-white p-6 hover:border-ink">
                  <p className="text-xl font-medium">{p.name}</p>
                  <p className="mt-2 text-sm text-muted">{p.does}</p>
                  <p className="mt-4 flex flex-wrap gap-2">
                    <span className={`rounded-full px-3 py-1 text-xs ${p.relation === "Partnership" ? "bg-ink text-ivory" : "border border-ink/25"}`}>{p.relation}</span>
                    {!p.confirmed && <span className="rounded-full bg-lilac/50 px-3 py-1 text-xs">To confirm</span>}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="container-x py-10 text-sm text-muted">
        Names are shown as text until official partner designations and logo usage are confirmed with each company.
      </p>

      <CtaBand title="Need help choosing the right stack?" location="partners" />
    </>
  );
}
