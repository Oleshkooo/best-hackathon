import { type User } from '@prisma/client'
import { NextResponse } from 'next/server'

import { type APIHandler } from '@/global'
import { prisma } from '@/server/db/prisma'

interface ReqBody {
    username: string
    email: string
    password: string
}

export interface ResData {
    status: number
    error: boolean
    message: string
    data?: User
}

export const POST: APIHandler<ResData> = async req => {
    const { username, email, password } = (await req.json()) as ReqBody

    const emailExists = await prisma.user.findUnique({
        where: {
            email,
        },
    })
    const usernameExists = await prisma.user.findUnique({
        where: {
            username,
        },
    })

    if (emailExists !== null || usernameExists !== null) {
        return NextResponse.json({
            status: 400,
            error: true,
            message: 'E-mail або логін вже зайнятий',
        })
    }

    const user = await prisma.user.create({
        data: {
            username,
            email,
            password,
        },
    })

    return NextResponse.json({
        status: 200,
        error: false,
        message: 'Реєстрація успішна',
        data: user,
    })
}
