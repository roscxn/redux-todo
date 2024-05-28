import {
  TodoMobileState,
  ADD_TODO_MOBILE,
  TodoMobileActionTypes,
} from "./types"

const initialState: TodoMobileState = {
  todosMobile: [],
}

export function todosMobileReducer(
  state = initialState,
  action: TodoMobileActionTypes
): TodoMobileState {
  switch (action.type) {
    case ADD_TODO_MOBILE:
      return {
        ...state,
        todosMobile: [...state.todosMobile, action.todo],
      }
    default:
      return state
  }
}
