import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props: { onSaveExpenseData: (arg0: { title: string; amount: number; date: Date; }) => void; onCancel: React.MouseEventHandler<HTMLButtonElement> | undefined; }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setEnteredTitle(e.currentTarget.value);
  };

  const amountChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setEnteredAmount(e.currentTarget.value);
  };

  const dateChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setEnteredDate(e.currentTarget.value);
  };

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
