import { toast } from 'react-hot-toast'
import { Link, Navigate } from 'react-router-dom'

import { Button, Input } from '@/components'
import { SERVER } from '@/config/env'
import { useInput } from '@/hooks'
import { useAppDispatch, useAppSelector } from '@/redux'
import { setUserAction } from '@/redux/slices/userSlice'
import { type FullUser } from '@/types'

import s from './Auth.module.scss'

interface Res {
    message: string
    data?: FullUser
}

export const Login: React.FC = () => {
    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

    const { value: username, setValue: setUsername, reset: resetUsername } = useInput('')
    const { value: password, setValue: setPassword, reset: resetPassword } = useInput('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const resPromise = await fetch(`${SERVER}/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            })
            const res = (await resPromise.json()) as Res

            if (res.data === undefined) {
                toast.error('Виникла помилка')
                return
            }

            const action = setUserAction(res.data)
            dispatch(action)

            toast.success(res.message)

            resetUsername()
            resetPassword()
        } catch (error) {
            console.error(error)
            if (error instanceof String) {
                toast.error(error as string)
            }
        }
    }

    if (user?.id !== '') {
        return <Navigate to="/dashboard" />
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
