import React from 'react'
import ourworks from '../data/Ourwork'

const OurWork = () => {
  return (
    <div className="mt-10 px-4">
      <div className="w-full mx-auto">
        <h1 className="text-center pt-5 text-3xl md:text-4xl" style={{fontWeight : 'bolder' , fontSize : '50px'}}>
          <span className="text-pink-400" style={{fontWeight : 'bolder'}}>Our</span> Work
        </h1>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-1
            md:grid-cols-1
            lg:grid-cols-2
            gap-6
            mt-8
          "
          data-aos="fade-up"
          data-aos-duration="300"
        >
          {ourworks.map((p) => (
            <div
              key={p.id}
              className="w-full"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={p.poster}
                alt={`Work ${p.id}`}
                className="w-full h-auto object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurWork
