"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    id: "broken-gift",
    image: "/brokengift.png",
    alt: "The Broken Gift",
    bg: "#EBE8E0",
    eyebrow: "The Original",
    title: "The Broken Gift",
    body: "Move beyond predictable favors and corporate gifts to something genuinely memorable. Each recipient creates a personal fragrance that captures their unique experience or relationship—crafted with premium ingredients and presented with an elegance that reflects the occasion.",
    cta: "How can you elevate your big day?",
    tag: "E",
    accent: "stone",
    textColor: "white",
  },
  {
    id: "wedding-story",
    image: "/broken-gift/wedding.jpg",
    alt: "Wedding Story",
    bg: "#1C1B18",
    eyebrow: "Weddings",
    title: "A Story Told in Scent",
    body: "Your wedding day deserves more than a centerpiece. Give your guests a fragrance born from the flowers you chose, the place you met, and the season that held you. A memory they carry home in a bottle.",
    cta: "Discover wedding collections",
    tag: "W",
    accent: "rose",
    textColor: "white",
  },
  {
    id: "corporate-ritual",
    image: "/broken-gift/corporate.jpg",
    alt: "Corporate Ritual",
    bg: "#2A2318",
    eyebrow: "Corporate",
    title: "The Ritual of Recognition",
    body: "Transform client gifting into an act of genuine appreciation. Bespoke fragrances that carry your brand's character—not a logo slapped on a candle, but an olfactory identity crafted to be remembered.",
    cta: "Build your brand scent",
    tag: "C",
    accent: "amber",
    textColor: "white",
  },
  {
    id: "anniversary",
    image: "/broken-gift/anniversary.jpg",
    alt: "Anniversary Edition",
    bg: "#F5F0E8",
    eyebrow: "Anniversaries",
    title: "Years Distilled",
    body: "Every anniversary holds a specific gravity. We capture it—the places, the seasons, the private language between two people—and translate it into something you can return to. Time made tangible.",
    cta: "Create your anniversary scent",
    tag: "A",
    accent: "neutral",
    textColor: "black",
  },
  {
    id: "private-label",
    image: "/broken-gift/private.jpg",
    alt: "Private Label",
    bg: "#0D1117",
    eyebrow: "Private Label",
    title: "Signature Without Compromise",
    body: "For the few who want everything bespoke. Your exclusive formula, your vessel, your story—from sourcing the raw materials to bottling the final accord. Perfumery as portraiture.",
    cta: "Begin your private commission",
    tag: "P",
    accent: "zinc",
    textColor: "white",
  },
  {
    id: "seasonal",
    image: "/broken-gift/seasonal.jpg",
    alt: "Seasonal Collection",
    bg: "#3B2A1A",
    eyebrow: "Seasonal",
    title: "Ephemeral by Design",
    body: "Each season rewrites the air. Our rotating collections chase those fleeting windows—petrichor after summer rain, woodsmoke threading through October evenings, the mineral cold of January mornings. Available only while they last.",
    cta: "Explore the current season",
    tag: "S",
    accent: "orange",
    textColor: "white",
  },
];

export default function BrokenGift() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const textsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Init Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync Lenis with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      sectionsRef.current.forEach((section, i) => {
        if (!section) return;

        const img = imagesRef.current[i];
        const text = textsRef.current[i];

        // Parallax on the image — moves slower than the scroll
        if (img) {
          gsap.fromTo(
            img,
            { yPercent: -12 },
            {
              yPercent: 12,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }

        // Text reveal: fade + slight upward drift on enter
        if (text) {
          gsap.fromTo(
            text.children,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 72%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Section scale-in on enter
        gsap.fromTo(
          section.querySelector(".card-inner"),
          { scale: 0.97, borderRadius: "32px" },
          {
            scale: 1,
            borderRadius: "16px",
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 30%",
              scrub: 0.6,
            },
          }
        );
      });
    }, containerRef);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-white">
      {sections.map((section, i) => (
        <section
          key={section.id}
          ref={(el) => { sectionsRef.current[i] = el; }}
          className="sticky top-0 flex min-h-screen items-center py-8 md:py-10"
        >
          <div className="w-full px-4 md:px-16">
            <div
              className="card-inner relative min-h-[650px] md:h-[722px] overflow-hidden rounded-2xl"
              style={{ backgroundColor: section.bg }}
            >
              {/* Parallax image wrapper */}
              <div
                ref={(el) => { imagesRef.current[i] = el; }}
                className="absolute inset-0 z-0 will-change-transform"
                style={{ top: "-15%", bottom: "-15%", position: "absolute", width: "100%" }}
              >
                <Image
                  src={section.image}
                  alt={section.alt}
                  fill
                  className="object-cover"
                  priority={i === 0}
                  onError={() => { }} // graceful fallback if image missing
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      section.textColor === "white"
                        ? "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)"
                        : "linear-gradient(to right, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)",
                  }}
                />
              </div>

              {/* Text content */}
              <div
                ref={(el) => { textsRef.current[i] = el; }}
                className="relative z-10 flex h-full max-w-[560px] flex-col justify-end md:justify-start gap-6 md:gap-8 p-6 sm:p-10 md:p-16 md:pt-[200px]"
              >
                {/* Eyebrow */}
                <span
                  className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: section.textColor === "white" ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.5)" }}
                >
                  {section.eyebrow}
                </span>

                {/* Title */}
                <h2
                  className="text-3xl md:text-5xl font-normal uppercase leading-tight"
                  style={{
                    color: section.textColor === "white" ? "#fff" : "#111",
                    fontFamily: "'Georgia', serif",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {section.title}
                </h2>

                {/* Body */}
                <p
                  className="text-sm md:text-base font-normal leading-relaxed max-w-[420px]"
                  style={{ color: section.textColor === "white" ? "rgba(255,255,255,0.85)" : "rgba(0,0,0,0.7)" }}
                >
                  {section.body}
                </p>

                {/* CTA row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 sm:gap-2">
                  <div
                    className="flex size-10 md:size-12 shrink-0 items-center justify-center rounded-full text-[18px] md:text-[20px] font-bold"
                    style={{
                      backgroundColor: section.textColor === "white" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.12)",
                      color: section.textColor === "white" ? "#fff" : "#111",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {section.tag}
                  </div>

                  <div className="flex w-full sm:w-80 flex-col gap-2">
                    <span
                      className="text-[10px] md:text-xs font-normal uppercase tracking-wider"
                      style={{ color: section.textColor === "white" ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.5)" }}
                    >
                      {section.cta}
                    </span>
                    <div className="relative h-12 w-full group">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="absolute inset-0 h-full w-full rounded-sm px-4 pr-12 text-sm outline-none transition-colors"
                        style={{
                          border: section.textColor === "white" ? "1px solid rgba(255,255,255,0.3)" : "1px solid rgba(0,0,0,0.2)",
                          backgroundColor: section.textColor === "white" ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.5)",
                          backdropFilter: "blur(8px)",
                          color: section.textColor === "white" ? "#fff" : "#111",
                        }}
                      />
                      <button
                        type="button"
                        className="absolute right-4 top-1/2 -translate-y-1/2 transition-transform hover:translate-x-1"
                        aria-label="Submit"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={section.textColor === "white" ? "white" : "#111"} strokeWidth="2">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}