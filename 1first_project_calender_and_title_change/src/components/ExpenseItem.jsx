// Write your code here
import "./ExpenseItem.css";

import Card from "./Card";

import ExpenseDate from './ExpenseDate';
function ExpenseItem(props) {

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} ></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
