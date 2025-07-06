// Write your code here
import "./ExpenseItem.css";
import Card from "../UI/Card"
import ExpenseDate from './ExpenseDate';
// import { useState } from "react";


function ExpenseItem(props) {

//  const [title, setTitle] = useState(props.title);

  // function changeClickHandler() {
  //   console.log('Button clicked');
  //   setTitle('Title Updated!');
  // }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} ></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      {/* <button style={{ padding: '10px', margin: '10px' }} onClick={changeClickHandler}>Change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;
