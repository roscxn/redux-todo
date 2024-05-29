import { TodoState, ADD_TODO, TodoActionTypes } from "./types"

const initialState: TodoState = {
  todos: [],
}

export function todosReducer(
  state = initialState,
  action: TodoActionTypes
): TodoState {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo],
      }
    default:
      return state
  }
}
