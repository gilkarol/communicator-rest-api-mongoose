import { Router } from 'express'

import { getMessages } from '../controllers/message'
import isAuth from '../middleware/is-auth'

const router = Router()

router.get('/:userId', isAuth, getMessages)

export default router