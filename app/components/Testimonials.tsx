"use client";

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "Our guests still talk about it. Each one left with something beautiful, personal and completely unforgettable — a piece of our day, captured in scent.",
    author: "Priya Mehta",
    role: "Bride, The Grand Oberoi Wedding"
  },
  {
    quote: "We gifted these at our annual leadership summit and the response was extraordinary. Nothing we've done before came close to this level of personalisation.",
    author: "James Whitfield",
    role: "Chief People Officer, Meridian Group"
  },
  {
    quote: "As a hotel GM, I'm always searching for experiences that genuinely surprise our guests. This did exactly that — and then some.",
    author: "Isabelle Laurent",
    role: "General Manager, Château Lumière Paris"
  },
  {
    quote: "The AI conversation felt surprisingly intimate. By the end, my fragrance told a story I didn't even know I wanted to tell.",
    author: "Marcus Okafor",
    role: "Creative Director, Studio Noma"
  },
  {
    quote: "We used it for a client appreciation evening and three of them called the next day just to say thank you. That never happens.",
    author: "Serena Castillo",
    role: "VP of Client Relations, Apex Ventures"
  },
  {
    quote: "I was sceptical at first. Five minutes later I had a fragrance that somehow smelled exactly like how I feel on my best days.",
    author: "Tom Hargreaves",
    role: "Founder, Atlas Hospitality"
  },
  {
    quote: "The AI conversation felt surprisingly intimate. By the end, my fragrance told a story I didn't even know I wanted to tell.",
    author: "Huge Lucas",
    role: "Founder, Lucas Group"
  },
  {
    quote: "The best part is that it's completely unique to you. No two fragrances are the same.",
    author: "Richard Parker",
    role: "Faculty, Pearl Academy"
  }
];

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemWidth, setItemWidth] = useState(644);

  useEffect(() => {
    const update = () => {
      if (sliderRef.current) {
        const first = sliderRef.current.querySelector('article');
        if (first) setItemWidth(first.getBoundingClientRect().width + (window.innerWidth < 768 ? 24 : 64));
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const newSlide = Math.round(sliderRef.current.scrollLeft / itemWidth);
    if (newSlide !== currentSlide && newSlide < testimonials.length) setCurrentSlide(newSlide);
  };

  const scrollToSlide = (index: number) => {
    sliderRef.current?.scrollTo({ left: index * itemWidth, behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-black py-20 md:h-[705px] md:py-0">
      <h2 className="relative px-6 text-center text-3xl font-normal uppercase leading-tight text-white md:absolute md:top-32 md:w-full md:px-0 md:text-4xl md:leading-10">
        Don&apos;t take our word for it
      </h2>

      <div className="pointer-events-none absolute left-0 top-[247px] z-10 hidden h-60 w-40 bg-linear-to-r from-black to-transparent md:block md:w-80" />
      <div className="pointer-events-none absolute right-0 bottom-0 z-10 hidden h-60 w-40 bg-linear-to-l from-black to-transparent md:block md:w-80" />

      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className="mt-10 flex gap-6 overflow-x-auto px-6 no-scrollbar snap-x snap-mandatory scroll-pl-6 md:absolute md:top-[239px] md:left-0 md:right-0 md:mt-0 md:gap-16 md:px-16 md:scroll-pl-16"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {testimonials.map((t, i) => (
          <article
            key={i}
            className="relative w-[82vw] shrink-0 flex flex-col gap-4 snap-start md:w-[580px] md:gap-6"
          >
            {i !== testimonials.length - 3 && (
              <div className="absolute top-1/2 -right-8 h-[249px] w-px -translate-y-1/2 hidden md:block">
                <Image src="/t-divider.svg" alt="" fill className="object-cover" />
              </div>
            )}
            <div className="relative h-10 w-12 shrink-0 md:mb-2 md:h-14 md:w-16">
              <Image src="/quotes.svg" alt="Quote" fill className="object-contain" />
            </div>
            <blockquote className="text-base font-normal uppercase leading-5 text-white md:text-lg">
              &quot;{t.quote}&quot;
            </blockquote>
            <footer className="flex flex-col gap-1">
              <cite className="text-sm font-normal not-italic text-white md:text-base">
                {t.author}
              </cite>
              <span className="text-xs font-normal leading-4 text-white/70 md:text-white">
                {t.role}
              </span>
            </footer>
          </article>
        ))}
        <div className="w-6 shrink-0 md:w-[calc(100vw-644px)]" aria-hidden="true" />
      </div>

      <div className="relative mt-8 flex items-center justify-between px-6 md:absolute md:bottom-16 md:left-32 md:right-32 md:mt-0 md:px-0">
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`size-2 rounded-full transition-colors ${currentSlide === i ? 'bg-white' : 'bg-white/20 hover:bg-white/40'
                }`}
            />
          ))}
        </div>

        <div className="flex gap-4 md:gap-8">
          <button
            onClick={() => scrollToSlide(currentSlide - 1)}
            aria-label="Previous"
            disabled={currentSlide === 0}
            className="flex h-9 w-9 rotate-180 items-center justify-center rounded-full border border-white/30 transition-opacity hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-30 md:h-10 md:w-10"
          >
            <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3L3.07692 3" stroke="white" />
              <path d="M3.86523 1.68457L3.86523 4.31543L1.52832 3L3.86523 1.68457Z" fill="white" stroke="white" strokeWidth="1.5" />
            </svg>
          </button>
          <button
            onClick={() => scrollToSlide(currentSlide + 1)}
            aria-label="Next"
            disabled={currentSlide === testimonials.length - 1}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 transition-opacity hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-30 md:h-10 md:w-10"
          >
            <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 3L16.9231 3" stroke="white" />
              <path d="M16.1348 4.31543L16.1348 1.68457L18.4717 3L16.1348 4.31543Z" fill="white" stroke="white" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}