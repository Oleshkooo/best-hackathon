import { type Transaction } from '@prisma/client'
import { type RequestHandler } from 'express'

import { prisma } from '@/prisma'

interface Req {
    transactionId: string
}
interface Res {
    message: string
    data?: Transaction
}

export const put: RequestHandler = async (req, res) => {
    try {
        const { transactionId } = req.body as Req

        // check if id is valid
        if (transactionId == null || transactionId === '') {
            return res.status(400).send({
                message: 'Неправильний ID',
            } satisfies Res)
        }

        // find transaction by id
        const transaction = await prisma.transaction.findUnique({
            where: {
                id: transactionId,
            },
        })

        // check if transaction exists
        if (transaction === null) {
            return res.status(400).send({
                message: 'Транзакцію не знайдено',
            } satisfies Res)
        }

        // update transaction
        const newTransaction = await prisma.transaction.update({
            where: {
                id: transactionId,
            },
            data: transaction,
        })

        return res.status(200).send({
            message: 'Транзакцію відредаговано',
            data: newTransaction,
        } satisfies Res)
    } catch (err) {
        return res.status(500).send({
            message: 'Помилка сервера',
        } satisfies Res)
    } finally {
        res.end()
    }
}
