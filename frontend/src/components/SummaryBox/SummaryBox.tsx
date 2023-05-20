import { memo } from 'react'

import s from './SummaryBox.module.scss'

interface SummaryBoxProps {
    title: string
    value: number
    percentage: string
    color: string
}

const textColourIncome = '#1CAA59'
const textColourExpense = '#EB5454'

export const SummaryBox: React.FC<SummaryBoxProps> = memo(({ title, value, percentage, color }) => {
    return (
        <section className={s.SummaryBox}>
            <h5>{title}</h5>
            <div className={s.value}>
                <h2>$ {value}</h2>
                <span>
                    <span
                        style={
                            color === 'income'
                                ? { color: textColourIncome }
                                : { color: textColourExpense }
                        }
                    >
                        {percentage}%
                    </span>{' '}
                    за останні тижні
                </span>
            </div>
        </section>
    )
})

SummaryBox.displayName = 'SummaryBox'
