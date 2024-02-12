import { Router } from 'express'
import { general } from '../controller/general/serverStatus.controller'

const generalRoute = Router()

generalRoute.get('/status', general)

export default generalRoute
