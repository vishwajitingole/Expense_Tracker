import React,{useState} from 'react'
import './ExpenseForm.css';

function ExpenseForm() {
    // const  [title,settitle]= useState();
    // const[amount,setAmount]=useState();
    // const[date,setDate]=useState();

    //OR

   const [userInput,setUserInput]= useState({
        title:'',
        amount:'',
        date:''
    })


    const titleChangeHandler=(event)=>{
        //using event.target.value handler we can see what exactly the user inputing
        setUserInput({
            ...userInput,
            title:event.target.value,
        })
    }
    const amountChangeHandler=(event)=>{
        setUserInput({
            ...userInput,
            amount:event.target.value,
        })
    }
    const dateChangeHandler=(event)=>{
        setUserInput({
            ...userInput,
            date:event.target.value,
        })
    }
      return (
    <body>
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type='text' onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='1'max='100000000000000000000000' onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2024-01-01' onChange={dateChangeHandler} />
                </div>
                <div className="new-expense__actions">
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    </body>
  )
}

export default ExpenseForm