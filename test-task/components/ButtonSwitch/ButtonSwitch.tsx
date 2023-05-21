'use client'

import { type Transaction } from '@prisma/client'
import { memo } from 'react'

import { Button } from '../Button'

import s from './ButtonSwitch.module.scss'

interface ButtonSwitchProps {
    selected: Transaction['type']
    setSelected: React.Dispatch<React.SetStateAction<Transaction['type']>>
    type: Transaction['type']
    children: React.ReactNode
}

export const ButtonSwitch: React.FC<ButtonSwitchProps> = memo(
    ({ selected, setSelected, type, children }) => {
        const selectedClassName = selected === type ? s.Active : ''

        const handleClick = () => {
            setSelected(type)
        }

        return (
            <Button className={`${s.ButtonSwitch} ${selectedClassName}`} onClick={handleClick}>
                {children}
            </Button>
        )
    },
)

ButtonSwitch.displayName = 'ButtonSwitch'
