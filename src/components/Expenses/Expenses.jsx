import { useState } from 'react'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import Card from '../UI/Card'
import './Expenses.css'

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2024')

    const changeYearHandler = (year) => {
        console.log('Year data in Expenses.js', year)
        setSelectedYear(year)
    }

    const filteredExpenses = props.data.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedYear
    })

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={selectedYear}
                onChangeYear={changeYearHandler}
            />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    );
}

export default Expenses