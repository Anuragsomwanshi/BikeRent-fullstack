import mongoose  from "mongoose";
const   {ObjectId} = mongoose.Schema.Types

const bookingSchema =  new mongoose.Schema({

bike:{
    type:ObjectId,
    ref:"Bike",
    required:true
},

user:{
    type:ObjectId,
    ref:"User",
    required:true

},

admin:{
    type:ObjectId,
    ref:"User",
    required:true
},

pickupDate:{
    type:Date,
    required:true,
},

returnDate:{
    type:Date,
    required:true,

},

status:{
    type:String,
    enum:["Pending","Confirmed","Cancelled"],default:"Pending",
},
price:{
    type:Number,
    reqired:true
}


},{timestamps:true})


const Booking = mongoose.model('Booking',bookingSchema)

export default Booking;