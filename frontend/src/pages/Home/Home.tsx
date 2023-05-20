import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components'

import s from './Home.module.scss'

export const Home: React.FC = () => {
    const navigate = useNavigate()

    const handleClick = useCallback(() => {
        navigate('/login')
    }, [navigate])

    return (
        <main className={s.Home}>
            <span>
                <h1>Керуй своїми фінансами разом з BFCA503</h1>
                <h2>Створюй, редагуй, аналізуй свої доходи, витрати, депозити та інше!</h2>
                <Button onClick={handleClick}>Почати зараз</Button>
            </span>
            <img src="/img/GraphHome.svg" alt="Graph" />
        </main>
    )
}
