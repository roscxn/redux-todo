import { combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit"
import { todosReducer } from "./todos/reducers"
import { todosMobileReducer } from "./todosMobile/reducers"

const rootReducer = combineReducers({
  todos: todosReducer,
  todosMobile: todosMobileReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default store
