import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

// function Expenses(props) {
//   const [filteredYear, setFilteredYear] = useState("2020");

//   const filterChangeHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//   };

//   return (
//     <Card className="expenses">
//       <ExpensesFilter
//         selected={filteredYear}
//         onChangeFilter={filterChangeHandler}
//       />

//       {/* Dynamic Expression
//       Convert Array into new Array */}
//       {props.items.map((expense) => (
//         <ExpenseItem
//           title={expense.title}
//           amount={expense.amount}
//           date={expense.date}
//         />
//       ))}

//       {/* <ExpenseItem
//         title={props.item[0].title}
//         amount={props.item[0].amount}
//         date={props.item[0].date}
//       ></ExpenseItem>
//       <ExpenseItem
//         title={props.item[1].title}
//         amount={props.item[1].amount}
//         date={props.item[1].date}
//       ></ExpenseItem>
//       <ExpenseItem
//         title={props.item[2].title}
//         amount={props.item[2].amount}
//         date={props.item[2].date}
//       ></ExpenseItem>
//       <ExpenseItem
//         title={props.item[3].title}
//         amount={props.item[3].amount}
//         date={props.item[3].date}
//       ></ExpenseItem> */}
//     </Card>
//   );
// }

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //year filter
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {/* {filteredExpenses.length === 0 ? (
          <p>No Expenses Found.</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              // always add key for map
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
