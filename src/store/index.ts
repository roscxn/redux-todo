import { combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit"
import { todosReducer } from "./todos/reducers"

const rootReducer = combineReducers({
  todos: todosReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default store
