import { type NextPage } from 'next'

import { Button, Link } from '@/components'

import s from './main.module.scss'

const NotFound: NextPage = () => {
    return (
        <main className={s.errPage}>
            <div className={s.errContainer}>
                <h1>404 | Такої сторінки не існує</h1>
                <p>
                    Вибачте, але сторінку, яку ви шукаєте, не знайдено. Ймовірно, ви перейшли за
                    застарілим посиланням або ввели неправильну URL-адресу.
                </p>
                <Button type="button">
                    <Link to="/">На головну</Link>
                </Button>
            </div>
        </main>
    )
}

export default NotFound
