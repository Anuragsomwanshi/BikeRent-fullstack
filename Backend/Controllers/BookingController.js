import Bike from "../Models/Bike.js";
import Booking from "../Models/Bookings.js";

const checkAvailabe = async (bike,pickupDate,returnDate)=>{

    const bookings = await Booking.find({

        bike,
        pickupDate:{$lte:returnDate},
        returnDate:{$gte:pickupDate},
    })
    
    return bookings.length === 0;
}


//check avaliability

export const  checkAvailiblityofBike = async (req,res)=>{
    try {
        
        const {location,pickupDate,returnDate} = req.body;
         const Bikes = await Bike.find({location,isAvaliable:true})


         const availablebikepromise = bikes.map(async(bike)=>{
          const isAvailable =  await checkAvailabe(bike._id,pickupDate,returnDate)

          return {...bike._doc, isAvailable:isAvailable}
         })

         let availableBike = await Promise.all(availablebikepromise)
         availableBike = availableBike.filter(bike => bike.isAvailable === true)

         res.json({success:true,availableBike})
    } catch (error) {
        console.log(error.message)
        return res.json({success:false,message:error.message})
        
    }

}



//create booking

export const  createBooking = async(req,res)=>{
    try {
        const {_id} = req.user;
        const{bike,pickupDate,returnDate,} = req.body;

        const isAvailable = await checkAvailabe(bike,pickupDate,returnDate)
        if(!isAvailable){
            return res.json({success:false,message:"bike is not available"})
        }

        const bikeData = await  Bike.findById(bike)

        const picked = new Date(pickupDate);
        const returned = new Date(returnDate);
        const noOfDays = Math.ceil((returned - picked)/(1000*60*60*24))
        const price = bikeData.pricePerDay * noOfDays;

        await Booking.create({bike,admin:bikeData.admin,user:_id,pickupDate,returnDate,price})

        res.json({success:true,message:"Booking Created"})
    } catch (error) {

        console.log("CREATE BOOKING ERROR:", error);

        return res.json({
            success:false,
            message:error.message
        });
    }
}


// list userbookings


export const getUserBookings = async(req,res)=>{
    try {
         const {_id} = req.user;
         const bookings = await Booking.find({user:_id}).populate("bike").sort
         ({createdAt: 1})
         res.json({success:true,bookings})
        
    } catch (error) {
        
        res.json({success:false,message:error.message})
        
    }
}


// admin bookings



export const getAdminBookings = async(req,res)=>{
    try {
         
        if(req.user.role!=='admin'){
            return res.json({success:false,message:"unauthorized"})
        }
        
        const bookings = await Booking.find({admin:req.user._id}).populate('bike user').select("-user.password").sort({createdAt:-1})
        res.json({success:true,bookings})
    } catch (error) {
        
        res.json({success:false,message:error.message})
        
    }
}

// to changeBooking status



export const changeBookingStatus = async(req,res)=>{
    try {
        
         const {_id} = req.user;
         const {bookingId,status} = req.body
         const booking = await Booking.findById(bookingId)

         if(booking.admin.toString() !==_id.toString()){
            return res.json({success:false,message:"unauthorized"})
         }

         booking.status = status;
         await booking.save();

         res.json({success:true,message:"status updated"})
    } catch (error) {
        
        res.json({success:false,message:error.message})
        
    }
}




