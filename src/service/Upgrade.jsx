import React from 'react'
import Layout from '../layout/Layout'
import cover from '../assets/poster/upgrade-cover.JPG'
const Upgrade = () => {
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
            data-aos-easing="ease-in-out">Boost</span> Posts</h1>
                <p className='text-center' data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
            data-aos-easing="ease-in-out"> Professional graphic design services for logos, posters, banners, and branding artwork.</p>
            </div>
            <div className="container">
              <div className="grid grid-cols-1 mx-auto" data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="600"
            data-aos-easing="ease-in-out">
                <img src={cover} alt="" className='rounded-2xl' />
              </div>
            </div>
        </div>
    </Layout>
  )
}

export default Upgrade