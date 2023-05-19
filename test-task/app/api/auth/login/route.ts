import { type User } from '@prisma/client'
import { NextResponse } from 'next/server'

import { type ApiHandler, type ApiResponse } from '@/global'
import { prisma } from '@/server/db/prisma'

interface ReqBody {
    username: string
    password: string
}

export type ResData = ApiResponse<User>

export const POST: ApiHandler<ResData> = async req => {
    const { username, password } = (await req.json()) as ReqBody

    // check if username is email
    const isEmail = username.includes('@')

    // find user by username or email
    const user = await prisma.user.findUnique({
        where: {
            [isEmail ? 'email' : 'username']: username,
        },
    })

    // check if user exists and password is correct
    if (user === null || user.password !== password) {
        const res: ResData = {
            status: 400,
            error: true,
            message: 'Неправильний логін або пароль',
        }
        return NextResponse.json(res)
    }

    const res: ResData = {
        status: 200,
        error: false,
        message: 'Успішний вхід',
        data: user,
    }
    return NextResponse.json(res)
}
