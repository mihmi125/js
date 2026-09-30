import { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
import './Expenses.css'

const Expenses = (props) => {
    // Hetkel valitud aasta (algseisund 2023)
    const [selectedYear, setSelectedYear] = useState('2023')

    const changeYearHandler = (year) => {
        console.log('Year data in Expenses.js', year)
        setSelectedYear(year)
    }

    console.log(props);

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={selectedYear}
                onChangeYear={changeYearHandler}
            />
            <ExpenseItem data={props.data[0]}/>
            <ExpenseItem data={props.data[1]}/>
        </Card>
    );
}

export default Expenses