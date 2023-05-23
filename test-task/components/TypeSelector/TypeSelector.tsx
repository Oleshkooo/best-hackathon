import { type Transaction } from '@prisma/client'
import { memo } from 'react'

import { ButtonSwitch } from '../ButtonSwitch'

import s from './TypeSelector.module.scss'

interface TypeSelectorProps {
    selected: Transaction['type']
    setSelected: React.Dispatch<React.SetStateAction<Transaction['type']>>
}

export const TypeSelector: React.FC<TypeSelectorProps> = memo(({ selected, setSelected }) => {
    return (
        <div className={s.TypeSelector}>
            <span>
                <ButtonSwitch selected={selected} setSelected={setSelected} type="INCOME">
                    Дохід
                </ButtonSwitch>
                <ButtonSwitch selected={selected} setSelected={setSelected} type="EXPENSE">
                    Витрата
                </ButtonSwitch>
            </span>
            <span>
                <ButtonSwitch selected={selected} setSelected={setSelected} type="CREDIT">
                    Кредит
                </ButtonSwitch>
                <ButtonSwitch selected={selected} setSelected={setSelected} type="DEPOSIT">
                    Депозит
                </ButtonSwitch>
            </span>
        </div>
    )
})

TypeSelector.displayName = 'TypeSelector'
