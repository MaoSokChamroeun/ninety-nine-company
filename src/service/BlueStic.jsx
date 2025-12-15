import React from 'react'
import Layout from '../layout/Layout'
import photo from '../assets/poster/p1.png'
const BlueStic = () => {
  return (
    <Layout>
        <div className="max-w-full mt-30">
          <div className="max-w-7xl mx-auto">
            <h1 className='text-center' style={{fontWeight : 'bolder'}}>Bluetick Service</h1>
            <p className='max-w-4xl text-center mx-auto'>Get your social media account verified with our expert assistance. 
            We help you meet platform requirements and submit applications for that prestigious blue checkmark.</p>
            
          </div>
          <div className="max-w-7xl mx-auto">
            <img src={photo} alt="" className='w-full object-cover ' />
          </div>
        </div>
    </Layout>
  )
}

export default BlueStic