import { type RequestHandler } from 'express'

import { prisma } from '@/prisma'
import { type FullUser } from '@/types'

interface Req {
    username: string
    password: string
}
interface Res {
    message: string
    data?: FullUser
}

export const post: RequestHandler = async (req, res) => {
    try {
        const { username, password } = req.body as Req

        // check if username is email
        const isEmail = username.includes('@')

        // find user by username or email
        const user = await prisma.user.findUnique({
            where: {
                [isEmail ? 'email' : 'username']: username,
            },
            include: {
                transactions: true,
            },
        })

        // check if user exists and password is correct
        if (user === null || user.password !== password) {
            return res.status(400).send({
                message: 'Неправильний логін або пароль',
            } satisfies Res)
        }

        return res.status(200).send({
            message: 'Успішний вхід',
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
