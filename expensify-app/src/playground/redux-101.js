import {
  createStore,
  combineReducers
} from "redux";
import uuid from 'uuid';

// const incrementCount = ({
//   incrementBy = 1
// } = {}) => ({
//   type: "INCREMENT",
//   incrementBy
// });

// const decrementCount = ({
//   decrementBy = 1
// } = {}) => ({
//   type: "DECREMENT",
//   decrementBy
// })

// const resetCount = () => ({
//   type: "RESET"
// })

// const setCount = ({count}) => ({
//   type: "SET",
//   count
// })

// const countReducer = (state = {
//   count: 0
// }, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       const incrementBy =
//         typeof action.incrementBy === "number" ? action.incrementBy : 1;
//       return {
//         count: state.count + incrementBy
//       };
//     case "DECREMENT":
//       const decrementBy =
//         typeof action.decrementBy === "number" ? action.decrementBy : 1;
//       return {
//         count: state.count - decrementBy
//       };
//     case "RESET":
//       return {
//         count: 0
//       };
//     case "SET":
//       return {
//         count: action.count
//       };
//     default:
//       return state;
//   }
// }

// const store = createStore(countReducer);

// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(incrementCount({incrementBy: 5}));

// store.dispatch(incrementCount());

// store.dispatch(resetCount());

// store.dispatch(decrementCount());

// store.dispatch(decrementCount({decrementBy: 10}));

// store.dispatch(setCount({count: 101}));

///////////////////////////////////////////////////////////////////////////////////////////
//ADD_EXPENSE
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  }
})

//REMOVE_EXPENSE
const removeExpense=({id} = {})=>({
  type: 'REMOVE_EXPENSE',
  id
 })
//EDIT_EXPENSE

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {

  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ]
    case 'REMOVE_EXPENSE':
    return [
      ...state.filter(({id})=> id!== action.id)
    ]

    default:
      return state;
  }
}


const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default: return state;
  }
}

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({
  description: 'Rent'
}));

store.dispatch(removeExpense({ id: expenseOne.expense.id}))

const demoState = {
  expenses: [{
    id: 'sdh',
    description: 'Jan Rent',
    note: 'This is fkjesjn',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    test: 'rent',
    sortBy: 'amount', //or amount
    startDate: undefined,
    endDate: undefined

  }
};