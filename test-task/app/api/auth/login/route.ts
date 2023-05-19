import { NextResponse } from 'next/server'

import { prisma } from '@/server/db/prisma'

interface ReqBody {
    username: string
    password: string
}

export const POST: APIHandler = async req => {
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
            message: 'Incorrect username or password',
        })
    }

    return NextResponse.json({
        status: 200,
        error: false,
        message: 'Login successful',
        data: user,
    })
}
