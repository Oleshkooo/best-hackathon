import { memo } from 'react'

import { Button, Input, TypeSelector } from '@/components'
import { useInput } from '@/hooks'

import s from './NewTransactionBox.module.scss'

interface NewTransactionBoxProps {
    title: string
}

export const NewTransactionBox: React.FC<NewTransactionBoxProps> = memo(({ title }) => {
    const { value: sum, setValue: setSum } = useInput('')
    const { value: name, setValue: setName } = useInput('')
    const { value: description, setValue: setDescription } = useInput('')

    return (
        <section className={s.NewTransactionBox}>
            <h5>{title}</h5>
            <form className={s.Form}>
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
                <TypeSelector />
                <Button type="submit">Додати транзакцію</Button>
            </form>
        </section>
    )
})

NewTransactionBox.displayName = 'NewTransactionBox'
