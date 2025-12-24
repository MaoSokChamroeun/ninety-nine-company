import React from "react";
import clients from "../data/clients";

const OurClient = () => {
  return (
    <div className="w-full mt-10 px-4">
      <h1 className="text-center text-2xl font-semibold" style={{fontWeight : 'bolder' , fontSize : '50px'}}>
        <span className="text-pink-500" style={{fontWeight : 'bolder' , fontSize : '50px'}}>Our</span> Client
      </h1>

    <div className="max-w-full mx-auto mt-10">
 <div
  className="
    grid
    grid-cols-2
    sm:grid-cols-3
    md:grid-cols-4
    lg:grid-cols-6
    xl:grid-cols-9
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
        shadow
        border
        w-[171px] h-20  
        sm:w-[210px] sm:h-28
        md:w-[210px] md:h-28
        lg:w-[210px] lg:h-32
      "
      data-aos="zoom-in"
      data-aos-duration="800"
    >
      <img
        src={item.image}
        alt=""
        className="
          object-contain
          rounded-full
          w-12 h-12
          sm:w-14 sm:h-14
          md:w-20 md:h-20
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
