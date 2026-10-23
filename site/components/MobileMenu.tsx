"use client";

import Link from "next/link";

export default function MobileMenu({ items }: { items: { href: string; label: string }[] }) {
  const close = (e: React.MouseEvent) => e.currentTarget.closest("details")?.removeAttribute("open");
  return (
    <details className="group md:hidden">
      <summary className="btn cursor-pointer list-none border border-ink/25 [&::-webkit-details-marker]:hidden">
        <span className="group-open:hidden">Menu</span>
        <span className="hidden group-open:inline">Close</span>
      </summary>
      <nav aria-label="Mobile" className="absolute inset-x-0 top-16 max-h-[calc(100dvh-4rem)] overflow-auto border-b border-line bg-ivory">
        <ul className="container-x flex flex-col py-4 text-lg">
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={close} className="block py-3">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
}
