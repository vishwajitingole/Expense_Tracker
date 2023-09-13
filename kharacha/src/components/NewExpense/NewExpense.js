import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm'; 




function NewExpense(props) {
  const ExpenseDataHandler=(enteredExpenseData)=>{
    const expenseData={
      //Here we are pulling off the data out of the  expenseform
      //child to parent data transfer using spread operator
      ...enteredExpenseData,
      //Creating a unique id for each data 
       id:Math.random().toString()
       
    };
    props.onAddExpense(expenseData);
  
  };
  return (
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={ExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense