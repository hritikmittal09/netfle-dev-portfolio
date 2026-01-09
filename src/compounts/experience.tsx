// src/components/ExperienceSection.jsx
import { Swiper, SwiperSlide } from "swiper/react";

import { experiences } from "../data/expericedata";
import ExperienceCard from "./experienceCard";

export const ExperienceSection = () => {
  return (
    <section className="px-6 md:px-12 py-10 bg-black text-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Professional Experience
      </h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
          1280: { slidesPerView: 4.2 },
        }}
      >
        {experiences.map((exp, index) => (
          <SwiperSlide key={index}>
            <ExperienceCard exp={exp} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ExperienceSection;
