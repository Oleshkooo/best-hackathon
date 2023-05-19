import Image from 'next/image'
import { memo } from 'react'

import Card from '@/public/img/Card.svg'

import s from './BalanceBox.module.scss'

interface BalanceBoxProps {
    balance: number
    name: string
}

export const BalanceBox: React.FC<BalanceBoxProps> = memo(({ balance, name }) => {
    return (
        <section className={s.section}>
            <h2>Мій баланс</h2>
            <div>
                <p>Баланс карток та готівки</p>
                <h2>$ {balance}</h2>
            </div>
            <div className={s.imgContainer}>
                <Image priority src={Card} alt={name} />
                <h4>{name}</h4>
            </div>
        </section>
    )
})

BalanceBox.displayName = 'BalanceBox'
