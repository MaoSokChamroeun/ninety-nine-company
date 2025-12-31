import React, { useContext } from "react";
import data from "../data/Service";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
const OurSerive = () => {
  const { text } = useContext(LanguageContext);
  return (
    <div
      className="container-fluid mx-auto"
      style={{
        backgroundColor: "var(--nav-bg)",
        color: "var(--nav-text)",
      }}
    >
      <h1
        className="text-center pt-5"
        style={{ fontWeight: "bolder", fontSize: "50px" }}
      >
        <span
          className="text-pink-500"
          style={{ fontWeight: "bolder", fontSize: "50px" }}
        >
          Our
        </span>{" "}
        Service
      </h1>

      <div className="container-fluid mx-auto mt-4">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto"
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-delay="300"
          data-aos-easing="ease-in-out"
        >
          {data.map((service) => (
            <div
              className="text-center p-2 shadow max-w-md rounded-lg border-2 border-[rgba(167,167,167,0.5)] rounded-[1.5em] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]"
              key={service.id}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="icon w-full flex justify-center">
                <span className="max-w-2xs p-2 rounded-full shadow">
                  <img
                    src={service.icon}
                    alt="GIF"
                    width={45}
                    className="object-cover"
                  />
                </span>
              </div>

              <div className="content mt-3">
                <span className="text-pink-500" style={{ fontWeight: "bold" }}>
                  {text?.services?.[service.titleKey.split(".")[1]]?.title}
                </span>
                <div className="desc m-2 text-center nav-link">
                  <span>
                    {text?.services?.[service.descKey.split(".")[1]]?.desc}
                  </span>
                </div>
                <button
                  className="cursor-pointer transition-all bg-pink-500 text-white px-2 py-2 rounded-lg
                border-gray-700
                border-b-[4px] hover:brightness-110 hover:-translate-y-[2px] hover:border-b-[6px]
                active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                >
                  <Link
                    to={service.link}
                    className="text-white text-decoration-none service-bg p-2 "
                    style={{ fontSize: "13px" }}
                  >
                    View Details
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurSerive;
