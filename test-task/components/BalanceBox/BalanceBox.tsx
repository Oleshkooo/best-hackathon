import { memo } from 'react'

import Image from 'next/image'

import Card from '@/public/img/Card.svg'

import classes from './BalanceBox.module.scss'

interface Props {
    balance: string
    name: string
}

export const BalanceBox: React.FC = memo(({ balance, name }: Props) => {
    return (
        <section className={classes.section}>
            <h3>Мій баланс</h3>
            <span className={classes.span}>
                <div>
                    <p>Баланс карток та готівки</p>
                    <h2>$ {balance}</h2>
                </div>
                <div className={classes.imgContainer}>
                    <Image src={Card} alt={name} />
                    <h4>{name}</h4>
                </div>
            </span>
        </section>
    )
})

BalanceBox.displayName = 'BalanceBox'
