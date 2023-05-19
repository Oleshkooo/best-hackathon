import { type NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components'
import GraphHome from '@/public/img/GraphHome.svg'

import s from './Home.module.scss'

const Home: NextPage = () => {
    return (
        <main className={s.Home}>
            <span>
                <h1>Керуй своїми фінансами разом з BFCA503</h1>
                <h2>Створюй, редагуй, аналізуй свої доходи, витрати, депозити та інше!</h2>
                <Button type="button">
                    <Link href="/dashboard">Почати зараз </Link>
                </Button>
            </span>
            <Image src={GraphHome} alt="graph" priority />
        </main>
    )
}

export default Home
