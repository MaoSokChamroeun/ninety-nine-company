import React, { useContext } from 'react'
import banner from '../assets/cover-bannre-footer/cover.png'
import { Link } from 'react-router-dom'
import { LanguageContext } from '../context/LanguageContext'
const BannerFooter = () => {
  const {text} = useContext(LanguageContext);
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
            {text?.business?.business_title} <span className='text-pink-500' style={{fontWeight : 'bolder'}} data-aos="fade-up"
            data-aos-duration="350"
            data-aos-delay="350"
            data-aos-easing="ease-in-out">{text?.business?.business_title_next}</span>
    </h2>

    <p className="mt-4 text-md"  
            data-aos = "fade-up"
            data-aos-duration="450"
            data-aos-delay="450"
            data-aos-easing="ease-in-out">
          {text?.business?.business_desc}
    </p>
  </div>
</div>

  )
}

export default BannerFooter
