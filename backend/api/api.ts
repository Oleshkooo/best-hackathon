import { Router } from 'express'

import { loginRouter } from './login'
import { registerRouter } from './register'
import { userRouter } from './user'

export const apiRouter: Router = Router()

apiRouter.use('/login', loginRouter)
apiRouter.use('/register', registerRouter)
apiRouter.use('/user', userRouter)
