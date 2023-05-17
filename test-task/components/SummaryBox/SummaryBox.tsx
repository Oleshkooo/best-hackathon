import { memo } from 'react'

import classes from './SummaryBox.module.scss'

interface Props {
    title: string
    value: number
    percentage: string
    color: string
}

export const SummaryBox: React.FC = memo(({ title, value, percentage, color }: Props) => {
    return (
        <section className={classes.section}>
            <h5>{title}</h5>
            <h2>$ {value}</h2>
            <span>
                <p style={{ color }}>{percentage}</p> за останні тижні
            </span>
        </section>
    )
})

SummaryBox.displayName = 'SummaryBox'
