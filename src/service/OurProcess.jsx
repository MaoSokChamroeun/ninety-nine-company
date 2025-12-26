
import React from "react";
import steps from "../data/process";
export default function OurProcess() {
  return (
    <section className=" py-10">
      <div className="max-w-[1500px] mx-auto text-center ">
        {/* Title */}
        <h1 className='text-center' style={{fontWeight : "bolder"}} data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"><span className='text-pink-500' style={{fontWeight : "bolder"}} data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="300"
            data-aos-easing="ease-in-out">Our</span> Process</h1>
        <div className="w-[full] mx-auto">
          <p className="text-gray-400 mt-3 mx-auto " 
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-delay="400"
            data-aos-easing="ease-in-out">
             A clear, proven process that ensures success for every project we undertake.
        </p>
        </div>

        {/* Timeline */}
        <div className="relative sm:p-2 sm:mx-auto mt-10 grid grid-cols-2 xl:flex xl:flex-row xl:items-center gap-10 sm:grid sm:grid-cols-3 md:grid-cols-3">
          
          {/* Dotted line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px border-t border-dashed border-process-color/20" />

          {steps.map((step, index) => {
            return (
              <div
                key={index}
                className="relative z-10 flex flex-col items-center text-center max-w-[220px] md:items-center md:justify-center md:mx-auto md:pt-2 "
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
                <p className="mt-6 sm:text-[18px] text-[16px] font-semibold process-color">
                  {step.title}
                </p>
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
