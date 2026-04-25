"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

const IMAGES = [
  "/slider/slider-1.png",
  "/slider/slider-1.png",
  "/slider/slider-1.png",
  "/slider/slider-1.png",
  "/slider/slider-1.png",
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {IMAGES.map((src, index) => (
        <Image
          key={index}
          src={src}
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
        {IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`size-2 rounded-full transition-colors ${currentSlide === index ? "bg-white" : "bg-white/40 hover:bg-white/60"
              }`}
          />
        ))}
      </div>

      {/* Right slide arrows */}
      <div className="absolute right-6 md:right-[60px] top-1/2 z-10 flex -translate-y-1/2 flex-col gap-4">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          /* Added 'group' class here */
          className="group flex h-10 w-10 items-center justify-center border border-white/40 bg-black/20 backdrop-blur-sm transition-all hover:bg-white hover:border-white rounded-full"
        >
          <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 3L3.07692 3" className="stroke-white group-hover:stroke-black transition-colors" />
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
          <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 3L16.9231 3" className="stroke-white group-hover:stroke-black transition-colors" />
            <path
              d="M16.1348 4.31543L16.1348 1.68457L18.4717 3L16.1348 4.31543Z"
              className="fill-white stroke-white stroke-[1.5] group-hover:stroke-black group-hover:fill-black transition-colors"
            />
          </svg>
        </button>
      </div>

      {/* Hero copy */}
      <div className="absolute bottom-[80px] md:bottom-[120px] left-6 right-6 md:left-32 md:right-32 z-10 flex flex-col gap-6 md:gap-8">
        <div className="flex flex-col gap-2 animate-in slide-in-from-bottom-8 duration-700 fade-in delay-200 fill-mode-both">
          <h1 className="text-3xl md:text-5xl font-normal uppercase leading-tight text-white tracking-wider text-balance drop-shadow-md">
            Bottle The Moment
          </h1>
          <p className="text-xl md:text-4xl font-normal uppercase leading-tight text-zinc-300 tracking-wide text-balance">
            Bespoke Scents For Unforgettable Memories
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden">
          <p className="max-w-lg text-sm md:text-base font-normal leading-relaxed text-zinc-200 drop-shadow animate-in slide-in-from-left-4 duration-700 fade-in delay-500 fill-mode-both">
            Expertly crafted fragrances that bring your stories to life, from personal celebrations to corporate gifts
          </p>
          <Link
            href="#"
            className="group flex items-center gap-3 w-fit animate-in slide-in-from-right-4 duration-700 fade-in delay-500 fill-mode-both"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-white group-hover:text-zinc-300 transition-colors">
              Begin the Journey
            </span>
            <span className="size-1.5 rounded-full bg-white group-hover:bg-zinc-300 transition-colors"></span>
          </Link>
        </div>
      </div>
    </section>
  );
}
