import React from "react";
import Counter from "./Counter";
import achievementData from "../data/achivement";
const OurAchivement = () => {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-[500px] text-center">
          <h1 className="text-4xl font-extrabold" style={{fontWeight : "bolder"}} data-aos="fade-up">
            <span className="text-pink-500" style={{fontWeight : "bolder"}}>Our</span> Achievement
          </h1>
          <p className="mt-2" 
            data-aos="fade-up" 
            data-aos-duration="300"
            data-aos-delay="300"
            data-aos-easing="ease-in-out">We have achieved great milestones in our journey.</p>
        </div>

        <div className="mx-auto mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {achievementData.map((item) => (
            <div className="flex h-[150px] flex-col items-center justify-center rounded-lg bg-gray-800 shadow" 
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={item.delay}
            data-aos-easing="ease-in-out">
              <div className="text-5xl text-pink-500 flex items-center gap-2">
                <img src={item.icon} alt="" width={50} height={50} data-aos="zoom-in" data-aos-duration="300" data-aos-delay={item.delay_icon} data-aos-easing="ease-in-out" />
                <Counter end={item.number} data-aos="zoom-in" data-aos-duration="300" data-aos-delay={item.delay} data-aos-easing="ease-in-out" className="font-semibold" />+
              </div>
              <div className="mt-4 text-xl font-semibold text-white">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurAchivement;
