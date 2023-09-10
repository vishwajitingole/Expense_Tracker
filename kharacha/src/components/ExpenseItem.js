import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem({ title, amount, date }) { // Destructure the props here
  return (
    
    <div className="expense-item">
      <ExpenseDate date={date} /> {/* Pass the date prop to ExpenseDate */}
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">₹ {amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

