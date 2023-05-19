import { type Transaction, type User } from '@prisma/client'
import { type NextResponse } from 'next/server'

declare module '*?inline' {
    const src: string
    export default src
}

type ApiHandler<T> = (req: Request) => NextResponse<T>

interface ApiResponse<T> {
    status: number
    error: boolean
    message: string
    data?: T
}

type FullUser = User & {
    transactions: Transaction[]
}
