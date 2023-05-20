import { BalanceBox, HistoryBox, Spacer, SummaryBox } from '@/components'
import { useAppSelector } from '@/redux'

import s from './Dashboard.module.scss'

export const Dashboard: React.FC = () => {
    const user = useAppSelector(state => state.user)

    return (
        <main className={s.main}>
            <SummaryBox title="Загальний дохід" value={120} percentage="+15" color="income" />
            <SummaryBox title="Загальний дохід" value={120} percentage="+15" color="expense" />
            <SummaryBox title="Загальний дохід" value={120} percentage="+15" color="income" />
            <SummaryBox title="Загальний дохід" value={120} percentage="+15" color="expense" />
            <HistoryBox transactions={user.transactions} />
            <BalanceBox balance={user.balance} name={user.username} />
            <Spacer y={2} />
        </main>
    )
}
