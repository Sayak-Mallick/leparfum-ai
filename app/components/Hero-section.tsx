"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

type Slide = {
  image: string;
  title: string;
  subtitle: string;
  description: string;
};

const SLIDES: Slide[] = [
  {
    image: "/slider/slider-1.png",
    title: "Bottle The Moment",
    subtitle: "Bespoke Scents For Unforgettable Memories",
    description:
      "Expertly crafted fragrances that bring your stories to life, from personal celebrations to corporate gifts",
  },
  {
    image: "/slider/slider-1.png",
    title: "Celebrate Love",
    subtitle: "Fragrances For Weddings",
    description:
      "Create lasting memories with signature scents designed for your special day",
  },
  {
    image: "/slider/slider-1.png",
    title: "Corporate Elegance",
    subtitle: "Premium Gifting Solutions",
    description:
      "Impress clients and teams with refined fragrance experiences",
  },
  {
    image: "/slider/slider-1.png",
    title: "Hospitality Redefined",
    subtitle: "Signature Ambient Scents",
    description:
      "Elevate guest experiences with curated scent branding",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = SLIDES.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activeSlide = useMemo(
    () => SLIDES[currentSlide],
    [currentSlide]
  );

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {SLIDES.map((slide, index) => (
        <Image
          key={index}
          src={slide.image}
          alt={`Slide ${index + 1}`}
          fill
          priority={index === 0}
          className={`absolute inset-0 object-cover object-top transition-opacity duration-1000 ease-in-out ${currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
        />
      ))}
      <div className="absolute inset-x-0 bottom-0 h-96 bg-linear-to-t from-zinc-950/80 to-transparent pointer-events-none" />
      <div className="absolute top-[153px] right-0 w-80 h-40 bg-linear-to-l from-zinc-950/40 to-transparent pointer-events-none hidden md:block" />
      <Navbar />
      <div className="absolute left-6 md:left-[60px] top-1/2 z-10 flex -translate-y-1/2 flex-col gap-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`size-2 rounded-full transition-colors ${currentSlide === index
              ? "bg-white"
              : "bg-white/40 hover:bg-white/60"
              }`}
          />
        ))}
      </div>
      <div className="absolute right-6 md:right-[60px] top-1/2 z-10 flex -translate-y-1/2 flex-col gap-4">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="group flex h-10 w-10 items-center justify-center border border-white/40 bg-black/20 backdrop-blur-sm transition-all hover:bg-white hover:border-white rounded-full"
        >
          <svg width="20" height="6" viewBox="0 0 20 6" fill="none">
            <path
              d="M20 3L3.07692 3"
              className="stroke-white group-hover:stroke-black transition-colors"
            />
            <path
              d="M3.86523 1.68457L3.86523 4.31543L1.52832 3L3.86523 1.68457Z"
              className="fill-white stroke-white stroke-[1.5] group-hover:stroke-black group-hover:fill-black transition-colors"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="group flex h-10 w-10 items-center justify-center border border-white/40 bg-black/20 backdrop-blur-sm transition-all hover:bg-white hover:border-white rounded-full"
        >
          <svg width="20" height="6" viewBox="0 0 20 6" fill="none">
            <path
              d="M0 3L16.9231 3"
              className="stroke-white group-hover:stroke-black transition-colors"
            />
            <path
              d="M16.1348 4.31543L16.1348 1.68457L18.4717 3L16.1348 4.31543Z"
              className="fill-white stroke-white stroke-[1.5] group-hover:stroke-black group-hover:fill-black transition-colors"
            />
          </svg>
        </button>
      </div>
      <div
        key={currentSlide}
        className="absolute bottom-[80px] md:bottom-[120px] left-6 right-6 md:left-32 md:right-32 z-10 flex flex-col gap-6 md:gap-8"
      >
        <div className="flex flex-col gap-2 animate-in slide-in-from-bottom-8 duration-700 fade-in delay-200 fill-mode-both">
          <h1 className="text-3xl md:text-5xl font-normal uppercase leading-tight text-white tracking-wider text-balance drop-shadow-md">
            {activeSlide.title}
          </h1>
          <p className="text-xl md:text-4xl font-normal uppercase leading-tight text-zinc-300 tracking-wide text-balance">
            {activeSlide.subtitle}
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden">
          <p className="max-w-lg text-sm md:text-base font-normal leading-relaxed text-zinc-200 drop-shadow animate-in slide-in-from-left-4 duration-700 fade-in delay-500 fill-mode-both">
            {activeSlide.description}
          </p>
          <Link
            href="#"
            className="group flex items-center gap-3 w-fit animate-in slide-in-from-right-4 duration-700 fade-in delay-500 fill-mode-both"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-white group-hover:text-zinc-300 transition-colors">
              Begin the Journey
            </span>
            <span className="size-1.5 rounded-full bg-white group-hover:bg-zinc-300 transition-colors" />
          </Link>
        </div>
      </div>
    </section>
  );
}