import Link from "next/link";
import { blueprints, contact, products, services } from "@/content/site";
import { WhatsAppLink } from "./ui";

const columns = [
  { title: "Services", links: services.map((s) => ({ href: `/services/${s.slug}`, label: s.name })) },
  {
    title: "Work and products",
    links: [{ href: "/case-studies", label: "Case studies" }, ...products.map((p) => ({ href: `/products/${p.slug}`, label: p.name })), { href: "/partners", label: "Partners" }],
  },
  { title: "Company", links: blueprints.map((b) => ({ href: `/${b.slug}`, label: b.name })) },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-x grid gap-10 py-16 md:grid-cols-4">
        <div>
          <p className="text-lg font-semibold tracking-[0.2em]">GROWIFY</p>
          <p className="mt-4 text-sm text-muted">Growth systems for luxury brands.</p>
          <address className="mt-6 space-y-1 text-sm not-italic text-muted">
            <p>{contact.address}</p>
            <p>
              <a href={`mailto:${contact.email}`} className="hover:text-ink">
                {contact.email}
              </a>
            </p>
            <p>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-ink">
                {contact.phone}
              </a>
            </p>
            <p>
              <WhatsAppLink location="footer" />
            </p>
          </address>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h2 className="eyebrow">{col.title}</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-plum">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container-x flex flex-col gap-2 border-t border-line py-6 text-xs text-muted md:flex-row md:justify-between">
        <p>© 2026 Growify Digital LLP</p>
        <p>Prototype for the Growify AI Generalist assignment. This is not the live growify.in site. † marks figures awaiting verification.</p>
      </div>
    </footer>
  );
}
