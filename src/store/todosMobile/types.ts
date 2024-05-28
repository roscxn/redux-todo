export interface TodoMobile {
  _id: string
  task: string
  completed: boolean
}

export interface TodoMobileState {
  todosMobile: TodoMobile[]
}

export const ADD_TODO_MOBILE = "ADD_TODO_MOBILE"

interface AddTodoMobileAction {
  type: typeof ADD_TODO_MOBILE
  todo: TodoMobile
}

export type TodoMobileActionTypes = AddTodoMobileAction
