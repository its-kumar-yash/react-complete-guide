import React, { useState } from "react";
import "./ExpenseForm.css";

//Two Way Binding is important for form submission

const ExpenseForm = (props) => {
  //Refered Individual states
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEneteredDate] = useState("");

  //Alternative of multiple states
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  const titleChangeHandler = (event) => {
    //to catch input data
    // console.log(event.target.value);
    setEnteredTitle(event.target.value);

    //Not lastest state
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // })
    //Refered then above
    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: event.target.value};
    // })
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // })
  };

  const dateChangeHandler = (event) => {
    setEneteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault(); // page will not reload now

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    //console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle(""); //to clear the title
    setEnteredAmount("");
    setEneteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* Two Way Binding */}
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
