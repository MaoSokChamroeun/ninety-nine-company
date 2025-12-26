import React, { useContext } from 'react'
import Layout from '../layout/Layout'
import cover from '../assets/poster/upgrade-cover.JPG'
import { LanguageContext } from '../context/LanguageContext'
const Upgrade = () => {
  const {text} = useContext(LanguageContext);
  return (
    <Layout>
        <div className="container-fluid mt-30">
          <div className="max-w-3xl mx-auto">
                <h1 className='text-center' style={{fontWeight : 'bolder'}} data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"><span className='text-pink-500' style={{fontWeight : 'bolder'}} data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="300"
            data-aos-easing="ease-in-out">Upgrade</span> Page</h1>
                <p className='text-center p-2 text-gray-400' data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
            data-aos-easing="ease-in-out">{text?.upgrade_page?.upgrade_desc}</p>
            </div>
          
              <div className="max-w-7xl grid grid-cols-1 mx-auto" data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="600"
                    data-aos-easing="ease-in-out">
                <img src={cover} alt="" className='rounded-lg' />
              </div>
           
        </div>
    </Layout>
  )
}

export default Upgrade