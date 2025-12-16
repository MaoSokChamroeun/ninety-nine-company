import React from 'react'
import Layout from '../layout/Layout'

const Consolting = () => {
  return (
    <Layout>
        <div className='w-full mt-30'>
            <div className="max-w-7xl mx-auto">
                <h1 className='text-center' style={{fontWeight : "bolder"}} data-aos="fade-up"
                    data-aos-duration="300"
                    data-aos-delay="300"
                    data-aos-easing="ease-in-out">Consolting</h1>
                <div className="max-w-2xl mx-auto p-3">
                    <p className='text-center' data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="500"
                      data-aos-easing="ease-in-out">Learn proven digital marketing techniques with personalized coaching. Our sessions cover strategy, advertising, content creation, and social media growth to help you scale your business.</p>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Consolting
