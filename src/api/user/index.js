import { Router } from 'express'
import { findAll, create } from './user.controller'

const router = Router()

router.post('/findAll', findAll)
router.post('/create', create)

export default router
