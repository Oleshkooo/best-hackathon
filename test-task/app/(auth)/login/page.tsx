'use client'

import { type NextPage } from 'next'
import { signIn } from 'next-auth/react'
import { toast } from 'react-hot-toast'

import { type ResData } from '@/app/api/auth/login/route'
import { Button, Input, Link } from '@/components'
import { useInput } from '@/hooks'
import { Fetch } from '@/utils'

import s from '../Auth.module.scss'

const Login: NextPage = () => {
    const { value: username, setValue: setUsername, reset: resetUsername } = useInput('')
    const { value: password, setValue: setPassword, reset: resetPassword } = useInput('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const res = await Fetch<ResData>('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            }),
        })

        if (res.error) {
            toast.error(res.message)
            return
        }
        if (res.data === undefined) {
            toast.error('Виникла помилка')
            return
        }

        toast.success(res.message)

        resetUsername()
        resetPassword()

        void signIn('credentials', {
            username,
            password,
            redirect: true,
            callbackUrl: '/dashboard',
        })
    }

    return (
        <main className={s.Auth}>
            <div className={s.blur}>
                <section>
                    <h2>Вхід в обліковий запис</h2>
                    <form onSubmit={handleSubmit}>
                        <Input
                            value={username}
                            setValue={setUsername}
                            name="username"
                            type="text"
                            placeholder="Ім'я користувача або E-mail"
                            required
                        />
                        <Input
                            value={password}
                            setValue={setPassword}
                            name="password"
                            type="password"
                            placeholder="Пароль"
                            required
                        />
                        <p className={s.account}>
                            Ще немає облікового запису? <Link to="/register">Зареєструватись</Link>
                        </p>
                        <Button type="submit">Увійти</Button>
                    </form>
                </section>
            </div>
        </main>
    )
}

export default Login
