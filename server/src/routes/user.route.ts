import { Router } from 'express'
import { loginUser } from '../controller/user/login.controller'
import { logout } from '../controller/user/logout.controller'
import { registerUser } from '../controller/user/register.controller'

const userRoute = Router()

userRoute.route('/register').post(registerUser)
userRoute.route('/login').post(loginUser)
userRoute.route('/logout').get(logout)

export default userRoute
