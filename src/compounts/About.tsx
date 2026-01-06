//import React from "react";
import aboutData from "../data/aboutData";
import AboutImagePlaceholder from "./AboutImage";

const About = () => {
  const { title, highlight, paragraphs } = aboutData;

  return (
    <section className="bg-black text-white py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row items-center gap-14">
          
          {/* Image */}
          <AboutImagePlaceholder />

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8">
              {title.split(" ")[0]}{" "}
              <span className="text-red-600">{highlight}</span>
            </h2>

            <div className="space-y-6">
              {paragraphs.map((text, index) => (
                <p
                  key={index}
                  className="text-gray-400 text-lg leading-relaxed"
                >
                  {text}
                </p>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
