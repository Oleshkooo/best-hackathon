import { NextResponse } from 'next/server'

import { type Transaction, type User } from '@prisma/client'

import { type ApiHandler, type ApiResponse } from '@/global'
import { prisma } from '@/server/db/prisma'

interface ReqBody {
    id: string
}

type ResData = ApiResponse<
    User & {
        transactions: Transaction[]
    }
>

export const POST: ApiHandler<ResData> = async req => {
    const { id } = (await req.json()) as ReqBody

    // check if id is valid
    if (id == null || id === '') {
        const res: ResData = {
            status: 400,
            error: true,
            message: 'Неправильний ID',
        }
        return NextResponse.json(res)
    }

    // find user by id
    const user = await prisma.user.findUnique({
        where: {
            id,
        },
        include: {
            transactions: true,
        },
    })

    // check if user exists
    if (user === null) {
        const res: ResData = {
            status: 400,
            error: true,
            message: 'Користувача не знайдено',
        }
        return NextResponse.json(res)
    }

    const res: ResData = {
        status: 200,
        error: false,
        message: 'Користувача отримано',
        data: user,
    }
    return NextResponse.json(res)
}
