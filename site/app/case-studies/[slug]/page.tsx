import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb, CtaBand, JsonLd, Verify } from "@/components/ui";
import { SITE_URL, caseStudies, caseStudyBySlug, orgRef, serviceBySlug } from "@/content/site";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/case-studies/[slug]">): Promise<Metadata> {
  const study = caseStudyBySlug((await params).slug);
  if (!study) return {};
  return { title: study.title, description: study.description, alternates: { canonical: `/case-studies/${study.slug}` } };
}

export default async function CaseStudyPage({ params }: PageProps<"/case-studies/[slug]">) {
  const study = caseStudyBySlug((await params).slug);
  if (!study) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: study.h1,
          description: study.description,
          url: `${SITE_URL}/case-studies/${study.slug}`,
          about: { "@type": "Brand", name: study.brand },
          publisher: orgRef,
        }}
      />
      <Breadcrumb items={[{ href: "/", label: "Home" }, { href: "/case-studies", label: "Work" }, { label: study.brand }]} />

      <header className="container-x pt-10 pb-16 md:pt-16">
        <p className="eyebrow">Case study · {study.theme}</p>
        <h1 className="mt-4 max-w-5xl font-display text-5xl leading-[1.05] md:text-7xl">{study.h1}</h1>
        <p className="mt-6 max-w-3xl text-xl">
          {study.result}
          {study.resultVerify && <Verify />}
        </p>
        <ul className="mt-8 flex flex-wrap gap-2" aria-label="Scope of work">
          {study.scope.map((s) => (
            <li key={s} className="rounded-full border border-ink/25 px-4 py-1.5 text-sm">
              {s}
            </li>
          ))}
        </ul>
      </header>

      <section aria-labelledby="outcomes" className="bg-ink text-ivory">
        <div className="container-x py-16">
          <h2 id="outcomes" className="eyebrow text-lilac">
            Outcomes
          </h2>
          <dl className="mt-8 grid gap-10 md:grid-cols-4">
            {study.outcomes.map((o) => (
              <div key={o.label} className="flex flex-col-reverse">
                <dt className="mt-2 text-sm text-ivory/70">
                  {o.label}
                  <span className="block text-xs text-ivory/50">Source: {o.source}</span>
                </dt>
                <dd className="font-display text-4xl md:text-5xl">
                  {o.value}
                  {o.verify && <Verify />}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="container-x grid gap-16 py-16 md:grid-cols-[1fr_2fr]">
        <aside className="space-y-10 md:sticky md:top-24 md:self-start">
          <div>
            <h2 className="eyebrow">The brand</h2>
            <p className="mt-3">{study.context}</p>
          </div>
          <div>
            <h2 className="eyebrow">The problem</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              {study.problem.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </aside>

        <div>
          <h2 className="font-display text-4xl md:text-5xl">What Growify did</h2>
          {study.approach.map((a, i) => (
            <section key={a.heading} className="mt-10 border-t border-line pt-8">
              <h3 className="flex items-baseline gap-4 text-2xl font-medium">
                <span className="font-display text-plum">0{i + 1}</span>
                {a.heading}
              </h3>
              <ul className="mt-5 space-y-3 text-muted">
                {a.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span aria-hidden className="text-plum">
                      ✦
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section className="mt-12 rounded-2xl border-2 border-dashed border-ink/20 p-8">
            <h3 className="eyebrow">Visual proof: placeholder</h3>
            <p className="mt-3 text-muted">{study.proofNeeded}</p>
          </section>

          <section className="mt-8 rounded-2xl bg-lilac/30 p-8">
            <h3 className="text-lg font-medium">Before publishing</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
              {study.validation.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h3 className="eyebrow">Services used</h3>
            <ul className="mt-4 flex flex-wrap gap-3">
              {study.services.map((slug) => {
                const s = serviceBySlug(slug)!;
                return (
                  <li key={slug}>
                    <Link href={`/services/${slug}`} className="inline-block rounded-full bg-white px-4 py-2 text-sm hover:text-plum">
                      {s.name} →
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </div>

      <CtaBand title={`Planning growth like ${study.brand}?`} service={study.services[0]} location={`case_${study.slug}`} />
    </>
  );
}
