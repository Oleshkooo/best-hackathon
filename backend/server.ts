import bodyParser from 'body-parser'
import compression from 'compression'
import cors from 'cors'
import express, { type Express } from 'express'
import helmet from 'helmet'

import { apiRouter } from '@/api'
import { CLIENT_DIR, WEBSITE_PATH } from '@/config/env'

const server: Express = express()

try {
    server.use(bodyParser.urlencoded({ extended: true }))
    server.use(bodyParser.json())
    server.use(compression())
    server.use(cors())
    server.use(
        helmet({
            contentSecurityPolicy: false,
        }),
    )

    server.use(express.static(CLIENT_DIR))
    // server.use(express.static(CLIENT_PUBLIC_DIR))

    server.use('/api', apiRouter)

    server.get('*', (req, res) => {
        res.sendFile(WEBSITE_PATH)
    })

    console.log('[SERVER] Initialized')
} catch (error) {
    console.error(error)
}

export { server }
//
