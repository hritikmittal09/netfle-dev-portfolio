import heroImage from "../assets/hero.jpg";
import TextType from "./AmatedHeader";

const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/Resume/HritikMittalResume.pdf";
  link.download = "Hritik_Mittal_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};



const Hero = () => {
  return (
    <section className="relative h-screen flex items-center text-white overflow-hidden">
      
      {/* Background Image */}
      <img
        src={heroImage}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover opacity-20 scale-110"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/40" />

      {/* Content */}
      <div className="relative z-10 px-10 max-w-4xl">
        
        {/* Typed intro */}
        <TextType
          text={["Welcome to DevFlix", "Building Scalable Web Experiences"]}
          className="text-xl text-gray-400 mb-4 tracking-wide"
          typingSpeed={60}
        />

        {/* Name */}
        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight">
          <span className="text-white">Hritik</span>{" "}
          <span className="text-red-600 drop-shadow-[0_0_30px_rgba(220,38,38,0.6)]">
            Mittal
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
          Frontend & Backend Developer crafting high-performance,
          scalable web applications with clean architecture.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4">
          <a
  href="/Resume/Hritik_Mittal_Resume.pdf"
  download
  className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
>
  Download Resume
</a> 
          
        </div>
      </div>

      {/* Bottom fade (Netflix touch) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;
