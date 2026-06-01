import React, { useEffect, useState } from 'react'
import { admindata, assets } from '../../assets/assets'
import Title from '../../components/Admin/Title'
import { useAppContext } from '../../Context/Appcontext'
import toast from 'react-hot-toast'


const Admin = () => {

  const {axios,isAdmin} = useAppContext()


  const [data,setData] = useState({
    totalBikes:0,
    totalBookings:0,
    pendingBookings:0,
    completedBookings:0,
    recentBookings:[],
    monthlyRevinew:0,
  })


const admincards = [
  {
    title:"Total Bikes",
    value:data.totalBikes,
    icon:assets.coloredbikeIcon,
  },

  {
    title:"Total Bookings",
    value:data.totalBookings,
    icon:assets.coloredlistIcon,
  },

 
  {
    title:"Pending Bookings",
    value:data.pendingBookings,
    icon:assets.coloredbikeIcon,
  },


  {
    title:"Confirmed",
    value:data.completedBookings,
    icon:assets.coloredlistIcon,

  },
]

const fetchAdmindashData = async()=>{

  try {
    
    const {data} = await axios.get('/api/admin/admindash')
    if(data.success){
      setData(data.admindata)
    }else{

    

      toast.error(data.message)
    }
  } catch (error) {

    toast.error(error.message)
    
  }


}
  useEffect(() => {
    if(isAdmin){
      fetchAdmindashData()

    }
  
}, [isAdmin])
  return (
    <div className='px-4 pt-10 md:px-10 flex-1'>

      <Title title="Admin" subTitle="overview of bike data" /> 


      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 max-w-3xl' >

        {admincards.map((card,index)=>(

          <div key={index} className='flex gap-2 items-center justify-between p-4 rounded-md border border-borderColor'>

            <div>
              <h1 className='text-xs text-white'>{card.title}</h1>
              <p className='text-lg font-bold text-black'>{card.value}</p>
            </div>

            <div className='flex items-center justify-center w-10 h-10 rounded-full bg-blue-300'>
              <img src={card.icon} alt="" className='h-4 w-4' />

            </div>
            

          </div>
        ))}

      </div>


      <div className='flex flex-wrap items-start gap-6 mb-8 w-full'>

        <div className='p-4 md:p-6 border border-borderColor rounded-md max-w-lg w-full'>
          <h1>Recent Bookings</h1>
          <p>Latest customer Bookings</p>
          {data.recentBookings.map((booking,index)=>(
            <div key={index} className='mt-4 flex items-center justify-between'>
              <div className='flex items-center gap-2'>

                <div className='hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-blue-300'>
                  <img src={assets.coloredlistIcon} alt="" className='h-5 w-5' />
                </div>

                <div>
                  <p>{booking.bike.brand} {booking.bike.model} </p>
                  <p className='text-sm text-white'>{booking.createdAt.split('T')[0]}</p>
                </div>

              </div>

              <div className='flex items-center gap-2 font-medium'>
                <p className='text-sm text-gray-300'>{booking.price}</p>
                <p className='px-3 py-0.5 border border-borderColor rounded-full text-sm'>{booking.status}</p>

              </div>

            </div>
          ))}

        </div>
        
      </div>
      


    </div>
  )
}

export default Admin