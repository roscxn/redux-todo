import { Todo, ADD_TODO } from "./types"

export function addTodo(todo: Todo) {
  return {
    type: ADD_TODO,
    todo,
  }
}
