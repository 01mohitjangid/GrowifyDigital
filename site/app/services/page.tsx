import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHeader } from "@/components/ui";
import { services } from "@/content/site";

export const metadata: Metadata = {
  title: "Digital Marketing Agency for Fashion Brands",
  description: "Shopify development, performance marketing, email and WhatsApp, sales support, SEO and AI automation, run as one growth system for luxury brands.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="Services" title="One growth system. Five moves.">
        <p>
          We call it S-C-A-L-E: set up the store, capture buyers, activate them, lead every conversation to a sale and establish the brand for the long term. Data and AI
          run underneath every move.
        </p>
      </PageHeader>
      <ol data-reveal="stagger" className="container-x border-t border-ink pb-20">
        {services.map((s) => (
          <li key={s.slug} className="border-b border-line">
            <Link href={`/services/${s.slug}`} className="group grid gap-4 py-10 transition-colors duration-300 hover:bg-white/60 md:grid-cols-[6rem_1fr_1.2fr_auto] md:items-baseline md:px-4">
              <span className="font-display text-6xl text-plum">{s.letter}</span>
              <span>
                <span className="eyebrow block">{s.move}</span>
                <span className="mt-1 block text-2xl font-medium">{s.name}</span>
                {s.signature && <span className="mt-2 inline-block rounded-full bg-lilac/50 px-3 py-1 text-xs">Signature service</span>}
              </span>
              <span className="text-muted">{s.summary}</span>
              <span className="text-sm group-hover:text-plum">
                Explore <span aria-hidden className="inline-block transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
      <CtaBand title="Not sure where to start? We'll map your growth system with you." location="services_hub" />
    </>
  );
}
