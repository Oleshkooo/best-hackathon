import { type Transaction } from '@prisma/client'
import { type RequestHandler } from 'express'

import { prisma } from '@/prisma'
import { type FullUser } from '@/types'

interface Req {
    userId: string
    transaction: Transaction
}
interface Res {
    message: string
    data?: FullUser
}

export const post: RequestHandler = async (req, res) => {
    try {
        const { userId, transaction } = req.body as Req

        // check if id is valid
        if (userId == null || userId === '') {
            return res.status(400).send({
                message: 'Неправильний ID',
            } satisfies Res)
        }
        // check if transaction is valid
        if (transaction == null) {
            return res.status(400).send({
                message: 'Неправильна транзакція',
            } satisfies Res)
        }

        // find user by id
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
        })

        // check if user exists
        if (user === null) {
            return res.status(400).send({
                message: 'Користувача не знайдено',
            } satisfies Res)
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

        return res.status(200).send({
            message: 'Транзакцію додано',
            data: newUser,
        } satisfies Res)
    } catch (error) {
        return res.status(500).send({
            message: 'Помилка сервера',
        } satisfies Res)
    } finally {
        res.end()
    }
}
