import React, { useContext } from 'react'
import Layout from '../layout/Layout'
import designers from '../data/designer'
import { LanguageContext } from '../context/LanguageContext'
const GraphicDesign = () => {
    const {text} = useContext(LanguageContext);
  return (
    <Layout>
        <div className="container-fluid mt-20 py-15">
            <div className="max-w-3xl mx-auto">
                <h1 className='text-center'style={{fontWeight : 'bolder'}} data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"><span className='text-pink-500' style={{fontWeight : 'bolder'}}>Graphic</span> Designer</h1>
                <p className='text-center p-2' data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
            data-aos-easing="ease-in-out">{text?.graphic_design?.graphic_desc}</p>
            </div>
            <div className="container mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-6">
                    {
                    designers.map((items) => (
                    <div className="max-w-2xl" data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="700"
                    data-aos-easing="ease-in-out" key={items.id}>
                        <img src={items.poster} alt="" className='w-full object-cover rounded-2xl' data-aos="fade-up"
                 />
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default GraphicDesign
