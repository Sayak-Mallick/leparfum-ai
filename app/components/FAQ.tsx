"use client";

import React, { useState } from 'react';

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet consectetur Vitae vitae augue lobortis dictum?",
    answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt."
  },
  {
    question: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?",
    answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
  },
  {
    question: "Neque porro quisquam est, qui dolorem ipsum?",
    answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis?",
    answer: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
  },
  {
    question: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum?",
    answer: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-20">
      <div className="mx-16 overflow-hidden rounded-2xl bg-white">
        <div className="flex gap-16 p-16">
          {/* Label */}
          <div className="w-44 shrink-0 pt-2">
            <h2 className="text-4xl font-normal uppercase leading-10 text-black">
              FAQs
            </h2>
          </div>

          {/* Accordion */}
          <div className="flex flex-1 flex-col" id="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border-t border-ui-grey ${
                  index === faqs.length - 1 ? "border-b" : ""
                }`}
              >
                <button
                  className="flex w-full items-center justify-between gap-8 py-4 text-left cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg font-normal uppercase leading-5 text-black">
                    {faq.question}
                  </span>
                  <span
                    className="arrow-btn shrink-0 relative flex items-center justify-center w-8 h-8 rounded-full border-[0.5px] border-black"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute"
                      width="16"
                      height="2"
                      viewBox="0 0 16 2"
                      fill="none"
                    >
                      <line
                        x1="0"
                        y1="1"
                        x2="16"
                        y2="1"
                        stroke="black"
                        strokeWidth="1.2"
                      />
                    </svg>
                    <svg
                      className={`faq-icon-v absolute transition-transform duration-300 ease-in-out ${
                        openIndex === index ? "rotate-0 opacity-0" : "rotate-90 opacity-100"
                      }`}
                      width="16"
                      height="2"
                      viewBox="0 0 16 2"
                      fill="none"
                    >
                      <line
                        x1="0"
                        y1="1"
                        x2="16"
                        y2="1"
                        stroke="black"
                        strokeWidth="1.2"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`faq-answer overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0 pb-0"
                  }`}
                >
                  <div className="text-base font-normal leading-5 text-grey-dark max-w-[478px]">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
