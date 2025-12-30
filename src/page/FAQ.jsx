import { useState } from "react";
import React from "react";
import faqs from "../data/faqs";
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto">
      <h2
        className="text-3xl font-extrabold text-center mb-4"
        data-aos="fade-up"
        data-aos-duration="300"
        data-aos-delay="300"
        data-aos-easing="ease-in-out"
      >
        Frequently Asked{" "}
        <span
          className="text-pink-500 font-extrabold"
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-delay="300"
          data-aos-easing="ease-in-out"
        >
          Questions
        </span>
      </h2>
      <p
        className="text-center text-gray-400 mb-10"
        data-aos="fade-up"
        data-aos-duration="300"
        data-aos-delay="300"
        data-aos-easing="ease-in-out"
      >
        Find answers to common questions about our services
      </p>

      <div
        className="space-y-4"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="500"
        data-aos-easing="ease-in-out"
      >
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg p-2 cursor-pointer transition-all duration-300"
            onClick={() => toggleFAQ(index)}
          >
            <div
              className="flex justify-between items-center"
              data-aos="fade-up"
              data-aos-duration="300"
              data-aos-delay="300"
              data-aos-easing="ease-in-out"
            >
              <p className="font-semibold text-[18px]">{faq.question}</p>
              <span className="text-pink-500 text-xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "max-h-30" : "max-h-0"
              }`}
            >
              <p className="text-pink-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default FAQ;
