"use client";

import Image from 'next/image';

const BOTTLE_IMAGES = [
  "/bottles/beach-setting.png",
  "/bottles/desert-elixir.png",
  "/bottles/flowery-field.png",
  "/bottles/glittering.png",
  "/bottles/glowing-red.png",
  "/bottles/moody-rainy.png",
  "/bottles/moonlit-night.png",
  "/bottles/tropical-jungle.png",
  "/bottles/warm-bottle.png",
];

const NUM_BOTTLES = 12;
const ORBIT_RADIUS = 450;

export default function BottleOrbit() {
  return (
    <section className="relative h-screen overflow-hidden bg-white">
      <div
        className="absolute inset-0 z-0 animate-spin"
        style={{ animationDuration: '60s', animationTimingFunction: 'linear' }}
      >
        {Array.from({ length: NUM_BOTTLES }).map((_, idx) => {
          const angle = (idx * 360) / NUM_BOTTLES;
          return (
            <div
              key={idx}
              className="absolute top-1/2 left-1/2 w-28 h-40"
              style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${ORBIT_RADIUS}px)`
              }}
            >
              <Image
                width={100}
                height={100}
                src={BOTTLE_IMAGES[idx % BOTTLE_IMAGES.length]}
                alt=""
                aria-hidden="true"
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
          );
        })}
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-12 pointer-events-none">
        <div className="flex max-w-[497px] flex-col items-center gap-8 text-center pointer-events-auto">
          <h2 className="text-4xl font-normal uppercase leading-10 text-black">
            Uniquely Bottled
          </h2>
          <p className="text-base font-normal leading-5 text-black">
            Every guest and recipient experiences moments differently. We
            transform these unique perspectives into individual
            fragrances—creating a diverse collection of scents as distinctive as
            the people themselves, each crafted with exceptional care.
          </p>
        </div>
        <div className="flex items-end gap-2 pointer-events-auto">
          <div className="size-12 shrink-0 rounded-full bg-stone-300 overflow-hidden">
            <div
              className="flex size-10 md:size-12 shrink-0 items-center justify-center rounded-full text-[18px] md:text-[20px] font-bold"
              style={{
                backgroundColor: "rgba(0,0,0,0.12)",
                color: "#111",
                backdropFilter: "blur(8px)",
              }}
            >
              E
            </div>
          </div>
          <div className="flex w-80 flex-col gap-1">
            <span className="text-xs font-normal uppercase leading-3 text-grey-dark">
              How can you elevate your big day?
            </span>
            <div className="relative h-12">
              <input
                type="text"
                className="absolute inset-0 w-full h-full rounded-sm border border-ui-grey bg-transparent px-4 focus:outline-none text-black"
                placeholder=""
              />
              <button aria-label="Submit" className="absolute right-4 top-1/2 -translate-y-1/2">
                <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 3L16.9231 3" stroke="black" />
                  <path d="M16.1348 4.31543L16.1348 1.68457L18.4717 3L16.1348 4.31543Z" fill="black" stroke="black" strokeWidth="1.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
