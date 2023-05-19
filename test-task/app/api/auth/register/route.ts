import { NextResponse } from 'next/server'

import { prisma } from '@/server/db/prisma'

interface ReqBody {
    username: string
    email: string
    password: string
}

export const POST: APIHandler = async req => {
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
            message: 'Email or username already exists',
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
        message: 'Registration successful',
        data: user,
    })
}
