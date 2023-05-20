import { type Transaction } from '@prisma/client'
import { memo, useMemo } from 'react'

import { TransactionDetails } from '@/components'

import s from './HistoryBox.module.scss'

interface HistoryBoxProps {
    transactions: Transaction[]
}

export const HistoryBox: React.FC<HistoryBoxProps> = memo(({ transactions }) => {
    const memoTransactions = useMemo(() => {
        if (!Array.isArray(transactions)) {
            return null
        }

        if (transactions.length === 0) {
            return <h5>Історія транзакцій порожня</h5>
        }

        return transactions?.map((t, i) => (
            <TransactionDetails
                title={t.title}
                value={t.amount.toString()}
                date={t.date.toLocaleDateString()}
                description={t.description ?? ''}
                key={i}
            />
        ))
    }, [transactions])

    return (
        <section className={s.HistoryBox}>
            <h3>Історія транзакцій</h3>
            {memoTransactions}
        </section>
    )
})

HistoryBox.displayName = 'HistoryBox'
