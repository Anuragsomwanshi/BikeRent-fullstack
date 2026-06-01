import express from 'express'
import { auth } from '../Middleware/Auth.js';
import { addbike, BikeAvaliable, changeRoleToAdmin, DeleteBike, getAdminBikes, getAdminData, updateUserImg } from '../Controllers/AdminController.js';
import upload from '../Middleware/Multer.js';

const adminRouter = express.Router();

adminRouter.post('/change-role',auth,changeRoleToAdmin)
adminRouter.post('/add-bike',upload.single("image"),auth,addbike)
adminRouter.get('/bikes',auth,getAdminBikes)
adminRouter.post('/toggle-bike',auth,BikeAvaliable)
adminRouter.post('/delete-bike',auth,DeleteBike)

adminRouter.get('/admindash',auth,getAdminData)
adminRouter.post('/update-image',upload.single("image"),auth,updateUserImg)

export default adminRouter;

