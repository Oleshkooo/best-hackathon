'use client'

import { type NextPage } from 'next'
import { signIn } from 'next-auth/react'
import { toast } from 'react-hot-toast'

import { type ResData } from '@/app/api/register/route'
import { Button, Input, Link } from '@/components'
import { useInput } from '@/hooks'
import { Fetch } from '@/utils'

import s from '../Auth.module.scss'

export const dynamic = 'force-dynamic'

const Register: NextPage = () => {
    const { value: username, setValue: setUsename, reset: resetUsername } = useInput('')
    const { value: email, setValue: setEmail, reset: resetEmail } = useInput('')
    const { value: password, setValue: setPassword, reset: resetPassword } = useInput('')
    const {
        value: passwordConfirm,
        setValue: setPasswordConfirm,
        reset: resetPasswordConfirm,
    } = useInput('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const format = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/

        if (password !== passwordConfirm) {
            toast.error('Паролі не співпадають')
            return
        }

        if (password.length < 8) {
            toast.error('Пароль занадто короткий (менше 8 символів)')
            return
        }

        if (username.length < 8) {
            toast.error('Ім`я занадто коротке (менше 8 символів)')
            return
        }

        if (format.test(username)) {
            toast.error('В імені не повинно бути спеціальних символів')
            return
        }

        const res = await Fetch<ResData>('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                email,
                password,
            }),
        })

        if (res.error) {
            toast.error(res.message)
            return
        }
        if (res.data === undefined) {
            toast.error('Виникла помилка')
        }

        toast.success(res.message)

        resetUsername()
        resetEmail()
        resetPassword()
        resetPasswordConfirm()

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
                    <h2>Реєстрація облікового запису</h2>
                    <form onSubmit={handleSubmit}>
                        <Input
                            value={username}
                            setValue={setUsename}
                            name="username"
                            type="text"
                            placeholder="Ім'я користувача"
                            required
                        />
                        <Input
                            value={email}
                            setValue={setEmail}
                            name="email"
                            type="email"
                            placeholder="E-mail"
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
                        <Input
                            value={passwordConfirm}
                            setValue={setPasswordConfirm}
                            name="passwordConfirm"
                            type="password"
                            placeholder="Підтвердження паролю"
                            required
                        />
                        <p className={s.account}>
                            Вже є обліковий запис? <Link to="/login">Увійти</Link>
                        </p>
                        <Button type="submit">Зареєструватись</Button>
                    </form>
                </section>
            </div>
        </main>
    )
}

export default Register
