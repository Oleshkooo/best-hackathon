'use client'

import { type Transaction, type User } from '@prisma/client'
import { useRouter } from 'next/navigation'
import { memo, useState } from 'react'
import { toast } from 'react-hot-toast'

import { type PostResData } from '@/app/api/transaction/route'
import { useInput } from '@/hooks'
import { Fetch } from '@/utils'

import { Button } from '../Button'
import { Input } from '../Input'
import { TypeSelector } from '../TypeSelector'

import s from './NewTransactionBox.module.scss'

interface NewTransactionBoxProps {
    title: string
    userId: User['id'] | undefined
}

export const NewTransactionBox: React.FC<NewTransactionBoxProps> = memo(({ title, userId }) => {
    const router = useRouter()

    const { value: sum, setValue: setSum, reset: resetSum } = useInput('')
    const { value: name, setValue: setName, reset: resetName } = useInput('')
    const { value: description, setValue: setDescription, reset: resetDescription } = useInput('')

    const [selected, setSelected] = useState<Transaction['type']>('INCOME')

    const handleSumit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        if (userId == null) {
            toast.error('Проблема авторизації')
            return
        }
        if (sum.length < 1) {
            toast.error('Введіть суму')
            return
        }
        if (isNaN(Number(sum))) {
            toast.error('Введіть правильну суму')
            return
        }
        if (name.length < 3) {
            toast.error('Введіть правильну назву')
            return
        }
        if (description.length < 3) {
            toast.error('Введіть правильний опис')
            return
        }

        const transaction: Omit<Omit<Transaction, 'id'>, 'userId'> = {
            title: name,
            description,
            amount: Number(sum),
            date: new Date(),
            type: selected,
        }

        const res = await Fetch<PostResData>('/api/transaction', {
            method: 'POST',
            body: JSON.stringify({ userId, transaction }),
        })

        if (res.error) {
            toast.error(res.message)
            return
        }
        if (res.data === undefined) {
            toast.error('Виникла помилка')
        }

        toast.success(res.message)

        resetSum()
        resetName()
        resetDescription()

        router.refresh()
    }

    return (
        <section className={s.NewTransactionBox}>
            <h5>{title}</h5>
            <div className={s.Form}>
                <div className={s.upperForm}>
                    <div className={s.inputs}>
                        <span className={s.span}>
                            <Input
                                value={sum}
                                setValue={setSum}
                                type="text"
                                name="sum"
                                placeholder="Сума"
                            />
                            <Input
                                value={name}
                                setValue={setName}
                                type="text"
                                name="name"
                                placeholder="Назва"
                            />
                        </span>
                        <Input
                            className={s.desc}
                            value={description}
                            setValue={setDescription}
                            type="text"
                            name="description"
                            placeholder="Опис"
                        />
                    </div>
                </div>
                <TypeSelector selected={selected} setSelected={setSelected} />
                <Button onClick={handleSumit}>Додати транзакцію</Button>
            </div>
        </section>
    )
})

NewTransactionBox.displayName = 'NewTransactionBox'
