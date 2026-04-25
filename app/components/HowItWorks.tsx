import React from 'react';
import Image from 'next/image';

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-white py-32">
      <h2 className="mb-24 text-center text-5xl font-normal uppercase leading-tight text-black">
        How it works
      </h2>

      {/* Vertical center line */}
      <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-px">
        <div className="h-full bg-[#B8B8B8]"></div>
      </div>

      {/* Step 01 — image left, text right */}
      <div className="relative mb-32 flex items-center">
        {/* Horizontal connecting line */}
        <div className="absolute left-[calc(50%-4rem)] top-1/2 z-0 h-px w-16 -translate-y-1/2 bg-black"></div>

        {/* Roadmap Dot */}
        <div className="absolute left-1/2 top-1/2 z-10 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black bg-white">
          <span className="block size-5 rounded-full bg-black"></span>
        </div>
        
        <div className="w-1/2 pr-16">
          <div className="relative w-full max-h-[671px] h-[671px] overflow-hidden rounded-r-lg">
            <Image
              src="/how-it-works/tap-swipe-dream.png"
              alt="Step 1 — invitation"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex w-1/2 max-w-2xl flex-col gap-8 pl-20 pr-32">
          <div className="flex flex-col gap-2">
            <span className="text-2xl font-normal uppercase text-black">01</span>
            <h3 className="text-3xl font-normal uppercase leading-10 text-black">
              Tap, Swipe, Dream
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-base font-normal leading-5 text-black">
              It begins with digital invitations sent to your event guests or team members.
              Each recipient engages with our AI through natural conversation—sharing their
              unique perspective or meaningful connection.
            </p>
            <p className="text-xs font-normal leading-4 text-grey-dark">
              Our technology transforms these insights into personalized fragrance profiles,
              which master perfumers bring to life using premium ingredients. The finished
              scents arrive in elegant packaging customizable for your event or
              brand—creating a sophisticated keepsake that&apos;s genuinely personal.
            </p>
          </div>
        </div>
      </div>

      {/* Step 02 — text left, image right */}
      <div className="relative mb-32 flex flex-row-reverse items-center">
        {/* Horizontal connecting line */}
        <div className="absolute left-1/2 top-1/2 z-0 h-px w-16 -translate-y-1/2 bg-black"></div>

        {/* Roadmap Dot */}
        <div className="absolute left-1/2 top-1/2 z-10 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black bg-white">
          <span className="block size-5 rounded-full bg-black"></span>
        </div>

        <div className="w-1/2 pl-16">
          <div className="relative h-[671px] w-full overflow-hidden rounded-l-lg">
            <Image
              src="/how-it-works/5-min-ai-creation.png"
              alt="Step 2 — AI creation"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex w-1/2 max-w-2xl flex-col gap-8 pl-32 pr-20">
          <div className="flex flex-col gap-2">
            <span className="text-2xl font-normal uppercase text-black">02</span>
            <h3 className="text-3xl font-normal uppercase leading-10 text-black">
              Five‑minute AI creation
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-base font-normal leading-5 text-black">
              It begins with digital invitations sent to your event guests or team members.
              Each recipient engages with our AI through natural conversation—sharing their
              unique perspective or meaningful connection.
            </p>
            <p className="text-xs font-normal leading-4 text-grey-dark">
              Our technology transforms these insights into personalized fragrance profiles,
              which master perfumers bring to life using premium ingredients. The finished
              scents arrive in elegant packaging customizable for your event or
              brand—creating a sophisticated keepsake that&apos;s genuinely personal.
            </p>
          </div>
        </div>
      </div>

      {/* Step 03 — image left, text right */}
      <div className="relative flex items-center">
        {/* Horizontal connecting line */}
        <div className="absolute left-[calc(50%-4rem)] top-1/2 z-0 h-px w-16 -translate-y-1/2 bg-black"></div>

        {/* Roadmap Dot */}
        <div className="absolute left-1/2 top-1/2 z-10 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black bg-white">
          <span className="block size-5 rounded-full bg-black"></span>
        </div>

        <div className="w-1/2 pr-16">
          <div className="relative h-[671px] w-full overflow-hidden rounded-r-lg">
            <Image
              src="/how-it-works/bottle-awaits-on-big-day.png"
              alt="Step 3 — delivery"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex w-1/2 max-w-2xl flex-col gap-8 pl-20 pr-32">
          <div className="flex flex-col gap-2">
            <span className="text-2xl font-normal uppercase text-black">03</span>
            <h3 className="text-3xl font-normal uppercase leading-10 text-black">
              Bottles await on the big day
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-base font-normal leading-5 text-black">
              It begins with digital invitations sent to your event guests or team members.
              Each recipient engages with our AI through natural conversation—sharing their
              unique perspective or meaningful connection.
            </p>
            <p className="text-xs font-normal leading-4 text-grey-dark">
              Our technology transforms these insights into personalized fragrance profiles,
              which master perfumers bring to life using premium ingredients. The finished
              scents arrive in elegant packaging customizable for your event or
              brand—creating a sophisticated keepsake that&apos;s genuinely personal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
