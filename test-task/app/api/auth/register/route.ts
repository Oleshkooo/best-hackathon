import { type User } from '@prisma/client'
import { NextResponse } from 'next/server'

import { type ApiHandler, type ApiResponse } from '@/global'
import { prisma } from '@/server/db/prisma'

interface ReqBody {
    username: string
    email: string
    password: string
}

export type ResData = ApiResponse<User>

export const POST: ApiHandler<ResData> = async req => {
    const { username, email, password } = (await req.json()) as ReqBody

    // find user by email
    const emailExists = await prisma.user.findUnique({
        where: {
            email,
        },
    })
    // find user by username
    const usernameExists = await prisma.user.findUnique({
        where: {
            username,
        },
    })

    // chcek if email or username already exists
    if (emailExists !== null || usernameExists !== null) {
        const res: ResData = {
            status: 400,
            error: true,
            message: 'E-mail або логін вже зайнятий',
        }
        return NextResponse.json(res)
    }

    // create new user
    const user = await prisma.user.create({
        data: {
            username,
            email,
            password,
        },
    })

    const res: ResData = {
        status: 200,
        error: false,
        message: 'Реєстрація успішна',
        data: user,
    }
    return NextResponse.json(res)
}
