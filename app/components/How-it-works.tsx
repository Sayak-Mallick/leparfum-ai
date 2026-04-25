'use client';

import { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: '01',
    title: 'Tap, Swipe, Dream',
    img: '/how-it-works/tap-swipe-dream.png',
    alt: 'Step 1 — invitation',
    imageLeft: true,
  },
  {
    num: '02',
    title: 'Five‑minute AI creation',
    img: '/how-it-works/5-min-ai-creation.png',
    alt: 'Step 2 — AI creation',
    imageLeft: false,
  },
  {
    num: '03',
    title: 'Bottles await on the big day',
    img: '/how-it-works/bottle-awaits-on-big-day.png',
    alt: 'Step 3 — delivery',
    imageLeft: true,
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineFillRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hLineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        autoAlpha: 0,
        y: 40,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
        },
      });

      gsap.fromTo(
        lineFillRef.current,
        { height: '0%' },
        {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'bottom 60%',
            scrub: 0.6,
          },
        }
      );

      steps.forEach((step, i) => {
        const imgEl = imageRefs.current[i];
        const textEl = textRefs.current[i];
        const dotEl = dotRefs.current[i];
        const hLineEl = hLineRefs.current[i];

        const isMobile = window.innerWidth < 768;
        const imgX = isMobile ? 0 : step.imageLeft ? -60 : 60;
        const txtX = isMobile ? 0 : step.imageLeft ? 60 : -60;
        const imgY = isMobile ? 40 : 0;
        const txtY = isMobile ? 30 : 0;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: imgEl,
            start: 'top 82%',
          },
        });

        tl.from(dotEl, {
          scale: 0,
          autoAlpha: 0,
          duration: 0.4,
          ease: 'back.out(2)',
        });

        tl.from(
          hLineEl,
          {
            scaleX: 0,
            transformOrigin: isMobile
              ? 'center center'
              : step.imageLeft
                ? 'right center'
                : 'left center',
            duration: 0.35,
            ease: 'power2.out',
          },
          '<0.1'
        );

        tl.from(
          imgEl,
          { autoAlpha: 0, x: imgX, y: imgY, duration: 0.75, ease: 'power3.out' },
          '<0.05'
        );
        tl.from(
          textEl,
          { autoAlpha: 0, x: txtX, y: txtY, duration: 0.75, ease: 'power3.out' },
          '<0.1'
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-20 md:py-32">
      <h2
        ref={headingRef}
        className="mb-16 px-6 text-center text-4xl font-normal uppercase leading-tight text-black md:mb-24 md:text-5xl"
      >
        How it works
      </h2>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-6 w-px md:left-1/2 md:-translate-x-1/2">
          <div className="h-full bg-[#B8B8B8]" />
          <div
            ref={lineFillRef}
            className="absolute inset-x-0 top-0 bg-black"
            style={{ height: '0%' }}
          />
        </div>

        {steps.map((step, i) => {
          const isLast = i === steps.length - 1;
          const isReversed = !step.imageLeft;

          return (
            <div
              key={step.num}
              className={`relative ${isLast ? '' : 'mb-20 md:mb-32'} flex flex-col md:flex-row md:items-center ${isReversed ? 'md:flex-row-reverse' : ''
                }`}
            >
              <div
                ref={(el) => { hLineRefs.current[i] = el; }}
                className={`absolute top-6 z-0 h-px w-10 bg-black md:top-1/2 md:w-16 md:-translate-y-1/2 ${isReversed
                    ? 'left-6 md:left-1/2'
                    : 'left-6 md:left-[calc(50%-4rem)]'
                  }`}
              />

              <div
                ref={(el) => { dotRefs.current[i] = el; }}
                className="absolute left-6 top-6 z-10 flex size-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black bg-white md:left-1/2 md:top-1/2 md:size-8"
              >
                <span className="block size-3 rounded-full bg-black md:size-5" />
              </div>

              <div
                ref={(el) => { imageRefs.current[i] = el; }}
                className={`w-full pl-14 pr-4 pt-0 md:w-1/2 md:pt-0 ${isReversed
                    ? 'md:pl-16 md:pr-0'
                    : 'md:pl-16 md:pr-16'
                  }`}
              >
                <div className="relative h-64 w-full overflow-hidden rounded-lg sm:h-80 md:h-[671px] md:max-h-[671px] md:rounded-r-lg md:rounded-l-none">
                  {isReversed && (
                    <div className="absolute inset-0 hidden md:block" style={{ borderRadius: '0.5rem 0 0 0.5rem' }} />
                  )}
                  <Image
                    src={step.img}
                    alt={step.alt}
                    fill
                    className={`object-cover ${isReversed ? 'md:rounded-l-lg md:rounded-r-none' : 'md:rounded-r-lg md:rounded-l-none'}`}
                  />
                </div>
              </div>

              <div
                ref={(el) => { textRefs.current[i] = el; }}
                className={`flex w-full flex-col gap-5 pl-14 pr-4 pt-6 md:w-1/2 md:max-w-2xl md:gap-8 md:pt-0 ${isReversed
                    ? 'md:pl-32 md:pr-20'
                    : 'md:pl-20 md:pr-32'
                  }`}
              >
                <div className="flex flex-col gap-1 md:gap-2">
                  <span className="text-lg font-normal uppercase text-black md:text-2xl">
                    {step.num}
                  </span>
                  <h3 className="text-2xl font-normal uppercase leading-tight text-black md:text-3xl md:leading-10">
                    {step.title}
                  </h3>
                </div>
                <div className="flex flex-col gap-3 md:gap-4">
                  <p className="text-sm font-normal leading-relaxed text-black md:text-base md:leading-5">
                    It begins with digital invitations sent to your event guests or team members.
                    Each recipient engages with our AI through natural conversation—sharing their
                    unique perspective or meaningful connection.
                  </p>
                  <p className="text-xs font-normal leading-relaxed text-grey-dark md:leading-4">
                    Our technology transforms these insights into personalized fragrance profiles,
                    which master perfumers bring to life using premium ingredients. The finished
                    scents arrive in elegant packaging customizable for your event or
                    brand—creating a sophisticated keepsake that&apos;s genuinely personal.
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}