import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
  return (
    <div className="expenses">
      {props.data.map((item, index) => (
        <ExpenseItem key={index} data={item} />
      ))}
    </div>
  );
}

export default Expenses;