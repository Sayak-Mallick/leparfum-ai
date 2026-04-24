import Image from "next/image";

export default function BrokenGift() {
  return (
    <section className="bg-white py-8 md:py-16">
      <div className="px-4 md:px-16">
        <div className="relative min-h-[650px] md:h-[722px] overflow-hidden rounded-2xl bg-[#EBE8E0]">

          <div className="absolute inset-0 z-0">
            <Image
              src="/brokengift.png"
              alt="The Broken Gift"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient overlay for mobile readability */}
            <div className="absolute inset-0 bg-black/20 md:bg-transparent" />
          </div>

          {/* Content - Adjusted padding and alignment for mobile */}
          <div className="relative z-10 flex h-full max-w-[550px] flex-col justify-end md:justify-start gap-6 md:gap-8 p-6 sm:p-10 md:p-16 md:pt-[210px]">
            <h2 className="text-3xl md:text-4xl font-normal uppercase leading-tight text-white">
              The Broken Gift
            </h2>

            <p className="text-sm md:text-base font-normal leading-relaxed text-white">
              Move beyond predictable favors and corporate gifts to something
              genuinely memorable. Each recipient creates a personal fragrance
              that captures their unique experience or relationship—crafted with
              premium ingredients and presented with an elegance that reflects
              the occasion.
            </p>

            {/* Input CTA - Stacked on very small screens, row on larger */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 sm:gap-2">
              <div className="flex size-10 md:size-12 shrink-0 items-center justify-center rounded-full bg-stone-300 text-[18px] md:text-[20px] text-black font-bold">
                E
              </div>

              <div className="flex w-full sm:w-80 flex-col gap-2">
                <span className="text-[10px] md:text-xs font-normal uppercase tracking-wider text-white/80">
                  How can you elevate your big day?
                </span>
                <form className="relative h-12 group w-full">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="absolute inset-0 h-full w-full rounded-sm border border-white/30 bg-black/10 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none px-4 pr-12 text-sm text-white outline-none transition-colors focus:border-white hover:border-white placeholder:text-white/70"
                  />
                  <button
                    type="submit"
                    className="absolute right-4 top-1/2 -translate-y-1/2 transition-transform hover:translate-x-1"
                    aria-label="Submit"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}