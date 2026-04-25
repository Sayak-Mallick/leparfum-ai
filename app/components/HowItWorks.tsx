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
        const imgX = step.imageLeft ? -60 : 60;
        const txtX = step.imageLeft ? 60 : -60;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: imgEl,
            start: 'top 78%',
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
          { scaleX: 0, transformOrigin: step.imageLeft ? 'right center' : 'left center', duration: 0.35, ease: 'power2.out' },
          '<0.1'
        );
        tl.from(
          imgEl,
          { autoAlpha: 0, x: imgX, duration: 0.75, ease: 'power3.out' },
          '<0.05'
        );
        tl.from(
          textEl,
          { autoAlpha: 0, x: txtX, duration: 0.75, ease: 'power3.out' },
          '<0.1'
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-32">
      <h2 ref={headingRef} className="mb-24 text-center text-5xl font-normal uppercase leading-tight text-black">
        How it works
      </h2>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-px">
          <div className="h-full bg-[#B8B8B8]" />
          <div
            ref={lineFillRef}
            className="absolute inset-x-0 top-0 bg-black"
            style={{ height: '0%' }}
          />
        </div>
        <div className="relative mb-32 flex items-center">
          <div
            ref={(el) => { hLineRefs.current[0] = el; }}
            className="absolute left-[calc(50%-4rem)] top-1/2 z-0 h-px w-16 -translate-y-1/2 bg-black"
          />
          <div
            ref={(el) => { dotRefs.current[0] = el; }}
            className="absolute left-1/2 top-1/2 z-10 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black bg-white"
          >
            <span className="block size-5 rounded-full bg-black" />
          </div>
          <div ref={(el) => { imageRefs.current[0] = el; }} className="w-1/2 pr-16 pl-16">
            <div className="relative w-full max-h-[671px] h-[671px] overflow-hidden rounded-r-lg">
              <Image src="/how-it-works/tap-swipe-dream.png" alt="Step 1 — invitation" fill className="object-cover" />
            </div>
          </div>
          <div ref={(el) => { textRefs.current[0] = el; }} className="flex w-1/2 max-w-2xl flex-col gap-8 pl-20 pr-32">
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-normal uppercase text-black">01</span>
              <h3 className="text-3xl font-normal uppercase leading-10 text-black">Tap, Swipe, Dream</h3>
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

        <div className="relative mb-32 flex flex-row-reverse items-center">
          <div
            ref={(el) => { hLineRefs.current[1] = el; }}
            className="absolute left-1/2 top-1/2 z-0 h-px w-16 -translate-y-1/2 bg-black"
          />
          <div
            ref={(el) => { dotRefs.current[1] = el; }}
            className="absolute left-1/2 top-1/2 z-10 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black bg-white"
          >
            <span className="block size-5 rounded-full bg-black" />
          </div>

          <div ref={(el) => { imageRefs.current[1] = el; }} className="w-1/2 pl-16">
            <div className="relative max-h-[671px] h-[671px] w-full overflow-hidden rounded-l-lg">
              <Image src="/how-it-works/5-min-ai-creation.png" alt="Step 2 — AI creation" fill className="object-cover" />
            </div>
          </div>
          <div ref={(el) => { textRefs.current[1] = el; }} className="flex w-1/2 max-w-2xl flex-col gap-8 pl-32 pr-20">
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-normal uppercase text-black">02</span>
              <h3 className="text-3xl font-normal uppercase leading-10 text-black">Five‑minute AI creation</h3>
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

        <div className="relative flex items-center">
          <div
            ref={(el) => { hLineRefs.current[2] = el; }}
            className="absolute left-[calc(50%-4rem)] top-1/2 z-0 h-px w-16 -translate-y-1/2 bg-black"
          />
          <div
            ref={(el) => { dotRefs.current[2] = el; }}
            className="absolute left-1/2 top-1/2 z-10 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black bg-white"
          >
            <span className="block size-5 rounded-full bg-black" />
          </div>

          <div ref={(el) => { imageRefs.current[2] = el; }} className="w-1/2 pr-16 pl-16">
            <div className="relative max-h-[671px] h-[671px] w-full overflow-hidden rounded-r-lg">
              <Image src="/how-it-works/bottle-awaits-on-big-day.png" alt="Step 3 — delivery" fill className="object-cover" />
            </div>
          </div>
          <div ref={(el) => { textRefs.current[2] = el; }} className="flex w-1/2 max-w-2xl flex-col gap-8 pl-20 pr-32">
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-normal uppercase text-black">03</span>
              <h3 className="text-3xl font-normal uppercase leading-10 text-black">Bottles await on the big day</h3>
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
      </div>
    </section>
  );
}