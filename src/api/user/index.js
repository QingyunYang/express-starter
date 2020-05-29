import { Router } from 'express'
import * as controller from './controller'

const router = Router()

router.get('/findAll', controller.findAll)
router.get('/create', controller.create)

export default router
