import { memo } from 'react'

import classes from './HistoryBox.module.scss'

import type { Transaction } from '@/app/dashboard/page'

interface Props {
    transaction: Transaction[]
}

export const HistoryBox: React.FC = memo(({ transaction }: Props) => {
    return (
        <section className={classes.section}>
            <h3>Історія транзакцій</h3>
            {transaction.map(t => (
                <span className={classes.span} key={t.item}>
                    <div>
                        <h4 className={classes.vendor}>{t.vendor}</h4>
                        <h6 className={classes.item}>{t.item}</h6>
                    </div>
                    <h4 className={classes.value}>-${t.value.toFixed(2)}</h4>
                </span>
            ))}
        </section>
    )
})

HistoryBox.displayName = 'HistoryBox'
