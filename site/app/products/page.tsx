import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHeader } from "@/components/ui";
import { products } from "@/content/site";

export const metadata: Metadata = {
  title: `Products: ${products.map((p) => p.name).join(", ")}`,
  description: "Growify builds its own commerce technology, including Lookify, an AI virtual try-on Shopify app for luxury and fashion brands.",
  alternates: { canonical: "/products" },
};

const fit = [
  { name: "Services", text: "We run it for you: stores, ads, retention, sales and SEO." },
  { name: "Products", text: "You use it yourself: software like Lookify, installed on your store." },
  { name: "Solutions", text: "Both together. For example, a Shopify build with Lookify try-on and a WhatsApp sales team behind it." },
];

export default function ProductsPage() {
  const live = products.filter((p) => p.live);
  const planned = products.filter((p) => !p.live);
  return (
    <>
      <PageHeader eyebrow="Products" title="We build technology too.">
        <p>Alongside our services, Growify builds its own commerce products. Each card says clearly what is live today.</p>
      </PageHeader>

      <section className="container-x pb-16">
        <ul className="space-y-6">
          {live.map((p) => (
            <li key={p.slug}>
              <Link href={`/products/${p.slug}`} className="group grid gap-8 rounded-3xl bg-ink p-10 text-ivory hover:bg-plum md:grid-cols-2 md:p-14">
                <div>
                  <span className="rounded-full bg-lilac px-3 py-1 text-xs text-ink">{p.status}</span>
                  <p className="mt-8 font-display text-6xl">{p.name}</p>
                  <p className="eyebrow mt-3 text-lilac">{p.job}</p>
                </div>
                <div className="flex flex-col justify-between gap-8">
                  <p className="text-xl text-ivory/85">{p.summary}</p>
                  <span className="text-sm">See how {p.name} works →</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <ul className="mt-6 grid gap-6 md:grid-cols-2">
          {planned.map((p) => (
            <li key={p.slug}>
              <Link href={`/products/${p.slug}`} className="flex h-full flex-col rounded-3xl border border-line bg-white p-10 hover:border-ink">
                <span className="self-start rounded-full border border-ink/25 px-3 py-1 text-xs">{p.status}</span>
                <span className="mt-8 font-display text-5xl">{p.name}</span>
                <span className="mt-3 text-muted">Details coming soon. See what we need to complete this page.</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">
          Also built by Growify: <strong className="font-medium text-ink">Mudra</strong>, a Shopify 2.0 theme for fashion and lifestyle stores (current status to be
          confirmed).
        </p>
      </section>

      <section className="border-t border-line bg-sand/60">
        <div className="container-x py-20">
          <h2 className="max-w-3xl font-display text-4xl md:text-5xl">How services, products and solutions fit together</h2>
          <dl className="mt-10 grid gap-6 md:grid-cols-3">
            {fit.map((f) => (
              <div key={f.name} className="rounded-2xl bg-ivory p-8">
                <dt className="text-xl font-medium">{f.name}</dt>
                <dd className="mt-3 text-muted">{f.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand title="Want a product demo on your own store?" location="products_hub" />
    </>
  );
}
