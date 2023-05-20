import { Filters, HistoryBox, NewTransactionBox } from '@/components'

import { useAppSelector } from '@/redux'

import s from './Transactions.module.scss'

export const Transactions: React.FC = () => {
    const user = useAppSelector(state => state.user.user)

    return (
        <main className={s.Transactions}>
            <div className={s.fHalf}>
                <NewTransactionBox title="Нова транзакція" />
                <Filters />
            </div>
            <div className={s.sHalf}>
                <HistoryBox transactions={user?.transactions} />
            </div>
        </main>
    )
}
