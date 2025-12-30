import React from 'react'
import Cover from '../../assets/poster/boost_live_2.jpg'
import BoostTiktok from '../BoostTiktok'
const DetailsTiktok = (props) => {
  return (
      <>
       <div className='container'>
        <div className="max-w-7xl mx-auto flex flex-1 items-center justify-center gap-4 ">     
        <div className='w-[750px]'>
            <img src={props.image} alt="" className='w-full rounded-2xl' />
        </div>
        <div className='text-center w-[750px]'>
            <p>{props.title}</p>
        </div>
        </div>

         <div className="max-w-7xl mx-auto flex flex-1 items-center justify-center gap-4 flex-row-reverse -mt-[10px]">     
        <div className='w-[750px]'>
            <img src={props.image2} alt="" className='w-full rounded-2xl' />
        </div>
        <div className='text-center w-[750px]'>
            <p>{props.title2}</p>
        </div>
        </div>
       </div>
      </>
        
  )
}

export default DetailsTiktok
