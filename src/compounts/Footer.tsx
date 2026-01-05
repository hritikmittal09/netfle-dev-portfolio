const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 md:px-16 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Top text */}
        <p className="mb-6">
          Questions? Email me at{" "}
          <a
            href="mailto:your.email@example.com"
            className="underline hover:text-gray-200"
          >
            your.email@example.com
          </a>
        </p>

        {/* Footer links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <ul className="space-y-3">
            <li className="hover:underline cursor-pointer">About Me</li>
            <li className="hover:underline cursor-pointer">Projects</li>
            <li className="hover:underline cursor-pointer">Experience</li>
            <li className="hover:underline cursor-pointer">Skills</li>
          </ul>

          <ul className="space-y-3">
            <li className="hover:underline cursor-pointer">GitHub</li>
            <li className="hover:underline cursor-pointer">LinkedIn</li>
            <li className="hover:underline cursor-pointer">Portfolio</li>
            <li className="hover:underline cursor-pointer">Resume</li>
          </ul>

          <ul className="space-y-3">
            <li className="hover:underline cursor-pointer">Frontend Projects</li>
            <li className="hover:underline cursor-pointer">Backend Projects</li>
            <li className="hover:underline cursor-pointer">Open Source</li>
            <li className="hover:underline cursor-pointer">Learning</li>
          </ul>

          <ul className="space-y-3">
            <li className="hover:underline cursor-pointer">Contact</li>
            <li className="hover:underline cursor-pointer">Freelance</li>
            <li className="hover:underline cursor-pointer">Remote Jobs</li>
            <li className="hover:underline cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Bottom text */}
        <div className="mt-10 text-sm">
          <p>Software Developer Portfolio</p>
          <p className="mt-1">© {new Date().getFullYear()} Your Name</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
