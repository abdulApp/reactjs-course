import React, { useReducer } from "react";

// A function you call to send actions | This is the starting value of state when
// to the reducer, which then update   | the component is first rendered
// the state.                          |
//                 👇                                👇
// const [state, dispatch] = useReducer(reducer, initialState);
//         👆                             👆
// The current state value which you   | This is a function that describes how the state should change
// can use in your component           | based on the action. It takes the current state and an action
//                                     | as inputs, and returns the new state.

const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      throw new Error();
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <div>UseReducer</div>;
};

export default UseReducer;
