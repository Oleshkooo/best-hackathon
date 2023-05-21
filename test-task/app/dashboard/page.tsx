import { type NextPage } from 'next'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { BalanceBox, HistoryBox, Spacer, SummaryBox } from '@/components'

import s from './Dashboard.module.scss'

export interface Transaction {
    vendor: string
    item: string
    value: number
}

const textColourIncome = '#1CAA59'
const textColourExpense = '#EB5454'

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
const Dashboard: NextPage = async () => {
    const session = await getServerSession(authOptions)

    if (session == null) {
        redirect('/login')
    }

    return (
        <main className={s.main}>
            <SummaryBox
                title="Загальний дохід"
                value={120}
                percentage="+15"
                color={textColourIncome}
            />
            <SummaryBox
                title="Загальний дохід"
                value={120}
                percentage="+15"
                color={textColourExpense}
            />
            <SummaryBox
                title="Загальний дохід"
                value={120}
                percentage="+15"
                color={textColourIncome}
            />
            <SummaryBox
                title="Загальний дохід"
                value={120}
                percentage="+15"
                color={textColourExpense}
            />
            <HistoryBox transaction={dummyTransactions} />
            <BalanceBox balance={15981.213} name={'Oleh Khoma'} />
            <Spacer y={2} />
        </main>
    )
}

export default Dashboard
