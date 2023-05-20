import { memo } from 'react'

import { Input, TypeSelector } from '@/components'
import { useInput } from '@/hooks'

import s from './Filters.module.scss'

export const Filters: React.FC = memo(() => {
    const { value, setValue } = useInput('')

    return (
        <section className={s.Filters}>
            <span className={s.span}>
                <h5 className={s.h5}>Тип транзакції</h5>
                <TypeSelector />
            </span>
            <span className={s.span}>
                <h5>Пошук</h5>
                <Input value={value} setValue={setValue} type="text" placeholder="Назва, опис" />
            </span>
        </section>
    )
})

Filters.displayName = 'Filters'
