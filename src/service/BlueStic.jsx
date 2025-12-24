import React, { useContext } from 'react'
import Layout from '../layout/Layout'
import photo from '../assets/poster/p1.png'
import { LanguageContext } from '../context/LanguageContext'
const BlueStic = () => {
  const {text} = useContext(LanguageContext);
  return (
    <Layout>
        <div className="max-w-full mt-30">
          <div className="max-w-7xl mx-auto">
            <h1 className='text-center' style={{fontWeight : 'bolder'}} data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"><span className='text-pink-500' style={{fontWeight : "bolder"}} data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="300"
            data-aos-easing="ease-in-out">Bluetick</span> Service</h1>
            <p className='max-w-4xl text-center mx-auto p-3' data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
            data-aos-easing="ease-in-out">{text?.bluestic?.bluestic_desc}</p>
            
          </div>
          <div
            className="max-w-7xl mx-auto p-4 xs:p-2"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="600"
            data-aos-easing="ease-in-out"
          >
            <img
              src={photo}
              alt=""
              className="w-full object-cover rounded-lg"
            />
          </div>

        </div>
    </Layout>
  )
}

export default BlueStic