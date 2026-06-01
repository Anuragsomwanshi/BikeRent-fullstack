import express from 'express'
import { getBikes, getUserData,LoginUser, register} from '../Controllers/UserController.js'
import { auth } from '../Middleware/Auth.js'

const userRouter = express.Router()

userRouter.post('/register',register)
userRouter.post('/login',LoginUser)
userRouter.get('/data',auth,getUserData)
userRouter.get('/bikes',getBikes)

export default userRouter;
