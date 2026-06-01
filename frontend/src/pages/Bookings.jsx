import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'
import Title from '../components/Title'
import { useAppContext } from '../Context/Appcontext'
import { toast } from 'react-hot-toast'
const Bookings = () => {

  const {axios,user} = useAppContext()

  const [booking,setBookings] = useState([])

  const collectBookings =  async()=>{
    

     try {
      const {data} =  await axios.get('/api/bookings/user')
      if(data.success){
        setBookings(data.bookings)
      }
      else{
        toast.error(data.message)
        
      }

      
      
     }catch (error){
  console.log(error);
  console.log(error.response?.data);
  toast.error(error.response?.data?.message || error.message);
}
  }

  

  useEffect(()=>{

   user && collectBookings()


  },[user])
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 text-sm max-w-7xl'>

      <Title  title = 'My Bookings' subTitle = 'Manage your Bike Bookings'  align  = "left" />

      <div>
        {booking.map((booking,index)=>(
          <div key={index} className='grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-borderColor rounded-lg mt-5 first:mt-12'>


            <div className='md:col-span-1'>

              <div className='rounded-md overflow-hidden mb-3'>
                <img src={booking.bike.image} alt=""  className='w-full h-auto aspect-video object-cover'/>

              </div>

              <p className='text-lg font-medium mt-2'>
                {booking.bike.brand} {booking.bike.model}
              </p>

              <p  className='text-gray-300'>{booking.bike.year} {booking.bike.location}</p>

            </div>


            <div className='md:col-span-2'>

              <div className='flex items-center gap-2'>
                <p className='px-3 py-1.5 bg-light rounded'>{index+1}</p>
                <p className={`px-3  py-1 text-xs rounded-full ${booking.status ==='confirmed'?'bg-green-400 text-black-600':'bg-red-400 text-red-600'}`}>{booking.status}</p>
              </div>

              <div className='flex items-start gap-2 mt-3'>
                <img src={assets.clock} alt="" className='w-4 h-5 mt-1' />

                <div>
                  <p className='text-black'>Rental period</p>
                  <p>{booking.pickupDate.split('T')[0]} To {booking.returnDate.split('T')[0]}</p>
                </div>
              </div>


              <div className='flex items-start gap-2 mt-3'>
                <img src={assets.location_icon} alt="" className='w-4 h-5 mt-1' />

                <div>
                  <p className='text-black'>Pickup-location</p>
                  <p>{booking.bike.location}</p>
                </div>
              </div>  

            </div>
            <div className='md:col-span-1 flex flex-col justify-between gap-6'>

              <div className='text-sm text-black text-right'>
                <p>Total price</p>
                <h1 className='text-2xl font-semibold text-primary'>₹{booking.price}</h1>
                <p>Booking on {booking.createdAt.split('T')[0]}</p>
                
              </div>

            </div>


          </div>
        ))}
      </div>

      

    </div>
  )
}

export default Bookings