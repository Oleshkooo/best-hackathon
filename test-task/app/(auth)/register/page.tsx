'use client'

import { type NextPage } from 'next'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

import { Button, Input, Link } from '@/components'

import s from '../Auth.module.scss'

const Register: NextPage = () => {
    const [username, setUsename] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [passwordConfirm, setPasswordConfirm] = useState<string>('')

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

        const res = await fetch('/api/auth/register', {
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
        const data = await res.json()
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
