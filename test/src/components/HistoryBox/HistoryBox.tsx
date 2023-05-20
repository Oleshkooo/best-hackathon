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

        return transactions?.map((t, i) => (
            <TransactionDetails
                value={t.value}
                date={t.date}
                description={t.item}
                vendor={t.vendor}
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
