import path from 'path'

import { config } from 'dotenv'

// env
const DEFAULT_ENV_FILE = '.env'
const NODE_ENV = process.env.NODE_ENV ?? 'production'

config({
    path: DEFAULT_ENV_FILE,
})
config({
    path: `${DEFAULT_ENV_FILE}.${NODE_ENV}`,
})

// global
export const isProduction: boolean = process.env.NODE_ENV === 'production'
export const isDevelopment: boolean = process.env.NODE_ENV === 'development'
export const PORT = process.env.PORT ?? 4000

// express
export const CLIENT_DIR = path.join(__dirname, 'static', 'dist')
// export const CLIENT_PUBLIC_DIR = `${CLIENT_DIR}/public`
export const WEBSITE_PATH = `${CLIENT_DIR}/index.html`
