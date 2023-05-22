import React,{useState} from "react"
import ExpensesList from "./ExpensesList"
import ExpensesFilter from "./ExpensesFilter"
import Card from "./UI/Card.js"
import "./Expenses.css"

function Expenses(props){
    const [filtered, setFilter]= useState("2020")
    const filterChangeHandler = (selectedYear)=>{
        console.log("expenses.js")
        console.log(selectedYear)
        setFilter(selectedYear)
    }

    const selectedFilter = props.items.filter(expense=> {
        return expense.date.getFullYear().toString()===filtered
    })

    
        
    return (
    <div >
    <li>
    <Card className="expenses" >
    <ExpensesFilter selected={filtered} onChangeFilter={filterChangeHandler} />
    <ExpensesList items={selectedFilter} />
    
     </Card>
     </li>
     </div>
    )
}

export default Expenses