import React, { useContext } from "react"
import data from "../data/Service"
import { Link } from "react-router-dom"
import { LanguageContext } from "../context/LanguageContext"
const OurSerive = () => {
  const {text} = useContext(LanguageContext)
  return (
    <div className="container-fluid mx-auto" style={{
            backgroundColor: "var(--nav-bg)",
            color: "var(--nav-text)",
          }}>
      <h1 className="text-center pt-5" style={{fontWeight : 'bolder' , fontSize : '50px'}}><span className='text-pink-500' style={{fontWeight : 'bolder' , fontSize : '50px'}}>Our</span> Service</h1>

      <div className="container-fluid mx-auto mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto" 
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="300"
            data-aos-easing="ease-in-out">
          {
        data.map((service) => (
          <div
            className="bg-white-500 text-center p-2 shadow max-w-md rounded-2xl"
            key={service.id}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
      <div className="icon w-full flex justify-center">
        <span>
          <img src={service.icon} alt='GIF' width={60} className="bg-white-500 shadow p-2 rounded-4xl" />
        </span>
      </div>

      <div className="content mt-3">
         <span className="text-pink-500" style={{fontWeight : "bold"}}>{text?.services?.[service.titleKey.split(".")[1]]?.title}</span>
        <div className="desc m-2 text-center">
          <span className="text-gray-500">{text?.services?.[service.descKey.split(".")[1]]?.desc}</span>
        </div>
        <button>
          <Link to={service.link} className="nav-link text-decoration-none service-bg p-2 rounded-xs" style={{fontSize : '13px'}}>View Details</Link>
        </button>
      </div>
    </div>
  ))
}

        </div>
        
      </div>
    </div>
  )
}

export default OurSerive
