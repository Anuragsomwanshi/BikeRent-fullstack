
import User from "../Models/User.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Bike from '../Models/Bike.js'


 //jwt token

 const generateToken = ( userId)=>{
    const payload = {userId};
    return jwt.sign({userId},process.env.JWT_SECRET)

 }
export const register = async (req,res)=>{

    try {
        const {name,email,password} = req.body

        if(!name || !email || !password || password.length < 8){

            console.log(password.length)
            return res.json({success:false,message:"Fill all the fields"})

           
            
        }

        const  userExists =  await User.findOne({email})
        if(userExists){
            return res.json({success:false,message:'User already exists'})
        }

        const hashedPassword = await bcrypt.hash(password,10)
        const user = await User.create({name,email,password:hashedPassword})
        const token = generateToken(user._id.toString())
        res.json({success:true,token})


    } catch (error) {
        console.log(error.message)
        res.json({success:false,message:error.message})
    }


}


// Login user

 export const  LoginUser  = async (req,res) =>{

    try{
          const {name,email,password} = req.body

          const user  = await User.findOne({email})
          if(!user){
            return  res.json({success:false,message:"user not found"})
          }

          const  isMatch = await bcrypt.compare(password,user.password)

          if(!isMatch){
            return res.json({success:false, message:"Invalid credientials"})
          }

           const token = generateToken(user._id.toString())
            res.json({success:true,token})




        
    } catch (error) {
         console.log(error.message)
        res.json({success:false,message:error.message})
        
    }
}

export const getUserData = async(req,res) =>{

        try {
            const user = req.user;
            res.json({success:true,user})
        } catch (error) {
            console.log(error.message)
        res.json({success:false,message:error.message})
        }


    }

    // get all bikes on frontend



    export const getBikes = async(req,res) =>{

        try {
            const bikes = await Bike.find({isAvaliable:true})
            res.json({success:true , bikes})
        } catch (error) {
            console.log(error.message)
        res.json({success:false,message:error.message})
        }


    }



 

