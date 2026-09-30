import { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
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

    console.log('Filtered expenses in Expenses.js', filteredExpenses)

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={selectedYear}
                onChangeYear={changeYearHandler}
            />
            {filteredExpenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    data={expense}
                />
            ))}
        </Card>
    );
}

export default Expenses