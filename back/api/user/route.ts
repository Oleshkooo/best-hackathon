import { Router } from 'express'

import { get } from './get'

export const userRouter: Router = Router()

userRouter.get('/', get)
