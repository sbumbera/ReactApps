import React, { ChangeEventHandler } from 'react';
import { isPropertySignature } from 'typescript';
import './ExpenseFilter.css'

const ExpensesFilter = (props: { onChangeFilter: (arg0: any) => void; selected: string | number | readonly string[] | undefined; }) => {
    const dropdownFilterHandler = (e: { currentTarget: { value: any; }; }) => {
        props.onChangeFilter(e.currentTarget.value);
    }

    return (
      <div className='expenses-filter'>
        <div className='expenses-filter__control'>
          <label>Filter by year</label>
          <select value={props.selected} onChange={dropdownFilterHandler}>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
          </select>
        </div>
      </div>
    );
  };
  
  export default ExpensesFilter;