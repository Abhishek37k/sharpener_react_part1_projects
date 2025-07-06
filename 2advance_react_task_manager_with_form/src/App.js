import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

function App() {
  // const initialExpenses = [
  //   { id: 1, title: "Insurance", date: new Date(2023, 7, 15), price: 100 },
  //   { id: 2, title: "Book", date: new Date(2023, 8, 25), price: 10 },
  //   { id: 3, title: "Pen", date: new Date(2023, 2, 10), price: 1 },
  //   { id: 4, title: "Laptop", date: new Date(2023, 9, 17), price: 200 },
  // ];

  const [expenses, setExpenses] = useState([]);
 const [filteredYear, setFilteredYear] = useState("2023");
  const getUserData = (Userdata) => {
    console.log("User data fetched successfully in app.js");
    console.log(Userdata);
    // Create a new expense object with a unique ID

    const newExpense = {
      id: Math.random().toString(),
      title: Userdata.title,
      date: Userdata.date,
      price: Userdata.amount,
    };
    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
    console.log("Expense data added successfully");
  };
  const selectedYear = (year) => {
    console.log("Selected year:", year);
    setFilteredYear(year);
   
  };

    const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  return (
    <div>
      <h2 style={{ textAlign: "center", textDecoration: "underline" }}>
        Expense Tracker using REACT{" "}
      </h2>
      <NewExpense getUserData={getUserData} />
      {expenses.length === 0 ? (
        <h3
          style={{
            textAlign: "center",
            height: "30vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "gray",
            position: "absolute",
            bottom: "0%",
            left: "0%",
            right: "0%",
          }}
        >
          Please add some values to see the List
        </h3>
      ) : (

       <Expenses
          onSelectingFilter={selectedYear}
          expenses={filteredExpenses}
          selectedYear={filteredYear}
        />
        
      )}
    </div>
  );
}

export default App;
