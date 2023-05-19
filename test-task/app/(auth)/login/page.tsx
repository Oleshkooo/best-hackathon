'use client'

import { type NextPage } from 'next'
import { useState } from 'react'

import { Button, Input } from '@/components'

import s from '../Auth.module.scss'

const Login: NextPage = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <main className={s.Auth}>
            <div className={s.blur}>
                <section>
                    <h2>Вхід в обліковий запис</h2>
                    <form>
                        <Input
                            state={username}
                            setState={setUsername}
                            name="username"
                            type="text"
                            placeholder="Ім'я користувача або E-mail"
                            required
                        />
                        <Input
                            state={password}
                            setState={setPassword}
                            name="password"
                            type="password"
                            placeholder="Пароль"
                            required
                        />
                        <Button type="submit">Увійти</Button>
                    </form>
                </section>
            </div>
        </main>
    )
}

export default Login
