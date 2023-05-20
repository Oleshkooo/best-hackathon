'use client'

import { memo, useState } from 'react'

import { Input } from '../Input'

import { TypeSelector } from '../TypeSelector'

import { Button } from '../Button'

import s from './NewTransactionBox.module.scss'

interface NewTransactionBoxProps {
    title: string
}

export const NewTransactionBox: React.FC<NewTransactionBoxProps> = memo(({ title }) => {
    const [sum, setSum] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    return (
        <section className={s.NewTransactionBox}>
            <h5>{title}</h5>
            <form className={s.Form}>
                <div className={s.upperForm}>
                    <div className={s.inputs}>
                        <span className={s.span}>
                            <Input
                                state={sum}
                                setValue={setSum}
                                type="text"
                                name="sum"
                                placeholder="Сума"
                            />
                            <Input
                                state={name}
                                setValue={setName}
                                type="text"
                                name="name"
                                placeholder="Назва"
                            />
                        </span>
                        <Input
                            className={s.desc}
                            state={description}
                            setValue={setDescription}
                            type="text"
                            name="description"
                            placeholder="Опис"
                        />
                    </div>
                </div>
                <TypeSelector />
                <Button type="submit">Додати транзакцію</Button>
            </form>
        </section>
    )
})

NewTransactionBox.displayName = 'NewTransactionBox'
