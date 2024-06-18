export interface Todo {
  _id: string
  task: string
  completed: boolean
  createdAt: string
}

export interface TodoState {
  todos: Todo[]
}

export const ADD_TODO = "ADD_TODO"

interface AddTodoAction {
  type: typeof ADD_TODO
  todo: Todo
}

export type TodoActionTypes = AddTodoAction
