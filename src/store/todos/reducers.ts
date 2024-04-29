import {
  TodosState,
  ADD_TODO,
  DELETE_TODO,
  SET_TODO_COMPLETED,
  TodoActionTypes,
} from "./types";
import { todos } from "../../data/todos";

const initialState: TodosState = {
  todos: todos,
};

export function todosReducer(
  state = initialState,
  action: TodoActionTypes
): TodosState {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.todoId),
      };
    case SET_TODO_COMPLETED: {
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.todoId) {
          return { ...todo, completed: action.isCompleted }; 
        }
        return todo; 
      });

      return {
        ...state,
        todos: updatedTodos, 
      };
    }
    default:
      return state;
  }
}
