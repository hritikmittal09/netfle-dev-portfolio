import { useRef } from "react";
import { skillsData } from "../data/skills";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Skills = () => {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!rowRef.current) return;
    const width = rowRef.current.clientWidth;

    rowRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative px-6 py-10 group">
      <h2 className="text-white text-xl md:text-2xl font-semibold mb-4">
        Skills & Technologies
      </h2>

      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 z-20 hidden group-hover:flex
                   -translate-y-1/2 h-12 w-12 items-center justify-center
                   rounded-full bg-black/60 text-white hover:bg-black"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 z-20 hidden group-hover:flex
                   -translate-y-1/2 h-12 w-12 items-center justify-center
                   rounded-full bg-black/60 text-white hover:bg-black"
      >
        <ChevronRight size={28} />
      </button>

      {/* Carousel */}
      <div
        ref={rowRef}
        className="flex space-x-4 overflow-x-scroll scrollbar-hide"
      >
        {skillsData.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.id}
              className="min-w-[200px] cursor-pointer bg-zinc-900 rounded-md p-5
                         transition duration-300 transform
                         hover:scale-110 hover:z-10 hover:bg-zinc-800"
            >
              {/* ICON (IMAGE REPLACEMENT) */}
              <Icon className="text-red-600 text-4xl mb-3" />

              <h3 className="text-white text-lg font-medium">
                {skill.name}
              </h3>
              <p className="text-sm text-gray-400">
                
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
