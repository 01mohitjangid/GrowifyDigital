import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHeader, Verify } from "@/components/ui";
import { caseStudies, pipeline } from "@/content/site";

export const metadata: Metadata = {
  title: "Luxury Fashion Ecommerce Case Studies",
  description: "How Growify grows luxury and couture brands: international expansion for Mahima Mahajan and a Magento-to-Shopify move for House of Masaba.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader eyebrow="Work" title="Work that moved the numbers.">
        <p>Each story shows the problem, what we did and what changed. Figures awaiting verification are marked †.</p>
      </PageHeader>

      <ul data-reveal="stagger" className="container-x grid gap-6 pb-20 md:grid-cols-2">
        {caseStudies.map((c) => (
          <li key={c.slug}>
            <Link href={`/case-studies/${c.slug}`} className="lift group flex h-full flex-col rounded-2xl bg-ink p-10 text-ivory hover:bg-plum">
              <span className="eyebrow text-lilac">{c.theme}</span>
              <span className="mt-6 font-display text-4xl">{c.brand}</span>
              <span className="mt-4 text-lg text-ivory/80">
                {c.result}
                {c.resultVerify && <Verify />}
              </span>
              <span className="mt-6 flex flex-wrap gap-2">
                {c.scope.map((s) => (
                  <span key={s} className="rounded-full border border-ivory/25 px-3 py-1 text-xs">
                    {s}
                  </span>
                ))}
              </span>
              <span className="mt-10 text-sm">
                Read the case study <span aria-hidden className="inline-block transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <section className="border-t border-line bg-white">
        <div className="container-x py-20">
          <p className="eyebrow">Coming next</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl md:text-5xl">Stories in progress, and what we need from account teams.</h2>
          <ul data-reveal="stagger" className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
            {pipeline.map((p) => (
              <li key={p.brand} className="bg-white p-8">
                <p className="eyebrow">{p.theme}</p>
                <p className="mt-2 text-xl font-medium">{p.brand}</p>
                <p className="mt-4 text-sm text-muted">
                  <span className="font-medium text-ink">Data needed: </span>
                  {p.needs}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Want results like these for your brand?" location="case_studies_hub" />
    </>
  );
}
