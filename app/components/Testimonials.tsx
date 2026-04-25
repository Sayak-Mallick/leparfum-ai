"use client";

import { useRef, useState } from 'react';
import Image from 'next/image';

const testimonials = Array(6).fill({
  quote: "Our guests still talk about it. Each one left with something beautiful, personal and completely unforgettable. It was the perfect way to share a piece of our day — and ourselves — with everyone we love.",
  author: "John Doe",
  role: "VP of Employee Experience"
});

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const itemWidth = 580 + 64;
      const newSlide = Math.round(scrollLeft / itemWidth);
      setCurrentSlide(newSlide);
    }
  };

  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      const itemWidth = 580 + 64;
      sliderRef.current.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth'
      });
      setCurrentSlide(index);
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

      {/* Testimonial scroll area */}
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className="absolute top-[239px] left-0 right-0 flex gap-16 overflow-x-auto px-16 no-scrollbar snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {testimonials.map((t, i) => (
          <article key={i} className="relative w-[580px] shrink-0 flex flex-col gap-6 snap-center">
            {i !== testimonials.length - 1 && (
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
      </div>

      {/* Controls bar */}
      <div className="absolute bottom-16 left-32 right-32 flex items-center justify-between">
        {/* Dots */}
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
        {/* Arrows */}
        <div className="flex gap-8">
          <button
            onClick={prevSlide}
            aria-label="Previous"
            disabled={currentSlide === 0}
            className="arrow-btn flex h-10 w-10 rotate-180 items-center justify-center rounded-full border border-white/30 transition-opacity hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3L3.0769 3" stroke="white" />
              <path d="M3.8652 1.68457L3.8652 4.31543L1.5283 3L3.8652 1.68457Z" fill="white" stroke="white" stroke-width="1.5" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next"
            disabled={currentSlide === testimonials.length - 1}
            className="arrow-btn flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition-opacity hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 3L16.9231 3" stroke="white" />
              <path d="M16.1348 4.31543L16.1348 1.68457L18.4717 3L16.1348 4.31543Z" fill="white" stroke="white" stroke-width="1.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
