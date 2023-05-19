import { HistoryBox } from "../assets/HistoryBox/HistoryBox";
import { NewTransactionBox } from "../assets/NewTransactionBox/NewTransactionBox";
import { Filters } from "../assets/Filters/Filters";

import s from "./Transactions.module.scss";

import type { Transaction } from "./Dashboard";

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

const Transactions: React.FC = () => {
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
  );
};

export default Transactions;
