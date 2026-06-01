import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'
import{toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom";


axios.defaults.baseURL = import.meta.env.VITE_BASE_URL
export const AppContext = createContext();

export const AppProvider = ({children})=>{

    
    const navigate = useNavigate()

    const[token,setToken] = useState(null)
    const[user,setUser] = useState(null)
    const[isAdmin,setIsAdmin] = useState(false)
    const[showLogin,setShowLogin] = useState(false)
    const[pickupDate,setPickupDate] = useState('')
    const[returnDate,setReturnDate] = useState('')

    const [bikes,setBikes] = useState([])


    // function to check  userlogin or not

    const fetchUser = async ()=>{
        try {
            
         const {data} =  await axios.get('/api/user/data')
         if(data.success){
            setUser(data.user)
            setIsAdmin(data.user?.role === 'admin')
         }else{

            navigate('/')
         }
        } catch (error) {

            toast.error(error.message)
            
        }
    }


    //function to fetch all bikes

     const fetchBikes =  async()=>{

        try {
           const {data} = await axios.get('/api/user/bikes')
           data.success?setBikes(data.bikes) : toast.error(data.message)
        } catch (error) {
            toast.error(error.message)
            
        }


     }

     // function to logout user

     const logout = ()=>{
        localStorage.removeItem('token')
        setToken(null)
        setUser(null)
        setIsAdmin(false)
        axios.defaults.headers.common['Authorization'] = ''
        toast.success('you have been logged out')

     }


// useffect  for token

useEffect(()=>{

const token = localStorage.getItem('token')
setToken(token)
fetchBikes()
},[])


// useffect for user dat

useEffect(()=>{
if(token){
    axios.defaults.headers.common['Authorization'] = `${token}` 
    fetchUser()
}
},[token])
    const value = {
        navigate,axios, user,setUser,
        token, setToken, isAdmin, setIsAdmin,
        fetchUser,showLogin,setShowLogin,logout,fetchBikes,
        bikes,setBikes,pickupDate, setPickupDate, returnDate, setReturnDate
        
        
    
    }
    return <AppContext.Provider value={value}>
        {children}

    </AppContext.Provider>


}

export const useAppContext =()=>{

    return useContext(AppContext)
}