import React, { useEffect, useRef } from "react";
import logos from "../data/clients";

const RightCarousel = () => {
  // const topSliderRef = useRef(null);
  const bottomSliderRef = useRef(null);

  useEffect(() => {
    // const top = topSliderRef.current;
    const bottom = bottomSliderRef.current;

    if (!top || !bottom) return;

    let topPos = 0;
    let bottomPos = bottom.scrollWidth / 2;
    const speed = 0.5;

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
                className="w-15 h-15 object-contain rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightCarousel;
