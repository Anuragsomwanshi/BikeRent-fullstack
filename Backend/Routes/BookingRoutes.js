import express from 'express'
import { changeBookingStatus, checkAvailiblityofBike, createBooking, getAdminBookings, getUserBookings} from '../Controllers/BookingController.js'
import { auth } from '../Middleware/Auth.js'
 const bookingRouter = express.Router()

 bookingRouter.post('/check-availability',checkAvailiblityofBike)
 bookingRouter.post('/create',auth,createBooking)
 bookingRouter.get('/admin',auth,getAdminBookings)
 bookingRouter.post('/change-status',auth,changeBookingStatus)
 bookingRouter.get('/user', auth, getUserBookings)
 

 export default bookingRouter;