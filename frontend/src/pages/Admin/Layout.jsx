import React, { useEffect } from 'react'
import Navbar from '../../components/Admin/Navbar'
import Sidebar from '../../components/Admin/Sidebar'
import {   Outlet, useNavigate } from 'react-router-dom'
import { useAppContext } from '../../Context/Appcontext'


const Layout = () => {

  const {isAdmin,navigation} = useAppContext()
  const navigate = useNavigate()

  useEffect(()=>{
    if(!isAdmin){
      navigate('/')
    }
  },[isAdmin])
  return (
    <div className='flex flex-col'>

        <Navbar/>
        <div className='flex'>
            <Sidebar/>
            <Outlet/>


        </div>

        
    </div>
  )
}

export default Layout