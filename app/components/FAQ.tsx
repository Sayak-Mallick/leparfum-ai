"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet consectetur Vitae vitae augue lobortis dictum?",
    answer:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.",
  },
  {
    question:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?",
    answer:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    question: "Neque porro quisquam est, qui dolorem ipsum?",
    answer:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    question:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis?",
    answer:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
  },
  {
    question:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum?",
    answer:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
  },
];

interface FAQItemProps {
  faq: { question: string; answer: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ faq, index, isOpen, onToggle }: FAQItemProps) {
  const answerRef = useRef<HTMLDivElement>(null);
  const iconVRef = useRef<SVGSVGElement>(null);
  const isFirst = useRef(true);

  useEffect(() => {
    const el = answerRef.current;
    const vLine = iconVRef.current;
    if (!el || !vLine) return;

    if (isFirst.current) {
      gsap.set(el, { height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 });
      gsap.set(vLine, { rotation: isOpen ? 0 : 90, opacity: isOpen ? 0 : 1 });
      isFirst.current = false;
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power2.inOut", duration: 0.35 } });

    if (isOpen) {
      gsap.set(el, { height: "auto", opacity: 1 });
      const fullH = el.offsetHeight;
      gsap.set(el, { height: 0, opacity: 0 });

      tl.to(el, { height: fullH, opacity: 1 })
        .to(vLine, { rotation: 0, opacity: 0, duration: 0.25 }, "<");
    } else {
      tl.to(el, { height: 0, opacity: 0 })
        .to(vLine, { rotation: 90, opacity: 1, duration: 0.25 }, "<");
    }

    return () => { tl.kill(); };
  }, [isOpen]);

  const isLast = index === faqs.length - 1;

  return (
    <div
      data-faq-item
      className={`border-t border-ui-grey ${isLast ? "border-b" : ""}`}
    >
      <button
        className="flex w-full items-center justify-between gap-8 py-4 text-left cursor-pointer group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-normal uppercase leading-5 text-black transition-opacity duration-200 group-hover:opacity-60">
          {faq.question}
        </span>
        <span
          className="relative flex shrink-0 items-center justify-center w-12 h-12 rounded-full border border-black/30 transition-colors duration-200 group-hover:border-black"
          aria-hidden="true"
        >
          <svg className="absolute" width="16" height="2" viewBox="0 0 16 2" fill="none">
            <line x1="0" y1="1" x2="16" y2="1" stroke="black" strokeWidth="1.2" />
          </svg>
          <svg ref={iconVRef} className="absolute" width="16" height="2" viewBox="0 0 16 2" fill="none">
            <line x1="0" y1="1" x2="16" y2="1" stroke="black" strokeWidth="1.2" />
          </svg>
        </span>
      </button>

      <div ref={answerRef} className="overflow-hidden" style={{ height: 0, opacity: 0 }}>
        <div className="pb-5 text-base font-normal leading-5 text-grey-dark max-w-[478px]">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 28,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      const rows = itemsRef.current?.querySelectorAll("[data-faq-item]");
      if (rows?.length) {
        gsap.from(rows, {
          y: 20,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.07,
          scrollTrigger: {
            trigger: itemsRef.current,
            start: "top 82%",
            once: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="bg-black py-20">
      <div className="mx-16 overflow-hidden rounded-2xl bg-white">
        <div className="flex gap-16 p-16">
          <div ref={headingRef} className="w-44 shrink-0 pt-2">
            <h2 className="text-4xl font-normal uppercase leading-10 text-black">
              FAQs
            </h2>
          </div>
          <div ref={itemsRef} className="flex flex-1 flex-col">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}