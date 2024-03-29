import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import { useState } from 'react';

function Expenses(props) {
  
  const [filteredYear, setFilteredYear] = useState('')

  const filterChangedHandler = (expenseFilterSelection) => {
    console.log("Selection changed to ",expenseFilterSelection);
    setFilteredYear(expenseFilterSelection);
  }
  
  return (
    <div className="expenses">
      <ExpensesFilter onFilterChanged={filterChangedHandler}/>
      <Card>
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;
