import React, { useState } from 'react'
import { assets, menuLinks } from '../assets/assets.js'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAppContext } from '../Context/Appcontext.jsx'
import { toast } from 'react-hot-toast'

const Navbar = () => {

  const {setShowLogin,user,logout,isAdmin,axios,setIsAdmin} = useAppContext()

  const location = useLocation
  const [open,setopen] = useState(false)
  const navigate = useNavigate()

  const changeRole = async ()=>{
    try {
     const {data} = await axios.post('/api/admin/change-role')
     if(data.success){
      setIsAdmin(true)
      toast.success(data.message)
     }else{

      toast.error(data.message)
     }
    } catch (error) {
      toast.error(error.message)

      

      
    }
  }


  return (
    <div className={`flex justify-around items-center  h-14 m-7 ${location.pathname === '/' && " bg-blue-700" } ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full" }   bg-white rounded-full `}>
      
        <Link to="/" >
       
        
        <img src={assets.icon}   alt="icon" className='h-8   '/>
        </Link>


        <div className= {`flex gap-23  ${location.pathname === '/' ? " bg-blue-700" :"bg-white" }  `} >
            {menuLinks.map((link,index)=>(

                <Link className=' flex items-center ' key={index} to={link.path} >{link.name}</Link>


            ))}





            <div className='hidden lg:flex  gap-1  border rounded-full   ' >
          <input type="text"  className='w-full bg-transparent outline-none placeholder-gray-500 ' placeholder='search bike' />
          <img className='h-8' src={assets.search} alt="search"/>
          
          </div>

        <div className=' flex items-center gap-2'>
          <button onClick={()=> isAdmin? navigate('/admin') :changeRole() } className='cursor-pointer px-8 py-2  border  rounded-full '>{ isAdmin?'Admin':"List bikes"}</button>
          <button onClick={()=>{ user? logout(): setShowLogin(true)}} className='cursor-pointer  px-8 py-2 bg-orange-200 hover:bg-orange-500 rounded-full '>{user?'Logout': 'Login'}</button>
        </div>




        </div>
        
        <button className=' sm:hidden  a  cursor-pointer ' aria-label='menu'  onClick={()=>setopen(!open)} >
        <img className='h-7' src={open ? assets.close : assets.menu} alt="menu" />
       </button>


        


    </div>
  )
}

export default Navbar