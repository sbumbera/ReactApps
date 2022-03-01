import "./Expenses.css";
import Card from "../UI/Card/Card";
import ExpensesFilter from "./ExpenseFilter/ExpenseFilter";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpensesChart from "./ExpensesChart";
import React, { useState } from "react";

const Expenses = (props: {
  items: { id: string, title: string, amount: number, date: Date }[];
}) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangedHandler = (selectedYear: React.SetStateAction<string>) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangedHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} selected={filteredYear} />
      </Card>
    </div>
  );
};

export default Expenses;
