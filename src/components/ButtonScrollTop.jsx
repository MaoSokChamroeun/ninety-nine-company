import React from 'react'
import { Link } from 'react-router-dom'
import IconTop from '../assets/icon_GIF/up-arrow.gif'
const ButtonScrollTop = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // optional
    })
  }

  return (
    <div className="w-full mt-10">
      <div className="max-w-7xl mx-auto text-center flex items-center justify-center">
        <Link to="/" onClick={handleScrollTop}  >
          <img src={IconTop} width={80} alt="" className='rounded-full bg-black'  />
        </Link>
      </div>
    </div>
  )
}

export default ButtonScrollTop
