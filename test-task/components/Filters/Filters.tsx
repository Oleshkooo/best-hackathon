'use client'

import { memo, useState } from 'react'

import { Input } from '../Input'

import { TypeSelector } from '../TypeSelector'

import s from './Filters.module.scss'

export const Filters: React.FC = memo(() => {
    const [name, setName] = useState<string>('')

    return (
        <section className={s.Filters}>
            <span className={s.span}>
                <h5 className={s.h5}>Тип транзакції</h5>
                <TypeSelector />
            </span>
            <span className={s.span}>
                <h5>Пошук</h5>
                <Input state={name} setState={setName} type="text" placeholder="Назва, опис" />
            </span>
        </section>
    )
})

Filters.displayName = 'Filters'
