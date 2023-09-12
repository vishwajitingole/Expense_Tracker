import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './card';

function ExpenseItem({ title, amount, date }) { // Destructure the props here
  return (
    
    <Card className="expense-item">
      <ExpenseDate date={date} /> {/* Pass the date prop to ExpenseDate */}
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">₹ {amount}</div>
        <button onClick={()=>{alert("Clicked");}} >Ugly Button</button>
      </div>
      </Card>
  );
}

export default ExpenseItem;

