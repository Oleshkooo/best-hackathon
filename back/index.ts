import { PORT } from '@/config'
import { server } from '@/server'

const start = async () => {
    server.listen(PORT, () => {
        console.log(`[SERVER] Listening on port ${PORT}`)
    })
}

start().catch(error => {
    console.error(error)
})
