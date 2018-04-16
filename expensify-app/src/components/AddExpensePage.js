import React, { Component } from "react";
import { ExpenseForm } from "./ExpenseForm";

export class AddExpensePage extends Component {
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm />
      </div>
    );
  }
}
