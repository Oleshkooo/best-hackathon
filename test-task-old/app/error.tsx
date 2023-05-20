'use client'

import { type NextPage } from 'next'

import { Button, Link } from '@/components'

import s from './main.module.scss'

const Error: NextPage = () => {
    return (
        <main className={s.errPage}>
            <div className={s.errContainer}>
                <h1>503 | Виникла помилка</h1>
                <p>
                    Вибачте, але сталася помилка при обробці вашого запиту. Будь ласка, спробуйте
                    оновити сторінку через кілька хвилин.
                </p>
                <Button type="button">
                    <Link to="/">На головну</Link>
                </Button>
            </div>
        </main>
    )
}

export default Error
