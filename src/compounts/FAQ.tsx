import { useState } from "react";
import faqData from "../data/faqData";
import type { FAQItem }  from "../data/faqData"

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-black text-white py-16 px-4 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqData.map((item: FAQItem, index: number) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-md overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-left text-lg font-medium hover:bg-zinc-800 transition"
            >
              {item.question}
              <span className="text-2xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            {activeIndex === index && (
              <div className="p-5 text-zinc-300 border-t border-zinc-800">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
