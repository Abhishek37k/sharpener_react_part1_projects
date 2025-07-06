// Write your code here
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const yearChangedHandler = (selectedYear) => {
    props.onSelectingFilter(selectedYear);
  }
  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={yearChangedHandler} />
     {props.expenses.length !==0 &&<ExpensesChart filteredExpensesForChart={props.expenses} />} 
      {props.expenses.length === 0 ? <h5 style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>No expenses for the seleted Year as no now</h5> : props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          price={expense.price}
        />
      ))}
    </Card>
  );
}

export default Expenses;
