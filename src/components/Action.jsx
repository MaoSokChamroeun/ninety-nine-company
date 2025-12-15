import React from "react";

const Action = () => {
  return (
    <div className="max-w-full mx-auto mt-5 mb-5">
      <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row gap-10">

        {/* LEFT TEXT */}
        <div className="max-w-sm flex justify-center items-center text-center lg:text-left">
        <h1 className="text-center lg:text-left text-3xl font-bold">
            Some activities recorded directly to the customer's location
        </h1>
        </div>


        {/* RIGHT VIDEOS */}
        <div className="max-w-7xl mt-10 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">

            {/* Video 1 */}
            <div
              className="relative w-[350px] h-[600px] mx-auto"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="500"
              data-aos-easing="ease-in-out"
            >
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/43qadMOeSAY"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video 2 */}
            <div
              className="relative w-[350px] h-[600px] mx-auto"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="700"
              data-aos-easing="ease-in-out"
            >
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/AghyCNo0veM"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video 3 */}
            <div
              className="relative w-[350px] h-[600px] mx-auto"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="900"
              data-aos-easing="ease-in-out"
            >
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg"
                src="https://youtube.com/embed/QVUSv56Rpbo"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Action;
