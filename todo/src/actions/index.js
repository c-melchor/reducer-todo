export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const COMPLETED_TODO = "COMPLETED_TODO";

export const addTodo = newTodo => {
  return { type: ADD_TODO, payload: newTodo };
};

export const removeTodo = todoId => {
  return { type: REMOVE_TODO, payload: todoId };
};

export const completedTodo = completed => {
  return { type: COMPLETED_TODO, payload: completed };
};

// export const clearCompleted = () => {

// }
