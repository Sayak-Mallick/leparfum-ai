'use client';

import { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const cardsData = [
  {
    id: 'weddings',
    title: 'Weddings',
    text: 'Give your guests something truly memorable. Each person creates a fragrance that captures their experience of your special day—preserving personal moments in a luxurious keepsake.',
    image: '/choose-your-world/wedding.png',
  },
  {
    id: 'corporate',
    title: 'Corporate & Gifting',
    text: 'Elevate your corporate events with customized scent experiences that leave a lasting impression.',
    image: '/choose-your-world/corporate.png',
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    text: 'Create a signature ambiance for your guests that defines the luxury experience at your property.',
    image: '/choose-your-world/hospitality.png',
  },
];

const IMAGE_HEIGHT = 500;
const CONTENT_HEIGHT = 180;
const COLLAPSED_HEIGHT = IMAGE_HEIGHT;
const EXPANDED_HEIGHT = IMAGE_HEIGHT + CONTENT_HEIGHT;

export default function ChooseYourWorld() {
  const cardsRef = useRef<(HTMLElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    gsap.set(cardsRef.current, { width: 448, height: COLLAPSED_HEIGHT });
    gsap.set(contentRefs.current, { autoAlpha: 0, y: 20 });
  }, []);

  const handleMouseEnter = (idx: number) => {
    gsap.to(cardsRef.current, {
      width: (i) => (i === idx ? 718 : 313),
      height: (i) => (i === idx ? EXPANDED_HEIGHT : COLLAPSED_HEIGHT),
      duration: 0.5,
      ease: 'power3.out',
    });

    contentRefs.current.forEach((content, i) => {
      if (i === idx) {
        gsap.to(content, { autoAlpha: 1, y: 0, duration: 0.4, delay: 0.2 });
      } else {
        gsap.to(content, { autoAlpha: 0, y: 20, duration: 0.3 });
      }
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardsRef.current, {
      width: 448,
      height: COLLAPSED_HEIGHT,
      duration: 0.5,
      ease: 'power3.out',
    });

    gsap.to(contentRefs.current, {
      autoAlpha: 0,
      y: 20,
      duration: 0.3,
    });
  };

  return (
    <section className="overflow-hidden bg-stone-100 py-8">
      <div className="mb-12 px-32">
        <h2 className="mb-4 text-4xl font-normal uppercase leading-10 text-black">
          Choose your world
        </h2>
        <p className="text-base leading-5 text-black">
          Which story will you write in scent?
        </p>
      </div>
      <div
        className="flex items-start justify-center gap-4 "
        onMouseLeave={handleMouseLeave}
      >
        {cardsData.map((card, idx) => (
          <article
            key={card.id}
            ref={(el) => {
              if (el) cardsRef.current[idx] = el;
            }}
            onMouseEnter={() => handleMouseEnter(idx)}
            className="relative flex shrink-0 cursor-pointer flex-col overflow-hidden rounded-lg transition-shadow hover:shadow-xl"
            style={{ width: 448, height: COLLAPSED_HEIGHT }}
          >
            <div className="relative shrink-0" style={{ height: IMAGE_HEIGHT }}>
              <Image
                src={card.image}
                alt={card.title}
                fill
                priority
                className="object-cover"
              />
            </div>
            <div
              ref={(el) => {
                if (el) contentRefs.current[idx] = el;
              }}
              className="flex flex-col gap-4 bg-stone-100 p-6"
              style={{ height: CONTENT_HEIGHT }}
            >
              <h3 className="text-2xl uppercase text-black">{card.title}</h3>
              <p className="max-w-xs text-base text-black">{card.text}</p>

              <button
                aria-label={`Explore ${card.title}`}
                className="mt-2 flex h-10 w-10 items-center justify-center rounded-full border border-black text-black transition-opacity hover:opacity-75"
              >
                <svg
                  width="20"
                  height="6"
                  viewBox="0 0 20 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 3L16.9231 3" stroke="currentColor" />
                  <path
                    d="M16.1348 4.31543L16.1348 1.68457L18.4717 3L16.1348 4.31543Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}