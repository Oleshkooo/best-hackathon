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

export const Register: React.FC = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user)

    const { value: username, setValue: setUsername, reset: resetUsername } = useInput('')
    const { value: email, setValue: setEmail, reset: resetEmail } = useInput('')
    const { value: password, setValue: setPassword, reset: resetPassword } = useInput('')
    const {
        value: passwordConfirm,
        setValue: setPasswordConfirm,
        reset: resetPasswordConfirm,
    } = useInput('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
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

            const resPromise = await fetch(`${SERVER}/api/register`, {
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
            const res = (await resPromise.json()) as Res

            if (res.data === undefined) {
                toast.error('Виникла помилка')
                return
            }

            const action = setUserAction(res.data)
            dispatch(action)

            toast.success(res.message)

            resetUsername()
            resetEmail()
            resetPassword()
            resetPasswordConfirm()
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
                    <h2>Реєстрація облікового запису</h2>
                    <form onSubmit={handleSubmit}>
                        <Input
                            value={username}
                            setValue={setUsername}
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
