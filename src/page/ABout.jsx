import React, { useContext } from 'react'
import Layout from '../layout/Layout'
import profile1 from '../assets/profile/photo_2025-10-28_13-56-56.jpg'
import ourmisssions from '../data/ourmissions'
import '../index.css'
import { LanguageContext } from '../context/LanguageContext'
const ABout = () => {
  const {text} = useContext(LanguageContext);
  return (
    <Layout>
      <div className="container mx-auto mt-20">
        <p className="text-center p-4 text-md" 
        data-aos ="fade-up" 
        data-aos-duration="300"
        data-aos-delay="300"
        data-aos-easing="ease-in-out">About</p>

        <div className="our-team max-w-xxl mx-auto"
        data-aos ="fade-up" 
        data-aos-duration="400"
        data-aos-delay="400"
        data-aos-easing="ease-in-out">
          <span className="text-sm text-center justify-center flex tracking-wide">
            <p style={{fontWeight : "bolder" , fontSize : "20px"}}><span className='text-pink-500' style={{fontWeight : 'bolder' , fontSize : "20px"}}>Ninety Nine</span> is a creative digital agency<span className='text-pink-500' style={{fontWeight : 'bolder' , fontSize : "20px"}}> Specializing</span></p>
          </span>
          <p className='text-center'>in Graphic Design, Video Editing, Advertising, and Social Media Management.</p>
        </div>

        <div className="about-team max-w-7xl mt-10 h-auto mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full h-full" 
            data-aos ="fade-up" 
            data-aos-duration="550"
            data-aos-delay="550"
            data-aos-easing="ease-in-out">
              <img
                src={profile1}
                alt="Profile 1"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

               <div className="w-full h-full">
               <p style={{fontSize : '30px'}} data-aos ="fade-up" 
                data-aos-duration="6600"
                data-aos-delay="600"
                data-aos-easing="ease-in-out">
                <span className='text-pink-500 text-center' style={{fontWeight : "bolder"}}>Founder</span> Of Ninety Nine</p>

                 <p className='py-1' style={{fontSize : '18px'}} data-aos ="fade-up" 
                  data-aos-duration="600"
                  data-aos-delay="600"
                  data-aos-easing="ease-in-out">
                   <span className='text-pink-500' style={{fontWeight : "bolder"}}>Ninety Nine Media & Advertising</span> គឺជាក្រុមការងារទីផ្សារឌីជីថល និងការផ្សព្វផ្សាយសម័យថ្មី ដែលបានបង្កើតឡើងនៅថ្ងៃទី ១០ ខែតុលា ឆ្នាំ ២០២៤ ដោយមានបេសកកម្មជួយអាជីវកម្មនៅក្នុងប្រទេសកម្ពុជាឲ្យអាចរីកចម្រើន ពង្រីក និងលេចធ្លោក្នុងសម័យឌីជីថលដែលមានការផ្លាស់ប្តូរយ៉ាងលឿន។

                    យើងប្តេជ្ញាផ្តល់នូវដំណោះស្រាយឌីជីថលដែលមានភាពច្នៃប្រឌិត ទំនើប និងផ្តោតលើលទ្ធផល ដើម្បីជួយឲ្យម៉ាកយីហោបង្កើនអត្តសញ្ញាណរបស់ខ្លួន និងសម្រេចបាននូវជោគជ័យដែលអាចវាស់វែងបាន។

                    ឈ្មោះ “Ninety Nine” តំណាងឲ្យភាពរឹងមាំ ភាពស្ថិរភាព និងការរីកចម្រើនជាបន្តបន្ទាប់ ដែលបង្ហាញពីជំនឿរបស់យើងក្នុងការផ្តល់សេវាកម្មដែលមានគុណភាពខ្ពស់ និងអាចទុកចិត្តបានទៅកាន់អតិថិជនគ្រប់រូបដែលយើងបានសហការជាមួយ។
                    </p>
                  <p className='py-1' style={{fontSize : '18px'}} data-aos ="fade-up" 
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
            data-aos-easing="ease-in-out" style={{fontWeight : "bolder"}}><span className='text-pink-500'
            style={{fontWeight : "bolder"}}>Our</span> Mission</h1>
            <div className="max-w-7xl mt-4">
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    {
                      ourmisssions.map((items) => (
                        <div className='max-w-xl  mx-auto p-4 rounded-2xl' data-aos ="fade-up" 
                      data-aos-duration="500"
                      data-aos-delay="500"
                      data-aos-easing="ease-in-out">
                        <div className="icon flex justify-center p-3">
                            <span><img src={items.icon} alt="" width={50} className='rounded-full' /></span>
                        </div>
                        <p className='text-center text-2xl'>{text?.ourmision?.[items.section]?.[items.titleKey]}</p>
                            <div className='text-center' >
                               {text?.ourmision?.[items.section]?.[items.descKey]}
                            </div>
                    </div>
                      ))
                    }
                </div>
            </div>
        </div>

        <div className="our-vistion w-full mt-5">
           <h1 className='text-center' style={{fontWeight : "bolder"}} data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"><span className='text-pink-500' style={{fontWeight : "bolder"}} data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="300"
            data-aos-easing="ease-in-out">Our</span> Vistion</h1>
           <p className='text-center max-w-4xl mx-auto' data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
            data-aos-easing="ease-in-out">
            {text?.our_vision?.vision_desc}
           </p>
        </div>
      </div>
    </Layout>
  )
}

export default ABout
