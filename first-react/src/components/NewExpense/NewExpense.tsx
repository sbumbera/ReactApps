import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props: { onAddExpense: (arg0: any) => void; }) => {
    const saveExpenseDataHandler = (enteredExpenseData: any) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        
        props.onAddExpense(expenseData);
    };
    return (
        <div className='new-expense'>
           <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;