import React from 'react';
import ExpenseItem from './components/ExpenseItem';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      title: 'Car Insurance',
      amount: 5000,
      date: new Date(2023, 5, 12),
    },
    {
      title: 'Health Insurance',
      amount: 19000,
      date: new Date(2023, 1, 1),
    },
    {
      title: 'Mobile Phone',
      amount: 20000,
      date: new Date(2023, 1, 1),
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
       
        <img src='https://im.indiatimes.in/content/2023/Jun/Untitled-design---2023-06-24T143900868_6496b2b10a63b.png?w=1200&h=900&cc=1'/>
        <div className="tittle">
        <h1>Expense Tracker</h1>
        </div>
      </header>

      <NewExpense />

      <div className="expenses" >
      {expenses.map((expense, index) => (

        <ExpenseItem
          key={index}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      </div>

      
    </div>
  );
}

export default App;

/*  

The place where we used expense.map works like a loop 
or else we had to declare to multiple times

      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
*/