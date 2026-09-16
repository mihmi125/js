import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.data.map((item, index) => (
        <ExpenseItem key={index} data={item} />
      ))}
    </Card>
  );
}

export default Expenses;