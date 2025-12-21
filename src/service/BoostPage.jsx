import React, { useContext } from 'react'
import Layout from '../layout/Layout'
import posts from '../data/posts'
import { LanguageContext } from '../context/LanguageContext'
const BoostPage = () => {
    const {text} = useContext(LanguageContext);
  return (
    <Layout>
        <div className="container-fluid mt-30">
             <div className="max-w-3xl mx-auto">
                <h1 className='text-center' style={{fontWeight : 'bolder'}} data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="300"
                data-aos-easing="ease-in-out" ><span className='text-pink-500' style={{fontWeight : 'bolder'}}>Boost</span> Posts</h1>
                <p className='text-center p-2' data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="500"
                data-aos-easing="ease-in-out">{text?.boost_page?.boost_des}</p>
            </div>

            <div className="container mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-6">
                    {
                    posts.map((boosts) => (
                    <div className="max-w-2xl" key={boosts.id} data-aos="fade-up"
                        data-aos-duration="700"
                        data-aos-delay="700"
                        data-aos-easing="ease-in-out">
                        <img src={boosts.boost} alt="" className='w-full object- rounded-2xl' />
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default BoostPage