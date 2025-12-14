import React from "react"
import data from "../data/Service"
const OurSerive = () => {
  return (
    <div className="container-fluid mx-auto" style={{
            backgroundColor: "var(--nav-bg)",
            color: "var(--nav-text)",
          }}>
      <h1 className="text-center pt-5"><span className='text-pink-500'>Our</span> Service</h1>

      <div className="container-fluid mx-auto mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto" 
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="300"
            data-aos-easing="ease-in-out">
          {
        data.map((service) => (
          <div
            className="bg-white-500 text-center p-2 shadow max-w-md"
            key={service.id}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
      <div className="icon w-full flex justify-center">
        <span>
          <img src={service.icon} alt='GIF' width={60} className="bg-white-500 shadow p-2 rounded-4xl" />
        </span>
      </div>

      <div className="content mt-3">
        <p className="text-md text-pink-500">{service.t_cotent}</p>
        <div className="desc m-2 text-center">
          <p className="text-sm text-stone-700">{service.t_desc}</p>
        </div>
      </div>
    </div>
  ))
}

        </div>
        
      </div>
    </div>
  )
}

export default OurSerive
