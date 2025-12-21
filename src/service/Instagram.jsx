import React, { useContext } from 'react'
import Layout from '../layout/Layout'
import { LanguageContext } from '../context/LanguageContext'

const Instagram = () => {
  const {text} = useContext(LanguageContext);
  return (
    <Layout>
        <div className="w-full mt-30">
            <div className="max-w-7xl p-2 mx-auto">
                <h1 className="text-center" style={{fontWeight : "bolder"}} data-aos="fade-up"
                    data-aos-duration="300"
                    data-aos-delay="300"
                    data-aos-easing="ease-in-out"><span className='text-pink-500' style={{fontWeight : "bolder"}} data-aos="fade-up"
                    data-aos-duration="300"
                    data-aos-delay="300"
                    data-aos-easing="ease-in-out">Boost</span> Instagram</h1>
            </div>
            <div className="max-w-2xl text-center mx-auto p-2" data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="500"
                    data-aos-easing="ease-in-out">
                <p>{text?.boost_ig?.ig_desc}</p>
            </div>
        </div>
    </Layout>
  )
}

export default Instagram