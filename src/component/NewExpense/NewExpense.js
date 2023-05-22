import React,{useState} from "react";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props)=>{
    const SaveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        // console.log(expenseData)
        props.onAddExpense(expenseData)
    }

    const [buttonClicked, setbuttonClicked] = useState(true)
    const setClickHandler = () => {setbuttonClicked(false)}

    const stopEditHandler = () =>{setbuttonClicked(true)}

    return <div className="new-expense">
        {buttonClicked ?
        <button onClick={setClickHandler}> Add Expenses</button> :
        <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onCancel={stopEditHandler} />
        }
    </div>
}

export default NewExpense;
