'use client'

import { type NextPage } from 'next'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

import { Button, Input } from '@/components'

import s from '../Auth.module.scss'

const Register: NextPage = () => {
    const [username, setUsename] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [passwordConfirm, setPasswordConfirm] = useState<string>('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (password !== passwordConfirm) {
            toast.error('Паролі не співпадають')
        }

        // TODO validation
        // username can`t contain @
        // email must contain @

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

        console.log(data)
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
                            type="text"
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
                        <Button type="submit">Увійти</Button>
                    </form>
                </section>
            </div>
        </main>
    )
}

export default Register
