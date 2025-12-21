import React, { useContext } from 'react'
import Layout from '../layout/Layout'
import { LanguageContext } from '../context/LanguageContext'

const BoostTiktok = () => {
    const {text} = useContext(LanguageContext);
   return (
    <Layout>
        <div className="w-full mt-30">
            <div className="max-w-7xl mx-auto">
                <h1 className='text-center' style={{fontWeight : "bolder"}}
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="300"
                data-aos-easing="ease-in-out"
                ><span className='text-pink-500' style={{fontWeight : "bolder"}} data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="300"
                data-aos-easing="ease-in-out">Boost</span> Tiktok</h1>
                <div className="max-w-2xl mx-auto">
                    <p className="text-center" data-aos="fade-up"
                        data-aos-duration="400"
                        data-aos-delay="400"
                        data-aos-easing="ease-in-out">
                        {text?.boost_tiktok?.tiktok_desc}
                    </p>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default BoostTiktok