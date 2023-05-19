"use client";

import { useState } from "react";

import { Input } from "../Input/Input";
import { useInput } from "../../hooks";

import EditButton from "/public/img/EditButton.svg";
import DeleteButton from "/public/img/DeleteButton.svg";

import s from "./TransactionDetails.module.scss";

interface TransactionDetailsProps {
  vendor: string;
  description: string;
  date: string;
  value: string;
}

export const TransactionDetails: React.FC<TransactionDetailsProps> = ({
  vendor,
  description,
  date,
  value,
}) => {
  const formatDateTime = (timestamp: string): string => {
    const datetime = new Date(timestamp);
    const date = `${datetime.getDate()}.${datetime.getMonth()}.${datetime.getFullYear()}`;
    const time = `${datetime.getHours()}:${datetime.getMinutes()}:${datetime.getSeconds()}`;
    return `${date} ${time}`;
  };

  const valueN = useInput(value);
  const descriptionN = useInput(description);
  const dateN = useInput(date);
  const vendorN = useInput(vendor);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const tempValue = useInput(value);
  const tempDescription = useInput(description);
  const tempDate = useInput(date);
  const tempVendor = useInput(vendor);

  const handleEdit = () => {
    setIsEditing(true);

    // tempValue.setValue()
  };

  const handleSave = () => {
    setIsEditing(false);

    // TODO update db and context
  };

  const handleRevert = () => {
    setIsEditing(false);
  };

  const handleDelete = () => {
    setIsEditing(false);

    // TODO update db and context
  };

  return (
    <div className={s.transaction}>
      <div>
        {!isEditing ? (
          <h4 className={s.vendor}>{vendorN.value}</h4>
        ) : (
          <Input
            value={vendorN.value}
            setValue={vendorN.setValue}
            type="string"
          />
        )}
        {!isEditing ? (
          <h6 className={s.description}>{descriptionN.value}</h6>
        ) : (
          <Input
            value={descriptionN.value}
            setValue={descriptionN.setValue}
            type="string"
          />
        )}
        {!isEditing ? (
          <p className={s.date}>{formatDateTime(dateN.value)}</p>
        ) : (
          <Input value={dateN.value} setValue={dateN.setValue} type="string" />
        )}
      </div>
      <div className={s.actions}>
        {!isEditing ? (
          <h4 className={s.value}>-${Number(valueN.value).toFixed(2)}</h4>
        ) : (
          <Input
            value={valueN.value}
            setValue={valueN.setValue}
            type="string"
          />
        )}
        <button
          className={s.actionButton}
          onClick={isEditing ? handleSave : handleEdit}
        >
          <img src={EditButton} alt="Edit" />
        </button>
        <button
          className={s.actionButton}
          onClick={isEditing ? handleRevert : handleDelete}
        >
          <img src={DeleteButton} alt="Delete" />
        </button>
      </div>
    </div>
  );
};

TransactionDetails.displayName = "TransactionDetails";
