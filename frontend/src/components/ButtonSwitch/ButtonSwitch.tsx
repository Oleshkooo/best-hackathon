import { memo } from 'react'

import s from './ButtonSwitch.module.scss'

interface ButtonSwitchProps {
    title: string
    type?: string
}

export const ButtonSwitch: React.FC<ButtonSwitchProps> = memo(({ title }) => {
    return <button className={s.ButtonSwitch}>{title}</button>
})

ButtonSwitch.displayName = 'ButtonSwitch'
