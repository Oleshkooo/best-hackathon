import { type NextPage } from 'next'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { type Transaction } from '@/app/dashboard/page'
import { Filters, HistoryBox, NewTransactionBox } from '@/components'

import s from './Transactions.module.scss'

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

// @ts-expect-error
const Transactions: NextPage = async () => {
    const session = await getServerSession(authOptions)

    if (session == null) {
        redirect('/login')
    }

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
