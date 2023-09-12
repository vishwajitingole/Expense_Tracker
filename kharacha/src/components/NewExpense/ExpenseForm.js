import React,{useState} from 'react'
import './ExpenseForm.css';

function ExpenseForm() {

  const[enteredTitle,setTitle]= useState('');//this empty paranthesis depicts our initial stage
    const[enteredAmount,setAmount]=useState();
    const[enteredDate,setDate]=useState();

    //OR

//    const [userInput,setUserInput]= useState({
//         title:'',
//         amount:'',
//         date:''
//     })


    const titleChangeHandler=(event)=>{
        //using event.target.value handler we can see what exactly the user inputing

        setTitle(event.target.value);
    }
    const amountChangeHandler=(event)=>{

        setAmount(event.target.value);
       
    }
    const dateChangeHandler=(event)=>{
        setDate(event.target.value);
       
    }


//Here we are trying to make one single inputHandler
//We were unable to pass input Change handles directly because here we were trying to pass two parameters 
//And the moment when we did that in the onclick it will pass an event as a single parameter

//Using this arrow function we have full control how the input changes

                        const inputChangeHandler=(identifier,value)=>{
                            if(identifier=='title')
                            {setTitle(value);}
                            else if(identifier=='date'){
                                setDate(value);
                            }
                            else if(identifier=='amount'){
                                setAmount(value);
                            }
                        }


const submitHandler =(event)=>{
    event.preventDefault();
    const expenseData={

    //Here we are mapping it with the given code above the left side destructure
    // const[enteredTitle,setTitle]= useState();
    // const[enteredAmount,setAmount]=useState();
    // const[enteredDate,setDate]=useState();

         title:enteredTitle,
         amount:enteredAmount,
         date:new Date(enteredDate)
    };
    console.log(expenseData);
};

      return (
    <body>
        <form  onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
        
                    <input type='text' value={enteredTitle} onChange={(event)=>{
                        inputChangeHandler('title',event.target.value);
                        //Here we pass title as an identifier
                }}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='1'max='100000000000000000000000' value={enteredAmount} onChange={(event)=>{
                        inputChangeHandler('amount',event.target.value);
                        //Here we pass title as an identifier
                }}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2024-01-01' value={enteredDate} onChange={(event)=>{
                        inputChangeHandler('date',event.target.value);
                        //Here we pass title as an identifier
                }} />
                </div>
                <div className="new-expense__actions">
                    <button type='submit' >Add Expense</button>
                </div>
            </div>
        </form>
    </body>
  )
}

export default ExpenseForm