import { useState } from 'react'

import { Input } from '@/components'
import { useInput } from '@/hooks'

import s from './TransactionDetails.module.scss'

interface TransactionDetailsProps {
    title: string
    description: string
    date: string
    value: string
}

export const TransactionDetails: React.FC<TransactionDetailsProps> = ({
    title,
    description,
    date,
    value,
}) => {
    const valueN = useInput(value)
    const descriptionN = useInput(description)
    const dateN = useInput(date)
    const titleN = useInput(title)
    const [isEditing, setIsEditing] = useState<boolean>(false)

    const formatDateTime = (timestamp: string): string => {
        const datetime = new Date(timestamp)
        const date = `${datetime.getDate()}.${datetime.getMonth()}.${datetime.getFullYear()}`
        const time = `${datetime.getHours()}:${datetime.getMinutes()}:${datetime.getSeconds()}`
        return `${date} ${time}`
    }

    const handleEdit = () => {
        setIsEditing(true)
    }

    const handleSave = () => {
        setIsEditing(false)

        // TODO update db and context
    }

    const handleRevert = () => {
        setIsEditing(false)
    }

    const handleDelete = () => {
        setIsEditing(false)

        // TODO update db and context
    }

    return (
        <div className={s.transaction}>
            <div>
                {isEditing ? (
                    <Input value={titleN.value} setValue={titleN.setValue} type="text" />
                ) : (
                    <h4 className={s.title}>{titleN.value}</h4>
                )}
                {isEditing ? (
                    <Input
                        value={descriptionN.value}
                        setValue={descriptionN.setValue}
                        type="text"
                    />
                ) : (
                    <h6 className={s.description}>{descriptionN.value}</h6>
                )}
                {isEditing ? (
                    <Input value={dateN.value} setValue={dateN.setValue} type="text" />
                ) : (
                    <p className={s.date}>{formatDateTime(dateN.value)}</p>
                )}
            </div>
            <div className={s.actions}>
                {isEditing ? (
                    <Input value={valueN.value} setValue={valueN.setValue} type="text" />
                ) : (
                    <h4 className={s.value}>-${Number(valueN.value).toFixed(2)}</h4>
                )}
                <button className={s.actionButton} onClick={isEditing ? handleSave : handleEdit}>
                    <img src="/img/EditButton.svg" alt="Edit" />
                </button>
                <button
                    className={s.actionButton}
                    onClick={isEditing ? handleRevert : handleDelete}
                >
                    <img src="/img/DeleteButton.svg" alt="Delete" />
                </button>
            </div>
        </div>
    )
}

TransactionDetails.displayName = 'TransactionDetails'
