import { NextResponse } from 'next/server'

import { type Transaction, type User } from '@prisma/client'

import { type ApiHandler, type ApiResponse } from '@/global'
import { prisma } from '@/server/db/prisma'

export interface PostReqBody {
    userId: string
    transaction: Transaction
}
export type PostResData = ApiResponse<
    User & {
        transactions: Transaction[]
    }
>

export interface PutReqBody {
    transactionId: string
    transaction: Transaction
}
export type PutResData = ApiResponse<Transaction>

// POST

export const POST: ApiHandler<PostResData> = async req => {
    const { userId, transaction } = (await req.json()) as PostReqBody

    // check if id is valid
    if (userId == null || userId === '') {
        const res: PostResData = {
            status: 400,
            error: true,
            message: 'Неправильний ID',
        }
        return NextResponse.json(res)
    }
    // check if transaction is valid
    if (transaction == null) {
        const res: PostResData = {
            status: 400,
            error: true,
            message: 'Неправильна транзакція',
        }
        return NextResponse.json(res)
    }

    // find user by id
    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
    })

    // check if user exists
    if (user === null) {
        const res: PostResData = {
            status: 400,
            error: true,
            message: 'Користувача не знайдено',
        }
        return NextResponse.json(res)
    }

    // add transaction to user
    const newUser = await prisma.user.update({
        where: {
            id: userId,
        },
        data: {
            transactions: {
                create: transaction,
            },
        },
        include: {
            transactions: true,
        },
    })

    // update user balance
    const userBalance = newUser.transactions.reduce((acc, transaction) => {
        if (transaction.type === 'INCOME' || transaction.type === 'DEPOSIT') {
            return acc + transaction.amount
        }
        return acc - transaction.amount
    }, 0)

    await prisma.user.update({
        where: {
            id: userId,
        },
        data: {
            balance: userBalance,
        },
    })

    const res: PostResData = {
        status: 200,
        error: false,
        message: 'Транзакцію додано',
        data: newUser,
    }
    return NextResponse.json(res)
}

// PUT

export const PUT: ApiHandler<PostResData> = async req => {
    const { transactionId } = (await req.json()) as PutReqBody

    // check if id is valid
    if (transactionId == null || transactionId === '') {
        const res: PostResData = {
            status: 400,
            error: true,
            message: 'Неправильний ID',
        }
        return NextResponse.json(res)
    }

    // find transaction by id
    const transaction = await prisma.transaction.findUnique({
        where: {
            id: transactionId,
        },
    })

    // check if transaction exists
    if (transaction === null) {
        const res: PostResData = {
            status: 400,
            error: true,
            message: 'Транзакцію не знайдено',
        }
        return NextResponse.json(res)
    }

    // update transaction
    const newTransaction = await prisma.transaction.update({
        where: {
            id: transactionId,
        },
        data: transaction,
    })

    const res: PutResData = {
        status: 200,
        error: false,
        message: 'Транзакцію відредаговано',
        data: newTransaction,
    }
    return NextResponse.json(res)
}

// DELETE

export const DELETE: ApiHandler<PostResData> = async req => {
    const { transactionId } = (await req.json()) as PutReqBody

    // check if id is valid
    if (transactionId == null || transactionId === '') {
        const res: PostResData = {
            status: 400,
            error: true,
            message: 'Неправильний ID',
        }
        return NextResponse.json(res)
    }

    // find transaction by id
    const transaction = await prisma.transaction.findUnique({
        where: {
            id: transactionId,
        },
    })

    // check if transaction exists
    if (transaction === null) {
        const res: PostResData = {
            status: 400,
            error: true,
            message: 'Транзакцію не знайдено',
        }
        return NextResponse.json(res)
    }

    // delete transaction
    await prisma.transaction.delete({
        where: {
            id: transactionId,
        },
    })

    const res: PutResData = {
        status: 200,
        error: false,
        message: 'Транзакцію видалено',
        data: transaction,
    }
    return NextResponse.json(res)
}
