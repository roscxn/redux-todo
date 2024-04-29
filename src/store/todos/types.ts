export interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

export interface TodosState {
  todos: Todo[];
}

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const SET_TODO_COMPLETED = "SET_TODO_COMPLETED";

interface AddTodoAction {
  type: typeof ADD_TODO;
  todo: Todo;
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  todoId: number;
}

interface SetTodoCompletedAction {
  type: typeof SET_TODO_COMPLETED;
  todoId: number;
  isCompleted: boolean;
}

export type TodoActionTypes =
  | AddTodoAction
  | DeleteTodoAction
  | SetTodoCompletedAction;
