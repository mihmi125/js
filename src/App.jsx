import './App.css';
import ExpenseItem from './components/ExpenseItem'

const App = () => {
  const data = [
    {
      date: new Date(2026, 10, 12),
      title: 'New book',
      price: 30.99
    },
    {
      date: new Date(2026, 10, 12),
      title: 'The Ant-Christ',
      price: 666
    }
  ]
  
  return (
    <div className="App">
    <ExpenseItem data={data[0]}/>
    <ExpenseItem data={data[1]}/>
    </div>
  );
}

export default App;
