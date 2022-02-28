import React, { useState } from "react";
import logo from "./logo.svg";
import './App.css'
import Expenses from "../components/Expenses/Expenses";
import NewExpense from "../components/NewExpense/NewExpense";

let DATA: {id: string, title: string, amount: number, date: Date}[] = [];

const App = () => {
  
  const [expenses, setExpenses] = useState(DATA);

  const addExpenseHandler = (expenses: any) => {
    setExpenses(prevExpenses => {
      return [expenses, ...prevExpenses]
    })
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
