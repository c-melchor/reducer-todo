import React from "react";
import { completedTodo } from "../actions";

export default function Todo(props) {
  const { state, dispatch } = props;
  console.log("todo state ", state);

  const onClick = e => {
    dispatch(completedTodo(state.todos.id));
    console.log(state.todos, "state on click");
  };

  return (
    <div>
      {state.todos.map(todo => (
        <div onClick={onClick} key={todo.id}>
          <p>{todo.item}</p>
        </div>
      ))}
    </div>
  );
}
