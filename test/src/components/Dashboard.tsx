import { BalanceBox } from "../assets/BalanceBox/BalanceBox";
import { HistoryBox } from "../assets/HistoryBox/HistoryBox";
import { SummaryBox } from "../assets/SummaryBox/SummaryBox";
import { Spacer } from "../assets/Spacer/Spacer";

import s from "./Dashboard.module.scss";

export interface Transaction {
  vendor: string;
  item: string;
  date: string;
  value: number;
}

const dummyTransactions: Transaction[] = [
  {
    vendor: "Apple",
    item: "Mac Book",
    date: "2023-05-19T17:15:23",
    value: 1000,
  },
  {
    vendor: "Apple",
    item: "Mac Book",
    date: "2023-05-19T17:15:23",
    value: 1000,
  },
  {
    vendor: "Apple",
    item: "Mac Book",
    date: "2023-05-19T17:15:23",
    value: 1000,
  },
  {
    vendor: "Apple",
    item: "Mac Book",
    date: "2023-05-19T17:15:23",
    value: 1000,
  },
  {
    vendor: "Apple",
    item: "Mac Book",
    date: "2023-05-19T17:15:23",
    value: 1000,
  },
];

const Dashboard: React.FC = () => {
  return (
    <main className={s.main}>
      <SummaryBox
        title="Загальний дохід"
        value={120}
        percentage="+15"
        color="income"
      />
      <SummaryBox
        title="Загальний дохід"
        value={120}
        percentage="+15"
        color="expense"
      />
      <SummaryBox
        title="Загальний дохід"
        value={120}
        percentage="+15"
        color="income"
      />
      <SummaryBox
        title="Загальний дохід"
        value={120}
        percentage="+15"
        color="expense"
      />
      <HistoryBox transaction={dummyTransactions} />
      <BalanceBox balance={15981.213} name={"Oleh Khoma"} />
      <Spacer y={2} />
    </main>
  );
};

export default Dashboard;
