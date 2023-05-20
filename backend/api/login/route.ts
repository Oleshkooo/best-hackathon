import { Router } from 'express'

import { post } from './post'

export const loginRouter: Router = Router()

loginRouter.post('/', post)
