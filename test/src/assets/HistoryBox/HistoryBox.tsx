"use client";

import { memo, useMemo } from "react";

import { type Transaction } from "/components/Dashboard";
import { TransactionDetails } from "../../assets/TransactionDetails/TransactionDetails";

import s from "./HistoryBox.module.scss";

interface HistoryBoxProps {
  transaction: Transaction[];
}

export const HistoryBox: React.FC<HistoryBoxProps> = memo(({ transaction }) => {
  const transactions = useMemo(() => {
    return transaction.map((t, i) => (
      <TransactionDetails
        value={t.value}
        date={t.date}
        description={t.item}
        vendor={t.vendor}
        key={i}
      />
    ));
  }, [transaction]);

  return (
    <section className={s.HistoryBox}>
      <h3>Історія транзакцій</h3>
      {transactions}
    </section>
  );
});

HistoryBox.displayName = "HistoryBox";
