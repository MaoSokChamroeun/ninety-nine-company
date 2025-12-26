import React, { useEffect, useRef } from "react";
import logos from "../data/clients";

const ClientCarousel = () => {
  const topSliderRef = useRef(null);
  const bottomSliderRef = useRef(null);

  useEffect(() => {
    const top = topSliderRef.current;
    const bottom = bottomSliderRef.current;

    if (!top || !bottom) return;

    let topPos = 0;
    let bottomPos = bottom.scrollWidth / 2;
    const speed = 0.2;

    const animate = () => {
      // TOP → LEFT
      topPos += speed;
      if (topPos >= top.scrollWidth / 2) {
        topPos = 0;
      }
      top.scrollLeft = topPos;

      // BOTTOM → RIGHT
      bottomPos -= speed;
      if (bottomPos <= 0) {
        bottomPos = bottom.scrollWidth / 2;
      }
      bottom.scrollLeft = bottomPos;

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="w-full mt-5 lg:mt-10 xl:mt-10 md:10">
      <h1 className="text-center text-2xl font-semibold" style={{fontWeight : 'bolder' , fontSize : '50px'}}>
        <span className="text-pink-500" style={{fontWeight : 'bolder' , fontSize : '50px'}}>Our</span> Client
      </h1>

      {/* TOP SLIDER */}
      <div className="overflow-hidden mt-15">
        <div
          ref={topSliderRef}
          className="flex gap-6 whitespace-nowrap overflow-x-hidden scrollbar-hide"
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`top-${index}`}
              className="flex items-center justify-center min-w-[120px] bg-gray-200 p-2 rounded-xs"
            >
              <img
                src={logo.image}
                alt="Client"
                className="w-20 h-20 object-contain rounded-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM SLIDER */}
      <div className="overflow-hidden mt-6">
        <div
          ref={bottomSliderRef}
          className="flex gap-6 whitespace-nowrap overflow-x-hidden scrollbar-hide"
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`bottom-${index}`}
              className="flex items-center justify-center min-w-[120px] bg-gray-200 p-2 rounded-xs"
            >
              <img
                src={logo.image}
                alt="Client"
                className="w-20 h-20 object-contain rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;
