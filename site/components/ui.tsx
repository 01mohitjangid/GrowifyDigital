import Link from "next/link";
import { contact } from "@/content/site";

type ButtonProps = { href: string; children: React.ReactNode; location: string; variant?: "solid" | "ghost" | "light" };

const variants = {
  solid: "bg-ink text-ivory hover:bg-plum",
  ghost: "border border-ink/25 hover:border-ink",
  light: "bg-ivory text-ink hover:bg-lilac",
};

export function ButtonLink({ href, children, location, variant = "solid" }: ButtonProps) {
  const external = href.startsWith("http");
  const props = {
    className: `btn ${variants[variant]}`,
    "data-track": "cta_click",
    "data-label": typeof children === "string" ? children : href,
    "data-location": location,
  };
  return external ? (
    <a href={href} target="_blank" rel="noopener" {...props}>
      {children}
    </a>
  ) : (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}

const whatsappHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent("Hi Growify, I'd like to talk about growing my brand.")}`;

export function WhatsAppLink({ location, className = "hover:text-plum" }: { location: string; className?: string }) {
  return (
    <a href={whatsappHref} target="_blank" rel="noopener" data-track="whatsapp_click" data-location={location} className={`underline underline-offset-4 ${className}`}>
      Chat on WhatsApp
    </a>
  );
}

export function PageHeader({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <header className="container-x pt-16 pb-12 md:pt-24 md:pb-16">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">{title}</h1>
      {children && <div className="mt-6 max-w-2xl text-lg text-muted">{children}</div>}
    </header>
  );
}

export function CtaBand({ title = "Tell us where you want to grow.", service, location }: { title?: string; service?: string; location: string }) {
  return (
    <section className="bg-ink text-ivory">
      <div className="container-x flex flex-col gap-8 py-20 md:flex-row md:items-end md:justify-between">
        <h2 className="max-w-xl font-display text-4xl leading-tight md:text-5xl">{title}</h2>
        <div className="flex flex-wrap items-center gap-5">
          <ButtonLink href={service ? `/contact?service=${service}` : "/contact"} location={location} variant="light">
            Book a growth call
          </ButtonLink>
          <WhatsAppLink location={location} className="text-ivory hover:text-lilac" />
        </div>
      </div>
    </section>
  );
}

export function Verify() {
  return (
    <sup className="ml-0.5 text-[0.6em] text-plum [.bg-ink_&]:text-lilac" title="Awaiting verification before launch">
      †<span className="sr-only"> (awaiting verification)</span>
    </sup>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function Breadcrumb({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-x pt-8 text-sm text-muted">
      <ol className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <li key={item.label} className="flex gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-ink">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
