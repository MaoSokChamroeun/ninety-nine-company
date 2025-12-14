import React from 'react'
import Layout from '../layout/Layout'
import clients from '../data/clients'
const OurClientPage = () => {
  return (
    <Layout>
        <div className="max-w-7xl mx-auto mt-30">
            <div className="container mx-auto text-center" >
                <h1 style={{fontSize : "120px" , fontWeight : "bolder"}}>Our <span style={{fontWeight : "bolder"}} className='text-pink-500'>Client</span></h1>
                <p className='text-2xl font-bold'>Take a Look at our clients</p>
            </div>

            <div className="max-w-7xl mx-auto mt-10">
                <div
                    className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    md:grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-4
                    gap-8
                    justify-items-center
                    "
                    data-aos="fade-up"
                    data-aos-duration="300"
                >
                    {clients.map((item) => (
                    <div
                        key={item.id}
                        className="
                        flex items-center justify-center
                        
                        shadow-lg
                        w-[300px] h-[200px]
                        rounded-1
                        "
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        <img
                        src={item.image}
                        alt={item.name || 'Client logo'}
                        className="
                            object-contain
                            w-[150px] h-[150px]
                            rounded-full
                        "
                        />
                    </div>
                    ))}
                </div>
                </div>

        </div>
    </Layout>
  )
}

export default OurClientPage