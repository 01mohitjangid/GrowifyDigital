"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = [...document.querySelectorAll("[data-reveal]:not(.in)")];
    const inView = (el: Element) => {
      const r = el.getBoundingClientRect();
      return r.top < innerHeight && r.bottom > 0;
    };
    targets.filter(inView).forEach((el) => el.classList.add("in"));
    document.documentElement.setAttribute("data-reveal-ready", "");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    targets.filter((el) => !el.classList.contains("in")).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
