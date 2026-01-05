import heroImage from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center text-white">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0  from-black via-black/80 to-black/30"></div>

      {/* Content */}
      <div className="relative z-10 px-10 max-w-3xl">
        <h1 className="text-5xl font-bold mb-4">Hritik Mittal</h1>
        <p className="text-lg text-gray-300 mb-6">
          Frontend & Backend Developer building scalable web apps
        </p>
        <div className="flex gap-4">
          <button className=" bg-red-500 text-black px-6 py-2 rounded font-semibold">
             View Projects
          </button>
          <button className="bg-gray-700 px-6 py-2 rounded">
             About Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
