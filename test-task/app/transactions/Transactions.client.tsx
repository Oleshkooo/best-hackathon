import { Filters, HistoryBox, NewTransactionBox } from '@/components'

import { type FullUser } from '@/global'

import s from './Transactions.module.scss'

interface TransactionsClientProps {
    user: FullUser | null
}

export const TransactionsClient: React.FC<TransactionsClientProps> = ({ user }) => {
    // const [fil]
    return (
        <main className={s.Transactions}>
            <div className={s.fHalf}>
                <NewTransactionBox title="Нова транзакція" userId={user?.id} />
                <Filters />
            </div>
            <div className={s.sHalf}>
                <HistoryBox transaction={user?.transactions ?? []} />
            </div>
        </main>
    )
}
