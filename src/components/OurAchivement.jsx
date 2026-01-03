import React from "react";
import Counter from "./Counter";
import achievementData from "../data/achivement";
import RightCarousel from "./RightCarousel";
const OurAchivement = () => {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-[600px] text-center">
          <h1
            className="text-4xl font-extrabold"
            style={{ fontWeight: "bolder" }}
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"
          >
            <span
              className="text-pink-600"
              style={{ fontWeight: "bolder" }}
              data-aos="fade-up"
              data-aos-duration="300"
              data-aos-delay="300"
              data-aos-easing="ease-in-out"
            >
              Our
            </span>{" "}
            Achievement
          </h1>
          <p
            className="mt-2 nav-link"
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"
          >
            We have achieved great milestones in our journey.
          </p>
        </div>

        <div className="mx-auto mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {achievementData.map((item, index) => (
            <div
              key={index}
              className="flex h-[150px] flex-col items-center justify-center rounded-lg shadow max-w-xl h-auto hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-600 to-pink-400 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={item.delay}
            >
              <div className="work-flow-box w-full rounded-xl flex flex-col items-center justify-center p-4">
                <div className="flex items-center gap-2 text-5xl text-pink-600 ">
                <img
                  src={item.icon}
                  alt=""
                  width={50}
                  height={50}
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  data-aos-delay={item.delay_icon}
                />
                <Counter
                  key={item.title}
                  end={item.number}
                  className="font-semibold"
                />
                +
              </div>

              <div className="mt-4 text-xl font-semibold nav-link">
                {item.title}
              </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
      {/* Trush by client */}
      <div className="w-full mx-auto mt-10">
        <p
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="600"
          data-aos-easing="ease-in-out"
        >
          Trusted by startup and growing businesses to deliver
          creative,relaible, and reuslts-driven digital solutions
        </p>
        <p
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="600"
          data-aos-easing="ease-in-out"
        >
          Trush By Client and Companies
        </p>
      </div>
      <div
        className="w-full"
        data-aos="fade-in"
        data-aos-duration="400"
        data-aos-delay="400"
        data-aos-easing="ease-in-out"
      >
        <RightCarousel />
      </div>
    </div>
  );
};

export default OurAchivement;
