import { memo } from "react";

import Card from "/img/Card.svg";
import EditButton from "/img/EditButton.svg";

import s from "./BalanceBox.module.scss";

interface BalanceBoxProps {
  balance: number;
  name: string;
}

export const BalanceBox: React.FC<BalanceBoxProps> = memo(
  ({ balance, name }) => {
    return (
      <section className={s.section}>
        <h2>Мій баланс</h2>
        <div>
          <span>
            <p>Баланс карток та готівки</p>
            <h2>$ {balance}</h2>
          </span>
          <button className={s.editButton}>
            <img src={EditButton} alt="Edit" />
          </button>
        </div>
        <div className={s.imgContainer}>
          <img priority src={Card} alt={name} />
          <h4>{name}</h4>
        </div>
      </section>
    );
  }
);

BalanceBox.displayName = "BalanceBox";
