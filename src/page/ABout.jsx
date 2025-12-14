import React from 'react'
import Layout from '../layout/Layout'
import profile1 from '../assets/profile/photo_2025-10-28_13-56-56.jpg'


import icon1 from '../assets/icon_GIF/analytics.gif'
import icon2 from '../assets/icon_GIF/ai-image.gif'
import icon3 from '../assets/icon_GIF/deal.gif'
import icon4 from '../assets/icon_GIF/solution.png' 
import '../index.css'
const ABout = () => {
  return (
    <Layout>
      <div className="container mx-auto mt-20">
        <p className="text-center p-4 text-md" 
        data-aos ="fade-up" 
        data-aos-duration="300"
        data-aos-delay="300"
        data-aos-easing="ease-in-out">About</p>

        <div className="our-team max-w-2xl mx-auto"
        data-aos ="fade-up" 
        data-aos-duration="400"
        data-aos-delay="400"
        data-aos-easing="ease-in-out">
          <span className="text-7xl text-center justify-center flex tracking-wide leading-17">
            <p style={{fontWeight : 'bold'}}>The dream team of <span className='text-pink-500'> degital marketing.</span></p>
          </span>
          <p className="text-center mt-4" data-aos ="fade-up" 
        data-aos-duration="500"
        data-aos-delay="500"
        data-aos-easing="ease-in-out">We Grow Bussinesses Online</p>
        </div>

        <div className="about-team max-w-7xl h-auto mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full h-full" 
            data-aos ="fade-up" 
        data-aos-duration="550"
        data-aos-delay="550"
        data-aos-easing="ease-in-out">
              <img
                src={profile1}
                alt="Profile 1"
                className="w-full h-full object-cover"
              />
            </div>

               <div className="w-full h-full">
               <p style={{fontSize : '60px'}} data-aos ="fade-up" 
                data-aos-duration="6600"
                data-aos-delay="600"
                data-aos-easing="ease-in-out">
                <span className='text-pink-500 text-center'>Ninety Nine Media</span> & Advertising</p>
                  <p className='py-20 text-gray-300' style={{fontSize : '20px'}} data-aos ="fade-up" 
                  data-aos-duration="600"
                  data-aos-delay="600"
                  data-aos-easing="ease-in-out">
                    Ninety Nine Media & Advertising is a modern digital marketing and advertising agency founded on October 10, 2024, with a mission to empower businesses in Cambodia to grow, scale, and stand out in today’s fast-moving digital era.
                      We are committed to delivering creative, innovative, and result-driven digital solutions that help brands strengthen their identity, reach their audiences, and achieve measurable success.
                      The name “Ninety Nine” represents strength, consistency, and continuous growth—reflecting our belief in providing reliable and high-quality services to every client we work with.
                  </p>
            </div>
          </div>
          
        </div>
        <div className="our-vision w-full mt-5">
            <h1 className='text-center'
            data-aos ="fade-up" 
            data-aos-duration="300"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"><span className='text-pink-500'
            >Our</span> Mission</h1>
            <div className="max-w-7xl mt-4">
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    <div className='max-w-xl  mx-auto p-4 rounded-2xl' data-aos ="fade-up" 
                      data-aos-duration="500"
                      data-aos-delay="500"
                      data-aos-easing="ease-in-out">
                        <div className="icon flex justify-center p-3">
                            <span><img src={icon1} alt="" width={50} /></span>
                        </div>
                        <p className='text-center text-2xl'>Grow Up Business</p>
                            <div className='text-center text-gray-600' >
                                We empower entrepreneurs and companies to scale with strategic 
                                digital tools, effective campaigns, and expert guidance tailored for growth.
                            </div>
                    </div>

                    <div className='max-w-xl  mx-auto p-4 rounded-2xl' data-aos ="fade-up" 
                      data-aos-duration="700"
                      data-aos-delay="700"
                      data-aos-easing="ease-in-out">
                        <div className="icon flex justify-center p-3">
                            <span><img src={icon4} alt="" width={50} /></span>
                        </div>
                        <p className='text-center text-2xl'>Solution for Business</p>
                            <div className='text-center text-gray-600'>
                            Our team delivers customized marketing solutions that address specific 
                            business challenges, helping you achieve measurable success.                            </div>
                    </div>
                    <div className='max-w-xl  mx-auto p-4 rounded-2xl' data-aos ="fade-up" 
                    data-aos-duration="550"
                    data-aos-delay="550"
                    data-aos-easing="ease-in-out">
                        <div className="icon flex justify-center p-3">
                            <span><img src={icon3} alt="" width={50} /></span>
                        </div>
                        <p className='text-center text-2xl'>Long-Term Partnerships</p>
                            <div className='text-center text-gray-600'>
                            We build meaningful, lasting relationships with clients 
                            by continuously delivering value and evolving with your business goals.                            </div>
                    </div>
                    <div className='max-w-xl  mx-auto p-4 rounded-2xl' data-aos ="fade-up" 
                      data-aos-duration="700"
                      data-aos-delay="700"
                      data-aos-easing="ease-in-out">
                        <div className="icon flex justify-center p-3">
                            <span><img src={icon2} alt="" width={50} /></span>
                        </div>
                        <p className='text-center text-2xl'>Shape Cambodia’s Digital Futures</p>
                            <div className='text-center text-gray-600'>
                            We’re committed to leading Cambodia into the digital era through innovation, 
                            education, and impactful digital marketing solutions.                            </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="our-vistion w-full mt-5">
           <h1 className='text-center'><span className='text-pink-500'>Our</span> Vistion</h1>
           <p className='text-center text-gray-400 max-w-4xl mx-auto'>
            To become one of Cambodia’s most impactful and innovative digital marketing & advertising agencies—powered by creativity, technology, and strategic thinking.
           </p>
        </div>
      </div>
    </Layout>
  )
}

export default ABout
