import React from 'react'
import '../index.css'
import '../App.css'
import '../css/style.css'
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
const WorkFlow = () => {
  const { text,} = useContext(LanguageContext);
  return (
    <div className="container-fluid mt-15 font-stack"  style={{
            backgroundColor: "var(--bg-color)",
            color: "var(--nav-text)",
          }} >
      <h1 className="text-center text-4xl " style={{fontWeight : 'bolder' , fontSize : '50px'}}>
        <span className='text-pink-500' style={{fontWeight : 'bolder' , fontSize : '50px'}}>Work</span> Flow
      </h1>

      <div className="w-full  py-10">
        <div className="max-w-screen-xl mx-auto 
                        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                        gap-6" >

          <div className=" shadow-md rounded-xl p-6 
                transition-transform duration-300 
                hover:scale-105 hover:shadow-xl hover:cursor-pointer"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="100"
                data-aos-easing="ease-in-out">
            <h2 className=" text-center text-lg mb-4" >
              <span className='text-pink-500' style={{fontWeight : "bolder"}}>{text?.workflow?.beforeboost?.before_title}</span>
            </h2>
           
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-500">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                {text?.workflow?.beforeboost?.check_page}
              </li>
              <li className="flex items-center gap-2 text-gray-500">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                {text?.workflow?.beforeboost?.check_ads}
              </li>
              <li className="flex items-center gap-2 text-gray-500">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                {text?.workflow?.beforeboost?.check_content}  
              </li>
            </ul>
          </div>

          
          <div className=" shadow-md rounded-xl p-6 
                transition-transform duration-300 
                hover:scale-105 hover:shadow-xl hover:cursor-pointer"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="300"
                data-aos-easing="ease-in-out"
                >
            <h2 className="text-center font-semibold text-lg mb-4" 
            >
              <span className='text-pink-500' style={{fontWeight : "bolder"}}>{text?.workflow?.beforeboost?.before_title}</span>
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-500">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                {text?.workflow?.during_boosting?.check_ads_perfor}
              </li>
              <li className="flex items-center gap-2 text-gray-500">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                {text?.workflow?.during_boosting?.adj_perfor}
              </li>
              <li className="flex items-center gap-2 text-gray-500">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                {text?.workflow?.during_boosting?.report_client}
              </li>
            </ul>
          </div>

 
          <div className=" shadow-md rounded-xl p-6 
                transition-transform duration-300 
                hover:scale-105 hover:shadow-xl hover:cursor-pointer"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="500"
                data-aos-easing="ease-in-out">
            <h2 className="text-center  font-semibold text-lg mb-4">
              <span className='text-pink-500' style={{fontWeight : "bolder"}}>{text?.workflow?.during_boosting?.during_title}</span>
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-500">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                {text?.workflow?.after_boosting?.setting_next_objectives}
              </li>
              <li className="flex items-center gap-2 text-gray-500">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                {text?.workflow?.after_boosting?.after_report_client}
              </li>
              <li className="flex items-center gap-2 text-gray-500">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                {text?.workflow?.after_boosting?.research}
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default WorkFlow
