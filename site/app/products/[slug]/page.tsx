import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb, ButtonLink, CtaBand, JsonLd, Verify } from "@/components/ui";
import { orgRef, productBySlug, products } from "@/content/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const product = productBySlug((await params).slug);
  if (!product) return {};
  return {
    title: product.title,
    description: product.description,
    alternates: { canonical: `/products/${product.slug}` },
    ...(!product.live && { robots: { index: false } }),
  };
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const product = productBySlug((await params).slug);
  if (!product) notFound();

  return (
    <>
      {product.live && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: product.name,
            applicationCategory: "BusinessApplication",
            description: product.description,
            url: product.url,
            publisher: orgRef,
          }}
        />
      )}
      <Breadcrumb items={[{ href: "/", label: "Home" }, { href: "/products", label: "Products" }, { label: product.name }]} />

      <header className="container-x pt-10 pb-16 md:pt-16">
        <p className="eyebrow">
          {product.job} · {product.status}
        </p>
        <h1 className="mt-4 max-w-5xl font-display text-5xl leading-[1.05] md:text-7xl">{product.h1}</h1>
        <p className="mt-6 max-w-2xl text-xl text-muted">{product.summary}</p>
        {product.live && (
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href={`/contact?service=${product.slug}`} location={`product_${product.slug}_hero`}>
              Book a demo
            </ButtonLink>
            {product.url && (
              <ButtonLink href={product.url} location={`product_${product.slug}_hero`} variant="ghost">
                {`Visit ${new URL(product.url).hostname} ↗`}
              </ButtonLink>
            )}
          </div>
        )}
      </header>

      {product.steps && (
        <section className="bg-ink text-ivory">
          <div className="container-x py-20">
            <h2 className="font-display text-4xl md:text-5xl">How it works</h2>
            <ol data-reveal="stagger" className="mt-12 grid gap-8 md:grid-cols-4">
              {product.steps.map((step, i) => (
                <li key={step} className="border-t border-ivory/25 pt-6">
                  <span className="font-display text-5xl text-lilac">{i + 1}</span>
                  <p className="mt-4">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {product.proof && (
        <section className="container-x py-20">
          <h2 className="eyebrow">In numbers</h2>
          <dl data-reveal="stagger" className="mt-8 grid grid-cols-2 gap-10 md:grid-cols-4">
            {product.proof.map((p) => (
              <div key={p.label} className="flex flex-col-reverse">
                <dt className="mt-2 text-sm text-muted">
                  {p.label}
                  <span className="block text-xs">Source: {p.source}</span>
                </dt>
                <dd className="font-display text-5xl">
                  {p.value}
                  {p.verify && <Verify />}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {(product.features || product.panels || product.pricing) && (
        <section className="border-t border-line bg-white">
          <div className="container-x grid gap-12 py-20 md:grid-cols-2">
            {product.features && (
              <div>
                <h2 className="font-display text-4xl">Features</h2>
                <ul className="mt-8 space-y-4">
                  {product.features.map((f) => (
                    <li key={f} className="flex gap-3 border-b border-line pb-4">
                      <span aria-hidden className="text-plum">
                        ✦
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="space-y-6">
              {product.panels?.map((panel) => (
                <div key={panel.title} className={`rounded-2xl p-8 ${panel.placeholder ? "border-2 border-dashed border-ink/20" : "bg-sand"}`}>
                  <h2 className="text-xl font-medium">{panel.title}</h2>
                  <p className="mt-3 text-muted">{panel.text}</p>
                </div>
              ))}
              {product.pricing && <p className="text-muted">{product.pricing}</p>}
            </div>
          </div>
        </section>
      )}

      <section className="container-x py-16">
        <div className="rounded-2xl bg-lilac/30 p-8 md:p-10">
          <h2 className="text-lg font-medium">{product.live ? "Inputs needed to finish this page" : "Inputs needed to build this page"}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
            {product.inputsNeeded.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title={product.live ? `See ${product.name} on your own products.` : "Want early access to our products?"} service={product.live ? product.slug : undefined} location={`product_${product.slug}`} />
    </>
  );
}
