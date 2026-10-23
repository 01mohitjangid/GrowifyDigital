"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import type { Tour } from "@/content/site";

const linkButton = "inline-flex min-h-11 items-center underline underline-offset-4 hover:text-plum";

export default function OfficeTour({ tour }: { tour: Tour }) {
  const video = useRef<HTMLVideoElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [mode, setMode] = useState<"photos" | "video">("photos");
  const [ready, setReady] = useState(false);
  const stop = tour.stops[active];
  const last = tour.stops.length - 1;
  const showVideo = mode === "video" && ready;

  function goTo(i: number) {
    setActive(i);
    stage.current?.scrollIntoView({ block: "nearest", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    const v = video.current;
    if (mode === "video" && v) {
      v.currentTime = tour.stops[i].start;
      v.play().catch(fallBack);
    }
  }

  function toggleMode() {
    const v = video.current;
    if (!v) return;
    if (mode === "video") {
      v.pause();
      setMode("photos");
      return;
    }
    setReady(false);
    setMode("video");
    const from = v.ended && active === last ? 0 : active;
    setActive(from);
    v.currentTime = tour.stops[from].start;
    v.play().catch(fallBack);
  }

  function fallBack(e: Error) {
    if (e.name === "AbortError") return;
    video.current?.pause();
    setMode("photos");
  }

  function onTimeUpdate() {
    if (mode !== "video") return;
    const t = video.current?.currentTime ?? 0;
    const i = tour.stops.findLastIndex((s) => t >= s.start);
    if (i !== active) setActive(i);
  }

  return (
    <section aria-labelledby="tour-title" className="container-x pb-16">
      <h2 id="tour-title" className="font-display text-4xl md:text-5xl">
        Walk through the office
      </h2>
      <div className="mt-8 grid gap-8 md:grid-cols-[2fr_1fr]">
        <div>
          <div ref={stage} className="relative aspect-video scroll-mt-24 overflow-hidden rounded-2xl bg-ink">
            {tour.stops.map((s, i) => (
              <Image
                key={s.image}
                src={s.image}
                alt={!showVideo && i === active ? s.alt : ""}
                aria-hidden={showVideo || i !== active}
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                loading={i === 0 ? "eager" : "lazy"}
                className={`object-cover transition-opacity duration-500 motion-reduce:transition-none ${!showVideo && i === active ? "opacity-100" : "opacity-0"}`}
              />
            ))}
            <video
              ref={video}
              className={`absolute inset-0 size-full object-cover ${showVideo ? "" : "invisible"}`}
              controls={showVideo}
              muted
              playsInline
              preload="none"
              onPlaying={() => setReady(true)}
              onTimeUpdate={onTimeUpdate}
              onEnded={() => {
                setMode("photos");
                setReady(false);
              }}
              aria-label="Video walk-through of the Growify office. The stop captions describe each area."
            >
              <source src={tour.video.desktop} type="video/mp4" media="(min-width: 768px)" />
              <source src={tour.video.mobile} type="video/mp4" onError={() => fallBack(new Error("video source failed"))} />
            </video>
          </div>

          <div aria-live="polite" aria-atomic="true" className="mt-6">
            <p className="eyebrow">
              Stop {active + 1} of {tour.stops.length}
            </p>
            <h3 className="mt-2 font-display text-3xl">{stop.title}</h3>
            <p className="mt-2 max-w-2xl text-muted">{stop.text}</p>
          </div>

          <p className="mt-6 text-sm text-muted">The video uses about 6 MB on phones and 10 MB on larger screens. The photo tour works on any connection.</p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={toggleMode}
              data-track={mode === "photos" ? "tour_video_start" : undefined}
              aria-busy={mode === "video" && !ready}
              className="btn bg-ink text-ivory hover:bg-plum"
            >
              {mode === "photos" ? (
                <>
                  <span aria-hidden="true">▶</span> Play the video tour
                </>
              ) : ready ? (
                "Back to photos"
              ) : (
                "Loading video… tap to cancel"
              )}
            </button>
            <button
              type="button"
              onClick={() => active < last && goTo(active + 1)}
              aria-disabled={active === last}
              className="btn border border-ink/25 hover:border-ink aria-disabled:cursor-default aria-disabled:opacity-40"
            >
              Next stop →
            </button>
          </div>
        </div>

        <div>
          <ol aria-label="Tour stops" className="space-y-2">
            {tour.stops.map((s, i) => (
              <li key={s.title}>
                <button
                  type="button"
                  onClick={() => goTo(i)}
                  aria-current={i === active ? "step" : undefined}
                  data-track="tour_stop"
                  data-stop={s.title}
                  className={`flex min-h-14 w-full items-center gap-4 rounded-xl px-4 text-left ${i === active ? "bg-white ring-2 ring-plum" : "hover:bg-white/60"}`}
                >
                  <span className="font-display text-2xl text-plum">0{i + 1}</span>
                  <span className="font-medium">{s.title}</span>
                </button>
              </li>
            ))}
          </ol>
          <div className="mt-6 rounded-2xl bg-white p-6">
            <h3 className="font-medium">Like what you see?</h3>
            <p className="mt-2 flex flex-wrap gap-x-6 text-sm">
              <Link href="/careers" data-track="cta_click" data-label="See open roles" data-location="office_tour" className={linkButton}>
                See open roles
              </Link>
              <Link href="/contact" data-track="cta_click" data-label="Work with us" data-location="office_tour" className={linkButton}>
                Work with us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
