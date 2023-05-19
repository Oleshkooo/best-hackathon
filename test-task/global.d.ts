import { type Transaction, type User } from '@prisma/client'
import { type NextResponse } from 'next/server'

declare module '*?inline' {
    const src: string
    export default src
}

type APIHandler<T> = (req: NextRequest, res: NextResponse) => NextResponse<T>

type FullUser = User & {
    transactions: Transaction[]
}
