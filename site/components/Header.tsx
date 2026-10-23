import Link from "next/link";
import { nav } from "@/content/site";
import { ButtonLink } from "./ui";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ivory/90 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-ivory focus:p-2">
        Skip to content
      </a>
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Link href="/" className="text-lg font-semibold tracking-[0.2em]" aria-label="Growify home">
          GROWIFY
        </Link>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-8 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-plum">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block">
          <ButtonLink href="/contact" location="header">
            Work with us
          </ButtonLink>
        </div>
        <MobileMenu items={[...nav, { href: "/contact", label: "Work with us" }]} />
      </div>
    </header>
  );
}
