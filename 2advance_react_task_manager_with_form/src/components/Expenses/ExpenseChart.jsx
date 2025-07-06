// Write your code below:
import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {


  return <Chart chatExpenses={props.filteredExpensesForChart} />;
};

export default ExpensesChart;


