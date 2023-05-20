import { type NextPage } from 'next'

import { HistoryBox, NewTransactionBox, Filters } from '@/components'

import s from './Transactions.module.scss'

import type { Transaction } from '@/app/dashboard/page'

const dummyTransactions: Transaction[] = [
    {
        vendor: 'Apple',
        item: 'Mac Book',
        value: 1000,
    },
    {
        vendor: 'Apple',
        item: 'Mac Book',
        value: 1000,
    },
    {
        vendor: 'Apple',
        item: 'Mac Book',
        value: 1000,
    },
    {
        vendor: 'Apple',
        item: 'Mac Book',
        value: 1000,
    },
    {
        vendor: 'Apple',
        item: 'Mac Book',
        value: 1000,
    },
]

const Transactions: NextPage = () => {
    return (
        <main className={s.Transactions}>
            <div className={s.fHalf}>
                <NewTransactionBox title="Нова транзакція" />
                <Filters />
            </div>
            <div className={s.sHalf}>
                <HistoryBox transaction={dummyTransactions} />
            </div>
        </main>
    )
}

export default Transactions
