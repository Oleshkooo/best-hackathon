import { type Transaction } from '@prisma/client'
import { memo } from 'react'

import s from './HistoryBox.module.scss'

interface HistoryBoxProps {
    transaction: Transaction[]
}

export const HistoryBox: React.FC<HistoryBoxProps> = memo(({ transaction }) => {
    const transactions = (() => {
        if (!Array.isArray(transaction)) return 'Поки транзакцій немає'

        return transaction.map((t, i) => {
            const cn = t.type === 'INCOME' || t.type === 'DEPOSIT' ? s.income : s.expense
            return (
                <div className={s.transaction} key={i}>
                    <div>
                        <h4 className={s.vendor}>{t.title}</h4>
                        <h6 className={s.description}>{t.description}</h6>
                    </div>
                    <h4 className={`${s.value} ${cn}`}>${t.amount.toFixed(2)}</h4>
                </div>
            )
        })
    })()

    return (
        <section className={s.HistoryBox}>
            <h3>Історія транзакцій</h3>
            {transactions}
        </section>
    )
})

HistoryBox.displayName = 'HistoryBox'
