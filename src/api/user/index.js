import { Router } from 'express'
import findAll from './controller/findAll'
import create from './controller/create'

const router = Router()

router.post('/findAll', findAll)
router.post('/create', create)

export default router
