import mongoose  from "mongoose";
const   {ObjectId} = mongoose.Schema.Types

const bikeSchema =  new mongoose.Schema({

    admin:{
        type:ObjectId,
         ref:'User'
    },

    brand:{
        type:String,
        required:true,
    },
    model:{
        type:String,
        required:true
    },

    image:{
        type:String,
         required:true
    },

    year:{
        type:Number,
        required:true,
    },

    pricePerDay:{
        type:Number,
        required:true,
    },

    location:{
        type:String,
        required:true
    },

    isAvaliable:{
        type:Boolean,
        default:true,
    }
    


},{timestamps:true})


const bike = mongoose.model('Bike',bikeSchema)

export default bike;