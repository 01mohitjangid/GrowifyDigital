import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import OfficeTour from "@/components/OfficeTour";
import { CtaBand, PageHeader } from "@/components/ui";
import { blueprintBySlug, blueprints } from "@/content/site";

export function generateStaticParams() {
  return blueprints.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const page = blueprintBySlug((await params).slug);
  if (!page) return {};
  return { title: page.title, description: page.description, alternates: { canonical: `/${page.slug}` }, robots: { index: false } };
}

export default async function BlueprintPage({ params }: PageProps<"/[slug]">) {
  const page = blueprintBySlug((await params).slug);
  if (!page) notFound();

  return (
    <>
      <PageHeader eyebrow={page.name} title={page.h1}>
        <p>{page.description}</p>
      </PageHeader>

      {page.tour && <OfficeTour tour={page.tour} />}

      {page.images && (
        <div className="container-x grid gap-4 pb-16 md:grid-cols-2">
          {page.images.map((img, i) => (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              width={1600}
              height={900}
              sizes={i === 0 && page.images!.length % 2 ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : undefined}
              className={`h-72 w-full rounded-2xl object-cover md:h-96 ${i === 0 && page.images!.length % 2 ? "md:col-span-2" : ""}`}
            />
          ))}
        </div>
      )}

      <section className="border-t border-line bg-white">
        <div className="container-x py-16">
          <p className="inline-block rounded-full bg-lilac/50 px-3 py-1 text-xs">Page blueprint</p>
          <h2 className="mt-4 font-display text-4xl">Planned sections</h2>
          <ol className="mt-8 divide-y divide-line border-y border-line">
            {page.sections.map((s, i) => (
              <li key={s.name} className="grid gap-2 py-6 md:grid-cols-[4rem_14rem_1fr]">
                <span className="font-display text-2xl text-plum">0{i + 1}</span>
                <span className="text-lg font-medium">{s.name}</span>
                <span className="text-muted">{s.detail}</span>
              </li>
            ))}
          </ol>
          <h3 className="mt-12 text-lg font-medium">Inputs needed from Growify</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            {page.inputs.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand location={`blueprint_${page.slug}`} />
    </>
  );
}
