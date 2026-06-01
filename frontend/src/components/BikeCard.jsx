import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const BikeCard = ({bike}) => {

    const navigate = useNavigate()
  return (
    <div  onClick={()=>{navigate(`/bike-details/${bike._id}`)}} className=' group rounded-xl overflow-hidden shadow-lg bg-orange-200 cursor-pointer'>


        <div className='releative h-44 overflow-hidden '>
            <img src={bike.image} alt="bike image"  className=' w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' />

            
        </div>

        <div className='p-4 sm:p-5'>

            <div className='flex justify-between items-start mb-2' >

                <div>
                    <h3 className='text-lg font-medium' >
                        {bike.brand} {bike.model}
                    </h3>
                        <p className='text-muted-foreground  text-sm'>{bike.year}</p>
                        <p>{bike.pricePerDay}/day</p>
                </div>

            </div>

            <div className='mt-4 grid grid-cols-2 gap-y-2 text-black' >
                

                <div className='flex items-center text-sm'>
                    <img src={assets.location_icon} alt="" className='h-4 mr-2' />
                    <span>{bike.location}</span>
                    
                </div>

            </div>

        </div>

    </div>
  )
}

export default BikeCard