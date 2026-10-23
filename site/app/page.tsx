import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink, CtaBand, Verify } from "@/components/ui";
import { caseStudies, clients, partnerGroups, products, services, stats } from "@/content/site";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  const scale = services.filter((s) => s.letter.length === 1);

  return (
    <>
      <section className="container-x grid gap-12 pt-16 pb-20 md:grid-cols-[1.5fr_1fr] md:items-end md:pt-28">
        <div>
          <p className="eyebrow">Growify Digital · New Delhi · Since 2019</p>
          <h1 className="mt-6 font-display text-6xl leading-[0.98] md:text-8xl">
            Growth systems for <em className="text-plum">luxury</em> brands.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted">
            Shopify storefronts, performance marketing, sales support and our own AI products, run as one system by one team.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/contact" location="home_hero">
              Book a growth call
            </ButtonLink>
            <ButtonLink href="/case-studies" location="home_hero" variant="ghost">
              See the work
            </ButtonLink>
          </div>
        </div>
        <ol className="border-t border-ink" aria-label="The SCALE system">
          {scale.map((s) => (
            <li key={s.slug} className="flex items-baseline gap-4 border-b border-line py-3">
              <span className="w-6 font-display text-3xl text-plum">{s.letter}</span>
              <span className="text-sm font-medium">{s.move}</span>
              <span className="ml-auto text-right text-sm text-muted">{s.name}</span>
            </li>
          ))}
        </ol>
      </section>

      <section aria-label="Growify in numbers" className="border-y border-line bg-sand/60">
        <dl className="container-x grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse">
              <dt className="mt-1 text-sm text-muted">{s.label}</dt>
              <dd className="font-display text-5xl">
                {s.value}
                {s.verify && <Verify />}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-label="Brands we work with" className="overflow-hidden py-10">
        <div className="container-x flex flex-wrap items-center gap-x-2">
          <p className="eyebrow mr-auto">Trusted by India&apos;s leading designer labels</p>
          <input id="pause-clients" type="checkbox" className="marquee-pause size-5 accent-plum motion-reduce:hidden" />
          <label htmlFor="pause-clients" className="flex min-h-11 cursor-pointer items-center px-2 text-sm text-muted motion-reduce:hidden">
            Pause
          </label>
          <div className="marquee mt-6 flex w-max shrink-0">
            {[0, 1].map((copy) => (
              <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 gap-12 pr-12 font-display text-3xl italic text-ink/80 md:text-4xl">
                {clients.map((c) => (
                  <li key={c} className="whitespace-nowrap">
                    {c}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x reveal py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">How we work</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl md:text-6xl">One system. Five moves. AI underneath.</h2>
          </div>
          <Link href="/services" className="text-sm underline underline-offset-4 hover:text-plum">
            All services
          </Link>
        </div>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug} className="bg-ivory">
              <Link href={`/services/${s.slug}`} className="group flex h-full flex-col p-8 hover:bg-white">
                <span className="font-display text-5xl text-plum">{s.letter}</span>
                <span className="eyebrow mt-6">{s.move}</span>
                <span className="mt-2 text-xl font-medium">{s.name}</span>
                <span className="mt-3 text-sm text-muted">{s.summary}</span>
                <span className="mt-auto pt-6 text-sm group-hover:text-plum">Explore →</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-ink text-ivory">
        <div className="container-x grid gap-12 py-20 md:grid-cols-2 md:items-center">
          <div className="reveal">
            <p className="eyebrow text-lilac">What makes us different</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">Most agencies stop at the click. We answer the enquiry.</h2>
            <p className="mt-6 text-ivory/75">
              Our sales teams handle customer conversations across WhatsApp, social and email, trained on your product, across time zones. Every query is handled with the
              intent of closing, not just responding.
            </p>
            <div className="mt-8">
              <ButtonLink href="/services/sales-support" location="home_sales_led" variant="light">
                How sales support works
              </ButtonLink>
            </div>
          </div>
          <Image src="/images/office-38.jpg" alt="Growify team members working together at the New Delhi office" width={1600} height={899} sizes="(min-width: 768px) 50vw, 100vw" className="rounded-2xl" />
        </div>
      </section>

      <section className="container-x reveal py-20">
        <p className="eyebrow">Selected work</p>
        <h2 className="mt-4 font-display text-4xl md:text-6xl">Proof, not just logos.</h2>
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {caseStudies.map((c) => (
            <li key={c.slug}>
              <Link href={`/case-studies/${c.slug}`} className="group flex h-full flex-col rounded-2xl border border-line bg-white p-8 hover:border-ink">
                <span className="eyebrow">{c.theme}</span>
                <span className="mt-4 font-display text-3xl">{c.brand}</span>
                <span className="mt-3 text-lg">
                  {c.result}
                  {c.resultVerify && <Verify />}
                </span>
                <span className="mt-8 text-sm group-hover:text-plum">Read the case study →</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-line bg-sand/60">
        <div className="container-x reveal py-20">
          <p className="eyebrow">Products</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl md:text-6xl">We build technology too.</h2>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {products.map((p) => (
              <li key={p.slug}>
                <Link href={`/products/${p.slug}`} className="flex h-full flex-col rounded-2xl border border-line bg-ivory p-8 hover:border-ink">
                  <span className={`self-start rounded-full px-3 py-1 text-xs ${p.live ? "bg-ink text-ivory" : "border border-ink/25"}`}>{p.status}</span>
                  <span className="mt-6 font-display text-3xl">{p.name}</span>
                  <span className="mt-2 text-sm text-muted">{p.live ? p.summary : "Details coming soon."}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x reveal py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Ecosystem</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Built on the platforms luxury commerce runs on.</h2>
          </div>
          <Link href="/partners" className="text-sm underline underline-offset-4 hover:text-plum">
            Partners and integrations
          </Link>
        </div>
        <ul className="mt-10 flex flex-wrap gap-3">
          {partnerGroups
            .flatMap((g) => g.partners)
            .map((p) => (
              <li key={p.name} className="rounded-full border border-line px-5 py-2 text-sm">
                {p.name}
              </li>
            ))}
        </ul>
      </section>

      <section className="border-t border-line">
        <div className="container-x grid gap-12 py-20 md:grid-cols-2 md:items-center">
          <Image src="/images/founders.jpg" alt="Growify co-founders Rishab Mehra and Disha Bhatnagar" width={1400} height={860} sizes="(min-width: 768px) 50vw, 100vw" className="rounded-2xl" />
          <div className="reveal">
            <p className="eyebrow">The people</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">Founded by operators. Run by 100+<Verify /> specialists in New Delhi.</h2>
            <p className="mt-6 text-muted">
              Rishab Mehra and Disha Bhatnagar started Growify in 2019 to help brands grow online. Today strategists, developers, marketers, creatives and sales teams work
              side by side in our Chattarpur office.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/about" location="home_people" variant="ghost">
                About Growify
              </ButtonLink>
              <ButtonLink href="/life-at-growify" location="home_people" variant="ghost">
                Life at Growify
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <CtaBand location="home_footer" />
    </>
  );
}
