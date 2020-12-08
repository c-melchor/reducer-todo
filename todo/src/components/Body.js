import React, { useReducer } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import reducer, { initialState } from "../reducers/index";
import { addTodo, removeTodo, completedTodo } from "../actions/index";

const Body = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        <Todo state={state} dispatch={dispatch} completedTodo={completedTodo} />
      </div>
      <div>
        <TodoForm
          addTodo={addTodo}
          removeTodo={removeTodo}
          completedTodo={completedTodo}
          dispatch={dispatch}
          state={state}
        />
      </div>
    </div>
  );
};

export default Body;
