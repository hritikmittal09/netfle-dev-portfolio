import myPic from "../assets/me2.jpg";

const AboutImagePlaceholder = () => {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden">
      
      {/* Image */}
      <img
        src={myPic}
        alt="Hritik Mittal"
        className="w-full h-full object-cover"
      />

      {/* Optional overlay for Netflix-style look */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  );
};

export default AboutImagePlaceholder;
