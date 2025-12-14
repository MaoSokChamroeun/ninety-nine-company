import React from 'react'
import banner from '../assets/cover-bannre-footer/cover.png'
import { Link } from 'react-router-dom'
const BannerFooter = () => {
  return (
    <div
  className="relative max-w-full px-6 py-10 md:p-20 mx-auto mt-15 bg-bottom bg-content bg-no-repeat"
  style={{ backgroundImage: `url(${banner})`}}
  
  >
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
    <h2 className="text-3xl md:text-4xl font-bold" style={{fontSize : "50px", fontWeight : "bolder"}} data-aos="fade-up"
            data-aos-duration="350"
            data-aos-delay="350"
            data-aos-easing="ease-in-out">
      Grow Your Business With <span className='text-pink-500' style={{fontWeight : 'bolder'}} data-aos="fade-up"
            data-aos-duration="350"
            data-aos-delay="350"
            data-aos-easing="ease-in-out">Ninety Nine Media</span>
    </h2>

    <p className="mt-4 text-md">
      We help brands reach the right audience through creative,
      data-driven advertising that delivers real results.
    </p>

    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
      {/* <button className="px-8 py-3 bg-pink-600 hover:bg-white hover:text-black rounded-lg font-semibold transition">
        Get Started
      </button> */}

      {/* <button className="px-8 py-3 border 0 bg-white border-white hover:bg-white hover:text-black rounded-lg font-semibold transition">
        <Link to = {'/contact'} className='text-black text-decoration-none'>Contact Us</Link>
      </button> */}
    </div>
  </div>
</div>

  )
}

export default BannerFooter
