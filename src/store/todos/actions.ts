import { Todo, ADD_TODO, DELETE_TODO, SET_TODO_COMPLETED } from "./types";

export function addTodo(todo: Todo) {
  return {
    type: ADD_TODO,
    todo,
  };
}

export function deleteTodo(todoId: number) {
  return {
    type: DELETE_TODO,
    todoId,
  };
}

export function setTodoCompleted(todoId: number, isCompleted: boolean) {
  return {
    type: SET_TODO_COMPLETED,
    todoId,
    isCompleted,
  };
}
