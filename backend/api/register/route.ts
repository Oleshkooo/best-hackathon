import { Router } from 'express'

import { post } from './post'

export const registerRouter: Router = Router()

registerRouter.post('/', post)
