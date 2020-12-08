import { REMOVE_TODO, ADD_TODO, COMPLETED_TODO } from "../actions/index";

export const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    },
    {
      item: "Make coffee",
      completed: false,
      id: 716786
    },
    {
      item: "Sleep",
      completed: false,
      id: 76129
    }
  ],
  addedTodo: ""
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, newTodo: action.payload };
    case REMOVE_TODO:
      return { ...state, todoId: action.payload };
    case COMPLETED_TODO:
      return state.map(todo =>
        action.payload === todo.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
}
