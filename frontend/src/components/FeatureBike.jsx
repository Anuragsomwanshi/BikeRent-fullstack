import React from 'react'
import Title from './Title'

import BikeCard from './BikeCard'
import { useAppContext } from '../Context/Appcontext'

const FeatireBike = () => {

  const {bikes} = useAppContext()
  
  return (
    <div className='flex flex-col items-center  py-24 px-6 md:px-16 lg:px-24 xl:px-32'>

        <div>
            <Title title='Featured Bikes' subTitle="Explore Premium Bikes" />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18'>
            {
                bikes.map((bike,index)=>(
                  <div key={index}>
                    <BikeCard bike={bike} />

                    
                  </div>
                ))
            }

        </div>

        
    </div>
  )
}

export default FeatireBike