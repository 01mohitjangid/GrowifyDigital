import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb, ButtonLink, CtaBand, JsonLd, Verify } from "@/components/ui";
import { SITE_URL, caseStudyBySlug, orgRef, serviceBySlug, services } from "@/content/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const service = serviceBySlug((await params).slug);
  if (!service) return {};
  return { title: service.title, description: service.description, alternates: { canonical: `/services/${service.slug}` } };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const service = serviceBySlug((await params).slug);
  if (!service) notFound();
  const study = service.caseStudy ? caseStudyBySlug(service.caseStudy) : undefined;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.name,
          description: service.description,
          url: `${SITE_URL}/services/${service.slug}`,
          provider: orgRef,
          areaServed: "Worldwide",
        }}
      />
      <Breadcrumb items={[{ href: "/", label: "Home" }, { href: "/services", label: "Services" }, { label: service.name }]} />

      <header className="container-x grid gap-10 pt-10 pb-16 md:grid-cols-[1fr_16rem] md:pt-16">
        <div>
          <p className="eyebrow">
            {service.letter} · {service.move} · {service.name}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">{service.h1}</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">{service.summary}</p>
          <div className="mt-8">
            <ButtonLink href={`/contact?service=${service.slug}`} location={`service_${service.slug}_hero`}>
              Talk to us about {service.name.toLowerCase()}
            </ButtonLink>
          </div>
        </div>
        <span aria-hidden className="hidden font-display text-[12rem] leading-none text-lilac md:block">
          {service.letter}
        </span>
      </header>

      <section className="border-t border-line bg-white">
        <div className="container-x grid gap-12 py-16 md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl">What&apos;s included</h2>
            <ul data-reveal="stagger" className="mt-8 space-y-4">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3 border-b border-line pb-4">
                  <span aria-hidden className="text-plum">
                    ✦
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-4xl">How we work</h2>
            <ol data-reveal="stagger" className="mt-8 space-y-4">
              {service.process.map((step, i) => (
                <li key={step} className="flex items-baseline gap-4 border-b border-line pb-4">
                  <span className="font-display text-2xl text-plum">0{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
            {service.image && (
              <Image
                src={service.image.src}
                alt={service.image.alt}
                width={service.image.width}
                height={service.image.height}
                sizes="(min-width: 768px) 20rem, 60vw"
                className="mt-10 w-64 rounded-2xl"
              />
            )}
          </div>
        </div>
      </section>

      {study && (
        <section className="container-x py-16">
          <p className="eyebrow">Related work</p>
          <Link href={`/case-studies/${study.slug}`} className="lift group mt-6 block rounded-2xl border border-line bg-white p-8 hover:border-ink md:p-12">
            <span className="font-display text-3xl md:text-4xl">{study.h1}</span>
            <span className="mt-4 block text-lg text-muted">
              {study.result}
              {study.resultVerify && <Verify />}
            </span>
            <span className="mt-6 block text-sm group-hover:text-plum">
              Read the case study <span aria-hidden className="inline-block transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-1">→</span>
            </span>
          </Link>
        </section>
      )}

      <section className="container-x pb-20">
        <h2 className="font-display text-4xl">Questions</h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {service.faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none justify-between gap-4 text-lg [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden className="text-plum group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-3xl text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaBand service={service.slug} location={`service_${service.slug}_footer`} />
    </>
  );
}
