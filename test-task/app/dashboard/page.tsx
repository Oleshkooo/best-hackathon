import { type Transaction } from '@prisma/client'
import { type NextPage } from 'next'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { BalanceBox, HistoryBox, Spacer, SummaryBox } from '@/components'

import { prisma } from '@/server/db/prisma'

import { type FullUser } from '@/global'

import s from './Dashboard.module.scss'

export const dynamic = 'force-dynamic'

export const getUser = async (email: string | null | undefined) => {
    if (email == null) return null

    return await prisma.user.findUnique({
        where: {
            email,
        },
        include: {
            transactions: true,
        },
    })
}

const getTransactionsTypeSum = (transactions: Transaction[], filter: Transaction['type']) => {
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

const getTransactionsByType = (transactions: Transaction[], type: Transaction['type']) => {
    return transactions.filter(transaction => transaction.type === type)
}

const getData = (user: FullUser | null, type: Transaction['type']) => {
    if (user == null) return { sum: 0, percentage: 0 }

    const transactions = getTransactionsByType(user.transactions, type)
    const sum = getTransactionsTypeSum(transactions, type)
    const percentage = calculatePriceChange(transactions)
    return { sum, percentage }
}

// @ts-expect-error
const Dashboard: NextPage = async () => {
    const session = await getServerSession(authOptions)

    if (session == null) {
        redirect('/login')
    }

    const user = await getUser(session.user?.email)

    const income = getData(user, 'INCOME')
    const expense = getData(user, 'EXPENSE')
    const deposit = getData(user, 'DEPOSIT')
    const credit = getData(user, 'CREDIT')

    return (
        <main className={s.main}>
            <SummaryBox
                title="Загальний дохід"
                value={income.sum}
                percentage={income.percentage.toString()}
                color={income.percentage > 0 ? 'income' : 'expense'}
            />
            <SummaryBox
                title="Загальні витрати"
                value={expense.sum}
                percentage={expense.percentage.toString()}
                color={expense.percentage > 0 ? 'income' : 'expense'}
            />
            <SummaryBox
                title="Загальні депозити"
                value={deposit.sum}
                percentage={deposit.percentage.toString()}
                color={deposit.percentage > 0 ? 'income' : 'expense'}
            />
            <SummaryBox
                title="Загальні кредити"
                value={credit.sum}
                percentage={credit.percentage.toString()}
                color={credit.percentage > 0 ? 'income' : 'expense'}
            />
            <HistoryBox transaction={user?.transactions ?? []} />
            <BalanceBox balance={user?.balance ?? 0} name={user?.username ?? ''} />
            <Spacer y={2} />
        </main>
    )
}

export default Dashboard
