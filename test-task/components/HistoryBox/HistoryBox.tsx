import { memo } from 'react'

import { type Transaction } from '@/app/dashboard/page'

import s from './HistoryBox.module.scss'

interface HistoryBoxProps {
    transaction: Transaction[]
}

export const HistoryBox: React.FC<HistoryBoxProps> = memo(({ transaction }) => {
    return (
        <section className={s.section}>
            <h3>Історія транзакцій</h3>
            {transaction.map(t => (
                <span className={s.span} key={t.item}>
                    <div>
                        <h4 className={s.vendor}>{t.vendor}</h4>
                        <h6 className={s.item}>{t.item}</h6>
                    </div>
                    <h4 className={s.value}>-${t.value.toFixed(2)}</h4>
                </span>
            ))}
        </section>
    )
})

HistoryBox.displayName = 'HistoryBox'
