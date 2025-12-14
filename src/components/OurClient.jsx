import React from "react";
import clients from "../data/clients";

const OurClient = () => {
  return (
    <div className="w-full mt-10 px-4">
      <h1 className="text-center text-2xl font-semibold">
        <span className="text-pink-500">Our</span> Client
      </h1>

      <div className="max-w-7xl mx-auto mt-10">
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-6
            xl:grid-cols-7
            gap-6
            justify-items-center
          "
          data-aos="fade-up"
          data-aos-duration="300"
        >
          {clients.map((item) => (
            <div
              key={item.id}
              className="
                flex items-center justify-center
                bg-white
                rounded-full
                shadow
                w-20 h-20
                sm:w-24 sm:h-24
                md:w-28 md:h-28
              "
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <img
                src={item.image}
                alt=""
                className="
                  object-contain
                  w-12 h-12
                  sm:w-16 sm:h-16
                  md:w-20 md:h-20
                  rounded-full
                "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClient;
