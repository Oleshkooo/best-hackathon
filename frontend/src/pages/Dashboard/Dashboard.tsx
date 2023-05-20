import { type Transaction } from '@prisma/client'
import { useMemo } from 'react'

import { BalanceBox, HistoryBox, Spacer, SummaryBox } from '@/components'
import { useAppSelector } from '@/redux'

import { type FullUser } from '@/types'

import s from './Dashboard.module.scss'

const getTransactionsAmount = (transactions: Transaction[], filter: Transaction['type']) => {
    const filtered = transactions.filter((transaction: Transaction) => transaction.type === filter)
    return filtered.reduce((acc: number, transaction: Transaction) => acc + transaction.amount, 0)
}

const calculatePriceChange = (transactions: Transaction[]): number => {
    const currentDate = new Date()
    const oneWeekAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000)

    const transactionsWithinLastWeek = transactions.filter(
        transaction => transaction.date >= oneWeekAgo && transaction.date <= currentDate,
    )

    if (transactionsWithinLastWeek.length === 0) {
        return 0
    }

    const firstTransaction = transactionsWithinLastWeek[0]
    const lastTransaction = transactionsWithinLastWeek[transactionsWithinLastWeek.length - 1]

    return ((lastTransaction.amount - firstTransaction.amount) / firstTransaction.amount) * 100
}

export const Dashboard: React.FC = () => {
    const user: FullUser = useAppSelector(state => state.user)

    const income = useMemo(() => {
        const value = getTransactionsAmount(user.transactions, 'INCOME')
        const percentage = calculatePriceChange(user.transactions)
        return { value, percentage }
    }, [user.transactions])
    const expense = useMemo(() => {
        const value = getTransactionsAmount(user.transactions, 'EXPENSE')
        const percentage = calculatePriceChange(user.transactions)
        return { value, percentage }
    }, [user.transactions])
    const deposit = useMemo(() => {
        const value = getTransactionsAmount(user.transactions, 'DEPOSIT')
        const percentage = calculatePriceChange(user.transactions)
        return { value, percentage }
    }, [user.transactions])
    const credit = useMemo(() => {
        const value = getTransactionsAmount(user.transactions, 'CREDIT')
        const percentage = calculatePriceChange(user.transactions)
        return { value, percentage }
    }, [user.transactions])

    return (
        <main className={s.main}>
            <SummaryBox
                title="Загальний дохід"
                value={income.value}
                percentage={income.percentage.toString()}
                color={income.percentage > 0 ? 'income' : 'expense'}
            />
            <SummaryBox
                title="Загальні витрати"
                value={expense.value}
                percentage={expense.percentage.toString()}
                color={expense.percentage > 0 ? 'income' : 'expense'}
            />
            <SummaryBox
                title="Загальні депозити"
                value={deposit.value}
                percentage={deposit.percentage.toString()}
                color={deposit.percentage > 0 ? 'income' : 'expense'}
            />
            <SummaryBox
                title="Загальні кредити"
                value={credit.value}
                percentage={credit.percentage.toString()}
                color={credit.percentage > 0 ? 'income' : 'expense'}
            />
            <HistoryBox transactions={user.transactions} />
            <BalanceBox balance={user.balance} name={user.username} />
            <Spacer y={2} />
        </main>
    )
}
