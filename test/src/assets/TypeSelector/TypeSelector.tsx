import { memo } from "react";

import { ButtonSwitch } from "../ButtonSwitch/ButtonSwitch";

import s from "./TypeSelector.module.scss";

export const TypeSelector: React.FC = memo(() => {
  return (
    <div className={s.TypeSelector}>
      <span>
        <ButtonSwitch title="Дохід" type="income" />
        <ButtonSwitch title="Витрата" type="outcome" />
      </span>
      <span>
        <ButtonSwitch title="Депозит" type="deposit" />
        <ButtonSwitch title="Кредит" type="credit" />
      </span>
    </div>
  );
});

TypeSelector.displayName = "TypeSelector";
