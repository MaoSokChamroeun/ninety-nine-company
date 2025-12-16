import React from 'react'
import Layout from '../layout/Layout'

const Instagram = () => {
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
            <div className="max-w-2xl text-center mx-auto p-3" data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="500"
                    data-aos-easing="ease-in-out">
                <p>We help bring your vision to life through creative photography that highlights detail, emotion, and authenticity.</p>
            </div>
        </div>
    </Layout>
  )
}

export default Instagram