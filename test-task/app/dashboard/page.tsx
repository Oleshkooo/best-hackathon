import { SummaryBox } from '@/components'

import classes from './Dashboard.module.scss'

const Dashboard: React.FC = () => {
    return (
        <main className={classes.main}>
            <SummaryBox title="Загальний дохід" value="120" percentage="+15" color="#1CAA59" />
            <SummaryBox title="Загальний дохід" value="120" percentage="+15" color="#1CAA59" />
            <SummaryBox title="Загальний дохід" value="120" percentage="+15" color="#1CAA59" />
            <SummaryBox title="Загальний дохід" value="120" percentage="+15" color="#1CAA59" />
        </main>
    )
}

export default Dashboard
