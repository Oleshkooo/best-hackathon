import { memo, useMemo } from 'react'

import { type Transaction } from '@/app/dashboard/page'

import s from './HistoryBox.module.scss'

interface HistoryBoxProps {
    transaction: Transaction[]
}

export const HistoryBox: React.FC<HistoryBoxProps> = memo(({ transaction }) => {
    const transactions = useMemo(() => {
        return transaction.map((t, i) => (
            <div className={s.transaction} key={i}>
                <div>
                    <h4 className={s.vendor}>{t.vendor}</h4>
                    <h6 className={s.description}>{t.item}</h6>
                </div>
                <h4 className={s.value}>-${t.value.toFixed(2)}</h4>
            </div>
        ))
    }, [transaction])

    return (
        <section className={s.HistoryBox}>
            <h3>Історія транзакцій</h3>
            {transactions}
        </section>
    )
})

HistoryBox.displayName = 'HistoryBox'
