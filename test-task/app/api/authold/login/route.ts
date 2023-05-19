import { type User } from '@prisma/client'
import { NextResponse } from 'next/server'

import { type APIHandler } from '@/global'
import { prisma } from '@/server/db/prisma'

interface ReqBody {
    username: string
    password: string
}

export interface ResData {
    status: number
    error: boolean
    message: string
    data?: User
}

export const POST: APIHandler<ResData> = async req => {
    const { username, password } = (await req.json()) as ReqBody

    const isEmail = username.includes('@')

    const user = await prisma.user.findUnique({
        where: {
            [isEmail ? 'email' : 'username']: username,
        },
    })

    if (user === null || user.password !== password) {
        return NextResponse.json({
            status: 400,
            error: true,
            message: 'Неправильний логін або пароль',
        })
    }

    return NextResponse.json({
        status: 200,
        error: false,
        message: 'Успішний вхід',
        data: user,
    })
}
