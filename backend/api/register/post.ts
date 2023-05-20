import { type RequestHandler } from 'express'

import { prisma } from '@/prisma'
import { type FullUser } from '@/types'

interface Req {
    username: string
    email: string
    password: string
}
interface Res {
    message: string
    data?: FullUser
}

export const post: RequestHandler = async (req, res) => {
    try {
        const { username, email, password } = req.body as Req

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
            include: {
                transactions: true,
            },
        })

        // chcek if email or username already exists
        if (emailExists !== null || usernameExists !== null) {
            return res.status(400).send({
                message: 'E-mail або логін вже зайнятий',
            } satisfies Res)
        }

        // create new user
        const user = await prisma.user.create({
            data: {
                username,
                email,
                password,
            },
        })

        const returnUser: FullUser = {
            ...user,
            transactions: [],
        }

        res.status(200).send({
            message: 'Реєстрація успішна',
            data: returnUser,
        } satisfies Res)
    } catch (error) {
        return res.status(500).send({
            message: 'Помилка сервера',
        } satisfies Res)
    } finally {
        res.end()
    }
}
