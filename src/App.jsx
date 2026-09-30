import React from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const data = [
    {
      date: new Date(2026, 10, 12),
      title: 'New book',
      price: 30.99,
    },
    {
      date: new Date(2026, 10, 12),
      title: 'New jeans',
      price: 99.99,
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={data} />
    </div>
  );
};

export default App;