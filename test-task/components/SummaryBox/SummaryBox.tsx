import { memo } from 'react'

import s from './SummaryBox.module.scss'

interface SummaryBoxProps {
    title: string
    value: number
    percentage: string
    color: string
}

export const SummaryBox: React.FC<SummaryBoxProps> = memo(({ title, value, percentage, color }) => {
    return (
        <section className={s.section}>
            <h5>{title}</h5>
            <h2>$ {value}</h2>
            <span>
                <p style={{ color }}>{percentage}%</p> за останні тижні
            </span>
        </section>
    )
})

SummaryBox.displayName = 'SummaryBox'
