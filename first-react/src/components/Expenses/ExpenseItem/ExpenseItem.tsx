import React, { useState } from 'react';
import Card from '../../UI/Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css'

const ExpenseItem = (props: { date: Date; title: string; amount: number; }) => {

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated!');
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem