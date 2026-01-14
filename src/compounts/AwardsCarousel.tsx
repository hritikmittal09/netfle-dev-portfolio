// src/components/AwardsCarousel.tsx
import { useRef } from "react";
import { awards } from "../data/awardsData"
import type { Award } from "../data/awardsData";

import { ChevronLeft, ChevronRight } from "lucide-react";

const AwardsCarousel: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const scrollAmount = 320;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative px-6 py-12 bg-black">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
        Awards & Certifications
      </h2>

      {/* Left Arrow */}
      <button
        aria-label="Scroll left"
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10
                   bg-black/70 hover:bg-black p-2 rounded-full"
      >
        <ChevronLeft size={28} className="text-white" />
      </button>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-scroll scrollbar-hide scroll-smooth"
      >
        {awards.map((award: Award, index: number) => (
          <div
            key={index}
            className="min-w-[260px] md:min-w-[300px] bg-zinc-900 rounded-xl
                       overflow-hidden transform transition duration-300
                       hover:scale-105 hover:z-20"
          >
            {/* Image */}
            <div className="h-44 bg-zinc-800 flex items-center justify-center">
              <img
                src={award.logo}
                alt={award.title}
                className="h-32 object-contain"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                {award.title}
              </h3>

              <p className="text-sm text-gray-400 line-clamp-3">
                {award.description}
              </p>

              <a
                href={award.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-sm font-medium text-white
                           border border-gray-600 px-4 py-1.5 rounded-full
                           hover:bg-white hover:text-black transition"
              >
                {award.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        aria-label="Scroll right"
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10
                   bg-black/70 hover:bg-black p-2 rounded-full"
      >
        <ChevronRight size={28} className="text-white" />
      </button>
    </section>
  );
};

export default AwardsCarousel;

