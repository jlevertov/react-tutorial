import ExpenseForm from "./ExpenseForm"
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpeseDataHandler = (enteredExpenseData) =>{
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onNewExpense(expenseData);
  }


  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpeseDataHandler}/>
    </div>
  );
};

export default NewExpense