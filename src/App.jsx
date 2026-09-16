import React from 'react';
import './App.css';
import Expenses from './components/expenses/Expenses';

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

  return (
    <div className="App">
      <Expenses data={data} />
    </div>
  );
};

export default App;