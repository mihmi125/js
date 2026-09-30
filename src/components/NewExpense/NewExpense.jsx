import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
 
const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        // Lisame unikaalse id, nagu expenses massiivis
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
 
        console.log(expenseData)
 
        // Edasi App komponendile
        props.onAddExpense(expenseData)
    }
 
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}
 
export default NewExpense