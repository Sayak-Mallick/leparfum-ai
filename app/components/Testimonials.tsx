"use client";

import { useRef, useState } from 'react';
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

  const CARD_WIDTH = 580;
  const GAP = 64;
  const ITEM_WIDTH = CARD_WIDTH + GAP;

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const newSlide = Math.round(scrollLeft / ITEM_WIDTH);
      if (newSlide !== currentSlide && newSlide < testimonials.length) {
        setCurrentSlide(newSlide);
      }
    }
  };

  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * ITEM_WIDTH,
        behavior: 'smooth'
      });
    }
  };

  const nextSlide = () => {
    if (currentSlide < testimonials.length - 1) {
      scrollToSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      scrollToSlide(currentSlide - 1);
    }
  };

  return (
    <section className="relative h-[705px] overflow-hidden bg-black">
      <h2 className="absolute top-32 w-full text-center text-4xl font-normal uppercase leading-10 text-white">
        Don&apos;t take our word for it
      </h2>

      {/* Edge gradients */}
      <div className="pointer-events-none absolute left-0 top-[247px] z-10 h-60 w-80 bg-linear-to-r from-black to-transparent"></div>
      <div className="pointer-events-none absolute right-0 bottom-0 z-10 h-60 w-80 bg-linear-to-l from-black to-transparent"></div>

      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className="absolute top-[239px] left-0 right-0 flex gap-16 overflow-x-auto px-16 no-scrollbar snap-x snap-mandatory scroll-pl-16"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {testimonials.map((t, i) => (
          <article key={i} className="relative w-[580px] shrink-0 flex flex-col gap-6 snap-start">
            {i !== testimonials.length - 3 && (
              <div className="absolute top-1/2 -right-8 h-[249px] w-px -translate-y-1/2">
                <Image src="/t-divider.svg" alt="" fill className="object-cover" />
              </div>
            )}
            <div className="relative h-14 w-16 mb-2 shrink-0">
              <Image src="/quotes.svg" alt="Quote" fill className="object-contain" />
            </div>
            <blockquote className="text-lg font-normal uppercase leading-5 text-white">
              &quot;{t.quote}&quot;
            </blockquote>
            <footer className="flex flex-col gap-1">
              <cite className="text-base font-normal not-italic text-white">
                {t.author}
              </cite>
              <span className="text-xs font-normal leading-4 text-white">
                {t.role}
              </span>
            </footer>
          </article>
        ))}
        <div className="w-[calc(100vw-644px)] shrink-0" aria-hidden="true" />
      </div>

      <div className="absolute bottom-16 left-32 right-32 flex items-center justify-between">
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`size-2 rounded-full transition-colors ${currentSlide === i ? "bg-white" : "bg-white/20 hover:bg-white/40"
                }`}
            />
          ))}
        </div>

        <div className="flex gap-8">
          <button
            onClick={prevSlide}
            aria-label="Previous"
            disabled={currentSlide === 0}
            className="flex h-10 w-10 rotate-180 items-center justify-center rounded-full border border-white/30 transition-opacity hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3L3.07692 3" stroke="white" />
              <path d="M3.86523 1.68457L3.86523 4.31543L1.52832 3L3.86523 1.68457Z" fill="white" stroke="white" stroke-width="1.5" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next"
            disabled={currentSlide === testimonials.length - 1}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition-opacity hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-30"
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