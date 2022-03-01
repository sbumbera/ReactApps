import "./ExpensesList.css";
import "../ExpenseItem/ExpenseItem.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import { ReactChild, ReactFragment, ReactPortal } from "react";
import Card from "../../UI/Card/Card";

const ExpensesList = (props: {
  items: any[];
  selected:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) => {
  const expensesContent = <p>No expenses for {props.selected}</p>;
  if (props.items.length === 0) {
    return (
      <Card className="expense-item">
        <h2 className="expenses-list__fallback">{expensesContent}</h2>
      </Card>
    );
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
