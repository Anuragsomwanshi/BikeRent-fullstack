import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/Database.js';
const app = express()
const PORT = process.env.PORT || 3000;

import userRouter from './Routes/userRoutes.js';
import adminRouter from './Routes/AdminRoutes.js';
import bookingRouter from './Routes/BookingRoutes.js';


app.use(cors());
app.use(express.json());
 await connectDB()



app.get('/',(req,res)=>{

    res.send("  this is index.js file")
})

app.use('/api/user',userRouter)
app.use('/api/admin',adminRouter)
app.use('/api/bookings',bookingRouter)


app.listen(PORT,()=>{

    console.log("server started at port",PORT)

})