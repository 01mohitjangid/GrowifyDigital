"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Photo } from "@/content/site";

const depth = [
  { r: 0, y: 0, s: 1 },
  { r: -5, y: 10, s: 0.96 },
  { r: 4, y: 18, s: 0.92 },
  { r: -2.5, y: 26, s: 0.88 },
  { r: 6, y: 32, s: 0.84 },
];
const SWIPE = 90;

export default function PhotoStack({ photos }: { photos: Photo[] }) {
  const [order, setOrder] = useState(() => photos.map((_, i) => i));
  const [dx, setDx] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [leaving, setLeaving] = useState<-1 | 0 | 1>(0);
  const startX = useRef(0);

  function next(dir: -1 | 1 = 1) {
    if (leaving) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    setLeaving(dir);
    setTimeout(
      () => {
        setOrder((o) => [...o.slice(1), o[0]]);
        setLeaving(0);
        setDx(0);
      },
      reduced ? 0 : 320,
    );
  }

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    if (leaving || e.button !== 0) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    startX.current = e.clientX;
    setDragging(true);
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (dragging) setDx(e.clientX - startX.current);
  }

  function onPointerUp() {
    if (!dragging) return;
    setDragging(false);
    if (Math.abs(dx) > SWIPE) next(dx > 0 ? 1 : -1);
    else setDx(0);
  }

  const top = photos[order[0]];

  return (
    <div className="select-none">
      <div role="group" aria-roledescription="photo stack" aria-label="Photos of the Growify office" className="relative aspect-video">
        {order.map((photoIndex, d) => {
          const photo = photos[photoIndex];
          const isTop = d === 0;
          const pos = depth[Math.min(d, depth.length - 1)];
          const transform = isTop
            ? leaving
              ? `translateX(${leaving * 120}%) rotate(${leaving * 14}deg)`
              : `translateX(${dx}px) rotate(${dx / 18}deg)`
            : `translateY(${pos.y}px) rotate(${pos.r}deg) scale(${pos.s})`;
          return (
            <div
              key={photo.src}
              aria-hidden={!isTop}
              onPointerDown={isTop ? onPointerDown : undefined}
              onPointerMove={isTop ? onPointerMove : undefined}
              onPointerUp={isTop ? onPointerUp : undefined}
              onPointerCancel={isTop ? onPointerUp : undefined}
              style={{ transform, zIndex: photos.length - d, opacity: isTop && leaving ? 0 : 1 }}
              className={`absolute inset-0 overflow-hidden rounded-2xl shadow-[0_24px_50px_-30px_rgb(0_0_0/0.8)] ${
                isTop ? "cursor-grab touch-pan-y active:cursor-grabbing" : ""
              } ${dragging && isTop ? "" : "transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none"}`}
            >
              <Image src={photo.src} alt={isTop ? photo.alt : ""} fill draggable={false} sizes="(min-width: 768px) 50vw, 100vw" className="pointer-events-none object-cover" />
            </div>
          );
        })}
      </div>
      <div className="mt-12 flex items-center justify-between gap-4 text-sm text-ivory/75">
        <p>
          <span aria-live="polite" aria-atomic="true">
            Photo {order[0] + 1} of {photos.length}
            <span className="sr-only">: {top.alt}</span>
          </span>
          <span aria-hidden> · drag to flip through</span>
        </p>
        <button type="button" onClick={() => next(1)} className="btn shrink-0 whitespace-nowrap border border-ivory/50 text-ivory hover:border-ivory">
          Next photo <span aria-hidden>→</span>
        </button>
      </div>
    </div>
  );
}
