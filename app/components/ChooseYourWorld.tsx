'use client';

import React from 'react';
import Image from 'next/image';

export default function ChooseYourWorld() {
  return (
    <section className="overflow-hidden bg-stone-100 py-32">
      {/* Heading */}
      <div className="mb-12 px-32">
        <h2 className="mb-4 text-4xl font-normal uppercase leading-10 text-black">
          Choose your world
        </h2>
        <p className="text-base leading-5 text-black">
          Which story will you write in scent?
        </p>
      </div>

      {/* Cards row */}
      <div className="flex h-[640px] gap-4">
        {/* Weddings (large) */}
        <article className="relative flex w-1/2 shrink-0 flex-col justify-end overflow-hidden rounded-r-lg p-16">
          <Image
            src="https://placehold.co/718x640"
            alt="Weddings"
            fill
            priority
            className="object-cover"
          />

          {/* Gradient overlay */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-white via-white/90 to-transparent" />

          {/* Text */}
          <div className="relative z-10 flex flex-col gap-4">
            <h3 className="text-2xl uppercase text-black">
              Weddings
            </h3>
            <p className="w-80 text-base text-black">
              Give your guests something truly memorable. Each person creates a
              fragrance that captures their experience of your special day—preserving
              personal moments in a luxurious keepsake.
            </p>
          </div>

          {/* Arrow button */}
          <button
            aria-label="Explore Weddings"
            className="absolute bottom-8 right-8 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 text-black transition-opacity hover:opacity-75"
          >
            <svg
              width="20"
              height="6"
              viewBox="0 0 20 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3L16.9231 3" stroke="black" />
              <path
                d="M16.1348 4.31543L16.1348 1.68457L18.4717 3L16.1348 4.31543Z"
                fill="black"
                stroke="black"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </article>

        {/* Smaller cards */}
        <div className="flex flex-1 gap-4 pr-4">
          {/* Corporate */}
          <article className="group relative flex flex-1 cursor-pointer flex-col justify-end overflow-hidden rounded-lg p-8">
            <Image
              src="https://placehold.co/628x730"
              alt="Corporate & Gifting"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/70 to-transparent" />

            <h3 className="relative z-10 text-2xl uppercase text-white">
              Corporate &amp; Gifting
            </h3>
          </article>

          {/* Hospitality */}
          <article className="group relative flex flex-1 cursor-pointer flex-col justify-end overflow-hidden rounded-lg p-8">
            <Image
              src="https://placehold.co/561x652"
              alt="Hospitality"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/70 to-transparent" />

            <h3 className="relative z-10 text-2xl uppercase text-white">
              Hospitality
            </h3>
          </article>
        </div>
      </div>
    </section>
  );
}