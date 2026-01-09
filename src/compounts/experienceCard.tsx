import { motion } from "framer-motion";

export interface Experience {
  company: string;
  logo: string;
  position: string;
  duration: string;
  description: string;
  link: string;
  linkText: string;
}

interface ExperienceCardProps {
  exp: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative bg-zinc-900 rounded-xl overflow-hidden shadow-xl cursor-pointer group"
    >
      {/* Image */}
      <img
        src={exp.logo}
        alt={exp.company}
        className="h-48 w-full object-cover"
      />

      {/* Overlay */}
      <div
        className="
          absolute inset-0 
          bg-gradient-to-t from-black/90 via-black/70 to-transparent
          opacity-100 md:opacity-0
          md:group-hover:opacity-100
          transition-opacity duration-300
        "
      />

      {/* Content */}
      <div
        className="
          absolute bottom-0 p-4 text-white
          opacity-100 md:opacity-0
          md:group-hover:opacity-100
          transition-opacity duration-300
        "
      >
        <h3 className="text-lg font-bold">{exp.company}</h3>
        <p className="text-sm text-gray-300">{exp.position}</p>
        <p className="text-xs text-gray-400 mb-2">{exp.duration}</p>

        <p className="text-sm line-clamp-3 mb-3">
          {exp.description}
        </p>

        <a
          href={exp.link}
          target="_blank"
          rel="noreferrer"
          className="inline-block px-4 py-1 text-sm bg-red-600 rounded hover:bg-red-700"
        >
          {exp.linkText}
        </a>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
