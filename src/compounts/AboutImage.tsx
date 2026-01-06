
//import React from "react";

const AboutImagePlaceholder = () => {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden">
      
      {/* Glow */}
      <div className="absolute inset-0  from-red-600/20 to-transparent" />

      {/* Initials */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-zinc-800 flex items-center justify-center text-3xl font-bold text-red-600">
          HM
        </div>
        <p className="mt-4 text-gray-400 text-sm">
          Profile image coming soon
        </p>
      </div>

    </div>
  );
};

export default AboutImagePlaceholder;
