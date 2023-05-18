import { BalanceBox, HistoryBox, SummaryBox } from '@/components'

import classes from './Dashboard.module.scss'

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

const Dashboard: React.FC = () => {
    return (
        <main className={classes.main}>
            <SummaryBox
                title="Загальний дохід"
                value="120"
                percentage="+15"
                color={textColourIncome}
            />
            <SummaryBox
                title="Загальний дохід"
                value="120"
                percentage="+15"
                color={textColourExpense}
            />
            <SummaryBox
                title="Загальний дохід"
                value="120"
                percentage="+15"
                color={textColourIncome}
            />
            <SummaryBox
                title="Загальний дохід"
                value="120"
                percentage="+15"
                color={textColourExpense}
            />
            <HistoryBox transaction={dummyTransactions} />
            <BalanceBox balance={15981.213} name={'Oleh Khoma'} />
        </main>
    )
}

export default Dashboard
