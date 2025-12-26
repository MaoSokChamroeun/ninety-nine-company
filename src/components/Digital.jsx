import React from 'react'
import '../App.css'
const Digital = () => {
  return (
    <div className='w-full'>
        <div className='mx-auto max-w-7xl bg-gray-800 rounded-lg '>
            <h1 className='text-white text-center'>Digital Marketing</h1>
            <p className='text-gray-300 text-center'>We provide top-notch digital marketing services.</p>


           <div className="w-full flex gap-5">
             <div className='max-w-[640px]'>
              <img src="https://static.vecteezy.com/system/resources/previews/004/864/935/non_2x/woman-presentation-digital-marketing-social-media-concept-vector.jpg" alt="" />
                </div>

            <div className='max-w-[640px] max-h-[120px] mx-auto bg-blue-400'>
              <div className="w-full flex    items-center">
                <div className='w-[120px] h-[120px] bg-pink-500 shadow-lg clip-hexagon mx-auto'></div>
                  <div className='w-[400px] h-[100px] bg-white rounded-4xl'>
                    <p className='text-black text-[20px] font-bold mx-8'>Our Services</p>
                    <p className='text-black text-[13px] mx-8'>We offer a range of services including SEO, social media marketing, content creation, and more to help your business grow online.</p>
                  </div>
              </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Digital
