import { useState } from 'react'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.data.title)

    const clickHandler = () => {
        console.log('Clicked!')
        setTitle(`Updated by click ${title}`)
        console.log(title)
    }

    return (
            <Card className='expense-item'>
                <ExpenseDate date={props.data.date} />
                <div className='expense-item__description'>
                    <h2>{title}</h2>
                    <Card className='expense-item__price'>{props.data.price}</Card>
                </div>
                <button onClick={clickHandler}>Click Me</button>
            </Card>
    )
}

export default ExpenseItem;