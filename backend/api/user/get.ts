import { type RequestHandler } from 'express'

import { prisma } from '@/prisma'
import { type FullUser } from '@/types'

interface Req {
    id: string
}
interface Res {
    message: string
    data?: FullUser
}

export const get: RequestHandler = async (req, res) => {
    try {
        const { id } = req.body as Req

        // check if id is valid
        if (id == null || id === '') {
            return res.status(400).send({
                message: 'Неправильний ID',
            } satisfies Res)
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
            return res.status(400).send({
                message: 'Користувача не знайдено',
            } satisfies Res)
        }

        return res.status(200).send({
            message: 'Користувача знайдено',
            data: user,
        } satisfies Res)
    } catch (error) {
        return res.status(500).send({
            message: 'Помилка сервера',
        } satisfies Res)
    } finally {
        res.end()
    }
}
