import React from "react";
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = React.useState(false);
  const [showFormBtnTitle, setShowFormBtnTitle] = React.useState("Add New Expense");

  const showFormAfterClick = () => {
    setShowForm(!showForm);
    setShowFormBtnTitle(showForm ? "Add New Expense" : "Close Form");
  }
  return (
    <div className="new-expense">
      <button className="new-expense__button" onClick={showFormAfterClick}>{showFormBtnTitle}</button>

      {showForm ? <h2 className="new-expense__title">Form to add Expenses</h2> : <h2 className="new-expense__title">Click the button to add Expenses</h2>}
      {showForm && <ExpenseForm mainBtnTitleUpdate={()=>setShowFormBtnTitle("Add New Expense")} isEditing={setShowForm} getUserData={props.getUserData} />}
    </div>
  );
};

export default NewExpense;
