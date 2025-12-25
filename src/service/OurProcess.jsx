
import React from "react";
import steps from "../data/process";
export default function OurProcess() {
  return (
    <section className=" py-10 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h1 className='text-center' style={{fontWeight : "bolder"}} data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"><span className='text-pink-500' style={{fontWeight : "bolder"}} data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="300"
            data-aos-easing="ease-in-out">Our</span> Process</h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto" 
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-delay="400"
            data-aos-easing="ease-in-out">
          A clear, proven process that ensures success for every project we undertake.
        </p>

        {/* Timeline */}
        <div className="relative mt-10 flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Dotted line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px border-t border-dashed border-process-color/20" />

          {steps.map((step, index) => {
           
            return (
              <div
                key={index}
                className="relative z-10 flex flex-col items-center text-center max-w-[220px] "
                data-aos="zoom-in"
                data-aos-duration="400"
                data-aos-delay={step.delay}
                
              >
                {/* Icon circle */}
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-2 
                 
                  `}
                >
                  <img src={step.icon} alt={step.title} className="w-10 h-10" />
                </div>
                {/* Text */}
                <h3 className="mt-6 text-xl font-semibold process-color">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-400 text-sm">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
