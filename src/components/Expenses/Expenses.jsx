import { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
import './Expenses.css'

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2026')

    const changeYearHandler = (year) => {
        console.log('Year data in Expenses.js', year)
        setSelectedYear(year)
    }

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={selectedYear}
                onChangeYear={changeYearHandler}
            />
            {props.data.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    data={expense}
                />
            ))}
        </Card>
    );
}

export default Expenses