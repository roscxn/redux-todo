import { TodoMobile, ADD_TODO_MOBILE } from "./types"

export function addTodoMobile(todo: TodoMobile) {
  return {
    type: ADD_TODO_MOBILE,
    todo,
  }
}
