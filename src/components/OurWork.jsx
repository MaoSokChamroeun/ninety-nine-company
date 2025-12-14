import React from 'react'
import ourworks from '../data/Ourwork'
const OurWork = () => {
  return (
    <div className='container-fluid mt-5'>
      <div className="max-w-7xl  mx-auto">
        <h1 className='text-center pt-5'><span className='text-pink-400'>Our</span> Work</h1>
        <div className="grid grid-cols-2 mx-auto mt-5 gap-4"
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="300"
            data-aos-easing="ease-in-out">
            {ourworks.map((p) => (
                <div className="max-w-xl mx-auto" key={p.id}
                data-aos="fade-up"
              data-aos-duration="1000">
                <img src={p.poster} alt="poster-1" className='w-full object-cover rounded-2xl' />
            </div>
            ))}             
        </div>
      </div>
    </div>
  )
}

export default OurWork
