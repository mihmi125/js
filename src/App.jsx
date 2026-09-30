import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    date: new Date(2026, 10, 12),
    title: 'New book',
    amount: 30.99,
  },
  {
    id: 'e2',
    date: new Date(2026, 10, 18),
    title: 'New jeans',
    amount: 99.99,
  },
  {
    id: 'e3',
    date: new Date(2026, 10, 25),
    title: 'New bag',
    amount: 99.99,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenses} />
    </div>
  );
};

export default App;