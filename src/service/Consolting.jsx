import React, { useContext } from 'react'
import Layout from '../layout/Layout'
import { LanguageContext } from '../context/LanguageContext'

const Consolting = () => {
  const {text} = useContext(LanguageContext);
  return (
    <Layout>
        <div className='w-full mt-30'>
            <div className="max-w-7xl mx-auto">
                <h1 className='text-center' style={{fontWeight : "bolder"}} data-aos="fade-up"
                    data-aos-duration="300"
                    data-aos-delay="300"
                    data-aos-easing="ease-in-out">Consolting</h1>
                <div className="max-w-2xl mx-auto p-2">
                    <p className='text-center p-2' data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="500"
                      data-aos-easing="ease-in-out">{text?.consolting?.consolting_desc}</p>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Consolting
