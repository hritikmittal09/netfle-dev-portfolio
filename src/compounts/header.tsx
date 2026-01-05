// components/Header.jsx


const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-red-600 text-2xl font-extrabold tracking-wide">
          DevFlix
        </h1>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-gray-300">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>

        {/* CTA */}
        <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded font-semibold">
          Hire Me
        </button>
      </div>
    </header>
  );
};

export default Header;
