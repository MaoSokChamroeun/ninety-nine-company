import React from 'react'
import '../index.css'
import '../App.css'
import '../css/style.css'
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
const WorkFlow = () => {
  const { text,} = useContext(LanguageContext);
  return (
    <div className="container-fluid mt-5 font-stack"  style={{
            backgroundColor: "var(--bg-color)",
            color: "var(--nav-text)",
          }} >
      <h1 className="text-center text-4xl font-black font-sans font-semibold">
        {text.workflow}
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
            <h2 className="text-center text-blue-500 font-black text-lg mb-4" >
              {text.befor_boost}
            </h2>
           
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-500">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                {text.check}
              </li>
              <li className="flex items-center gap-2 text-gray-500">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                Checking Ads Account
              </li>
              <li className="flex items-center gap-2 text-gray-500">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                Checking content/video quality before boosting  
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
            <h2 className="text-center text-blue-500 font-semibold text-lg mb-4" 
            >
              During Boosting
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-500">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                Checking Ads Performance
              </li>
              <li className="flex items-center gap-2 text-gray-500">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                Adjusting Performance
              </li>
              <li className="flex items-center gap-2 text-gray-500">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                Reporting to client
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
            <h2 className="text-center text-blue-500 font-semibold text-lg mb-4">
              After Boosting
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-500">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                Setting next objectives
              </li>
              <li className="flex items-center gap-2 text-gray-500">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                Report to client
              </li>
              <li className="flex items-center gap-2 text-gray-500">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                Research & Development (R&D)
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default WorkFlow
