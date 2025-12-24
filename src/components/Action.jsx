import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import actions from "../data/actions";
const Action = () => {
  const {text} = useContext(LanguageContext);
  return (
    <div className="max-w-full mx-auto mt-10 mb-2">
      <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row gap-10 md:items-center md:justify-center sm:items-center sm:justify-center lg:items-start lg:justify-between xl:justify-between xl:items-center">
        {/* LEFT TEXT */}
        <div className="max-w-sm flex justify-center items-center text-center lg:text-left">
        <h1 className=" lg:text-center text-6xl p-3 text-center">
            <span className="text-6xl text-pink-500">{text?.why_choose?.choose_title} <br></br> {text?.why_choose?.choose_middle} <br></br> </span> <span style={{fontWeight : "bolder"}}>{text?.why_choose?.choose_desc}</span>
        </h1>
        </div>
        {/* RIGHT VIDEOS */}
        <div className="max-w-7xl mt-2 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2">

           {actions.map((video, index) => (
              <div
                key={index}
                className="relative w-[350px] h-[600px] mx-auto 
                md:w-[360px] md:h-[600px] lg:w-[300px] lg:h-[500px] sm:w-[300px] sm:h-[600px]"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay={video.delay}
                data-aos-easing="ease-in-out"
              >
                <iframe
                  className="absolute inset-0 w-full h-full rounded-lg"
                  src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                  title="YouTube video"
                  frameBorder="0"
                  allow="encrypted-media; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
};

export default Action;
