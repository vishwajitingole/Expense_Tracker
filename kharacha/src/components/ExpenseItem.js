import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './card';
import {useState} from 'react';
import NewExpense from './NewExpense/NewExpense';


function ExpenseItem({ title, amount, date })// Destructure the props here
 {
  //Use State is a react hook all the react hooks starts from keyword use
  let [updatedtitle,setTitle]= useState(title);
  //We need useState so that the changes will get reflected into the system
  
  let clickHandler=()=>{
   setTitle("😁 Paisa Laayaa?");
   
  }
  return (
    
    
    
    <Card className="expense-item">
      
      <ExpenseDate date={date} /> {/* Pass the date prop to ExpenseDate */}
      <div className="expense-item__description">
        <h2 className='tittle'>{updatedtitle}</h2>
        <div className="expense-item__price">₹ {amount}</div>
        <button onClick={clickHandler} >Ugly Button</button>
      </div>
      </Card>
  );
}

export default ExpenseItem;

