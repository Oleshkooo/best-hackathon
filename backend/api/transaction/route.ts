import { Router } from 'express'

import { del } from './del'
import { post } from './post'
import { put } from './put'

export const userRouter: Router = Router()

userRouter.post('/', post)
userRouter.put('/', put)
userRouter.delete('/', del)
