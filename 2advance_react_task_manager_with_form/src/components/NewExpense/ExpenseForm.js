import React, { useState } from "react";
import "./ExpenseForm.css";

const initialData = {
  enteredTitle: "",
  enteredAmount: "",
  enteredDate: "",
};

const ExpenseForm = (props) => {
  const [userInput, setuserInput] = useState(initialData);

  const titleChangeHandler = (event) => {
    setuserInput((prevState) => ({
      ...prevState,
      enteredTitle: event.target.value,
    }));
  };

  const amountChangeHandler = (event) => {
    setuserInput((prevState) => ({
      ...prevState,
      enteredAmount: event.target.value,
    }));
  };

  const dateChangeHandler = (event) => {
    setuserInput((prevState) => ({
      ...prevState,
      enteredDate: event.target.value,
    }));
  };

  const formSubmithandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount, // Convert to number
      date: new Date(userInput.enteredDate), // Convert to Date object
    };
    console.log(expenseData);
    setuserInput(initialData); // Reset the form
    console.log("Expense data submitted successfully from expense form");
    props.getUserData(expenseData); // Call the parent function to pass the data
    props.isEditing(false); // Close the form after submission
    props.mainBtnTitleUpdate(); // Update the button title in the parent component
  };

  // The following code is commented out as it is not being used in the current implementation.
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");

  // const titleChangeHandler = (event) => {
  //   setEnteredTitle(event.target.value);
  // };
  // const dateChangeHandler = (event) => {
  //   setEnteredAmount(event.target.value);
  // };
  // const amountChangeHandler = (event) => {
  //   setEnteredDate(event.target.value);
  // };
  return (
    <form onSubmit={formSubmithandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            id="title"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={userInput.enteredAmount}
            id="amount"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            value={userInput.enteredDate}
            id="date"
            min="2023-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={() => props.isEditing(false)}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
