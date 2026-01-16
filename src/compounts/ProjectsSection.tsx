import { useRef } from "react";
import { projects } from "../data/projectsData";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProjectsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = 350;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative px-6 md:px-12 py-16 bg-black text-white">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Featured Projects
      </h2>

      {/* Left Arrow (Desktop only) */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10
                   bg-black/70 hover:bg-black p-2 rounded-full"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right Arrow (Desktop only) */}
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10
                   bg-black/70 hover:bg-black p-2 rounded-full"
      >
        <ChevronRight size={28} />
      </button>

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth
                   scrollbar-hide touch-pan-x"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="min-w-[280px] md:min-w-[320px]
                       bg-zinc-900 rounded-lg overflow-hidden
                       hover:scale-105 transition-transform duration-300"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-44 object-cover"
            />

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-zinc-400 line-clamp-3">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm text-red-500 hover:underline"
              >
                {project.linkText} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
