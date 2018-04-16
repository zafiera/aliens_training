import React, { Component } from "react";
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

export class ExpenseDashboardPage extends Component{
    render(){
        return(
    <div>
        <ExpenseListFilters/>
        <ExpenseList/>
    </div>
        )
    }

}