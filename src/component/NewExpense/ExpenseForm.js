import React,{useState} from "react";
import "./ExpenseForm.css"


const ExpenseForm = (props)=>{
    const [enteredTitle, setTitle]=useState("")
    const [enteredAmount, setAmount]=useState("")
    const [enteredDate, setDate]=useState("")
    const TitleChangeHandler=(event)=>{
        setTitle(event.target.value)
        console.log(event.target.value)
    }
    const AmountChangeHandler=(event)=>{
        setAmount(event.target.value)
        console.log(event.target.value)
    }
    const DateChangeHandler=(event)=>{
        setDate(event.target.value)
        console.log(event.target.value)
    }
    const submitHandler=(event)=>{
        event.preventDefault()
        const expenseData={
            title: enteredTitle,
            amount:+enteredAmount,
            date: new Date(enteredDate)
        }
        // console.log(expenseData)
        props.onSaveExpenseData(expenseData)
        setTitle("");
        setAmount("");
        setDate("");
    }
    return (
        <form action="" onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text" value={enteredTitle} onChange={TitleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={AmountChangeHandler}  />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" min="2019-01-01" step="2022-12-31" value={enteredDate} onChange={DateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}> Cancel</button>
                <button type="submit">Add Expense</button>
                
            </div>         
        </form>
    )
   

}

export default ExpenseForm;