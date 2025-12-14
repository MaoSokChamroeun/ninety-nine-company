import React from 'react'
import Layout from '../layout/Layout'
import cover from '../assets/poster/upgrade-cover.JPG'
const Upgrade = () => {
  return (
    <Layout>
        <div className="container-fluid mt-30">
          <div className="max-w-3xl mx-auto">
                <h1 className='text-center' style={{fontWeight : 'bolder'}}><span className='text-pink-500' style={{fontWeight : 'bolder'}}>Boost</span> Posts</h1>
                <p className='text-center'> Professional graphic design services for logos, posters, banners, and branding artwork.</p>
            </div>
            <div className="container">
              <div className="grid grid-cols-1 mx-auto">
                <img src={cover} alt="" />
              </div>
            </div>
        </div>
    </Layout>
  )
}

export default Upgrade