import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ContactLinks = () => {
  return (
    <div className="flex gap-6 items-center text-gray-300 mb-6">
      <a
        href="https://github.com/hritikmittal09"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-white transition"
      >
        <FaGithub size={20} />
        <span className="hidden sm:inline">GitHub</span>
      </a>

      <a
        href="https://www.linkedin.com/in/hritik-mittal09/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-white transition"
      >
        <FaLinkedin size={20} />
        <span className="hidden sm:inline">LinkedIn</span>
      </a>

      <a
        href="mailto:hritikmttal77@gmail.com"
        className="flex items-center gap-2 hover:text-white transition"
      >
        <FaEnvelope size={20} />
        <span className="hidden sm:inline">Email</span>
      </a>
    </div>
  );
};

export default ContactLinks;
