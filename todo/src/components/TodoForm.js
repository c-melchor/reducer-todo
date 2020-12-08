import React, { useState } from "react";
import { addTodo, removeTodo, completedTodo } from "../actions/index";

const TodoForm = props => {
  const { state, dispatch } = props;
  const [formData, setFormData] = useState("");

  const handleChanges = e => {
    setFormData(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(
      addTodo(
        state.todos.push({
          ...state,
          item: formData,
          id: Date.now(),
          completed: false
        })
      )
    );
  };

  return (
    <div>
      <pre>{JSON.stringify(state.null, 2)}</pre>
      <form>
        <label htmlFor="todo" />
        To do:
        <br />
        <input type="text" id="todo" onChange={handleChanges} />
        <br />
        <button onClick={onSubmit}>Click to Add</button>
        <button>Click to Clear</button>
      </form>
    </div>
  );
};

export default TodoForm;
